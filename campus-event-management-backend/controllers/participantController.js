const Participant = require('../models/Participant');

exports.registerParticipant = async (req, res) => {
    try {
        const participant = await Participant.create(req.body);
        res.status(201).json(participant);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
