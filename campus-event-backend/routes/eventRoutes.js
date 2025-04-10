import express from "express";
import Event from "../models/event.js";

const router = express.Router();

// Create a new event
router.post("/", async (req, res) => {
    try {
        const { title, description, date, location, organizerId, imageUrl } = req.body;
        const newEvent = await Event.create({
            title,
            description,
            date,
            location,
            organizerId,
            imageUrl,
        });
        res.status(201).json(newEvent);
    } catch (err) {
        res.status(500).json({ message: "Error creating event", error: err.message });
    }
});

// Get all events
router.get("/", async (req, res) => {
    try {
        const events = await Event.findAll();
        res.status(200).json(events);
    } catch (err) {
        res.status(500).json({ message: "Error fetching events", error: err.message });
    }
});

export default router;
