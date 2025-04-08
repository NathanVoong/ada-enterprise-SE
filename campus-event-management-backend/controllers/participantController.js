const pool = require('../config/database');

// Register for an event
exports.registerForEvent = async (req, res) => {
    try {
        const {eventId} = req.body;
        const userId = req.userId; // Extracted from middleware

        const existingRegistration = await pool.query(
            'SELECT * FROM participants WHERE user_id = $1 AND event_id = $2',
            [userId, eventId]
        );

        if (existingRegistration.rows.length > 0) {
            return res.status(400).json({error: 'Already registered for this event'});
        }

        const newRegistration = await pool.query(
            'INSERT INTO participants (user_id, event_id) VALUES ($1, $2) RETURNING *',
            [userId, eventId]
        );

        res.status(201).json({message: 'Registered successfully', registration: newRegistration.rows[0]});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Server error'});
    }
};
