const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');
const participantRoutes = require('./routes/participantRoutes'); // Add participant routes
const authenticateToken = require('./utils/authMiddleware');
const errorHandler = require('./utils/errorHandler'); // Import error handler

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/events', authenticateToken, eventRoutes);
app.use('/api/participants', participantRoutes); // Mount participant routes

// Error handling middleware (must be added last)
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
