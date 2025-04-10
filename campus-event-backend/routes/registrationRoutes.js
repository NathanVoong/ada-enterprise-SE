import express from "express";
import Registration from "../models/registration.js";

const router = express.Router();

// Register for an event
router.post("/", async (req, res) => {
    try {
        const { userId, eventId } = req.body;
        const registration = await Registration.create({ userId, eventId });
        res.status(201).json(registration);
    } catch (err) {
        res.status(500).json({ message: "Error registering for event", error: err.message });
    }
});

export default router;
