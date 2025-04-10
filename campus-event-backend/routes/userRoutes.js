import express from "express";
import User from "../models/user.js";

const router = express.Router();

// Register a new user
router.post("/", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const newUser = await User.create({ name, email, password });
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ message: "Error creating user", error: err.message });
    }
});

// Get all users (admin-only)
router.get("/", async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json({ message: "Users fetched successfully", users });
    } catch (err) {
        res.status(500).json({ message: "Error fetching users", error: err.message });
    }
});

export default router;
