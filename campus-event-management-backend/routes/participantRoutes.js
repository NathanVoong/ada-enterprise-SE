const express = require('express');
const { registerParticipant } = require('../controllers/participantController');
const router = express.Router();

router.post('/', registerParticipant);

module.exports = router;
