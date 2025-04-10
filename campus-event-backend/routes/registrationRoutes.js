import express from "express";
import models from "../models/index.js"; // Import the centralized models

const router = express.Router();

// Register for an event
router.post("/", async (req, res) => {
    try {
        const { userId, eventId } = req.body;

        // Validate userId and eventId
        const user = await models.User.findByPk(userId);
        const event = await models.Event.findByPk(eventId);

        if (!user || !event) {
            return res.status(400).json({ message: "Invalid user ID or event ID" });
        }

        const registration = await models.Registration.create({ userId, eventId });
        res.status(201).json(registration);
    } catch (err) {
        res.status(500).json({ message: "Error registering for event", error: err.message });
    }
});

export default router;
