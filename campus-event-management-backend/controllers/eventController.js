const pool = require('../config/database');

// Create a new event
exports.createEvent = async (req, res) => {
    try {
        const {title, description, date} = req.body;
        const organizerId = req.userId; // Extracted from middleware

        const newEvent = await pool.query(
            'INSERT INTO events (title, description, date, organizer_id) VALUES ($1, $2, $3, $4) RETURNING *',
            [title, description, date, organizerId]
        );

        res.status(201).json({message: 'Event created successfully', event: newEvent.rows[0]});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Server error'});
    }
};

// Get all events
exports.getAllEvents = async (req, res) => {
    try {
        const events = await pool.query('SELECT * FROM events ORDER BY date ASC');
        res.status(200).json(events.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Server error'});
    }
};
