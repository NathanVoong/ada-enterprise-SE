const express = require('express');
const {registerForEvent} = require('../controllers/participantController');
const authenticateToken = require('../utils/authMiddleware');

const router = express.Router();

// Register for an event
router.post('/register', authenticateToken, registerForEvent);

module.exports = router;
