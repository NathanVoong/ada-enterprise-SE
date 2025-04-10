import express from "express";
import models from "../models/index.js";
import User from "../models/user.js";

const router = express.Router();

// Register a new user
router.post("/", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validate input
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields (name, email, password) are required" });
        }

        // Create the user
        const newUser = await models.User.create({
            name,
            email,
            password, // Store password as plain text
        });

        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ message: "Error creating user", error: err.message });
    }
});

// Get all users (admin-only)
router.get("/", async (req, res) => {
    try {
        const users = await models.User.findAll();
        res.status(200).json({ message: "Users fetched successfully", users });
    } catch (err) {
        res.status(500).json({ message: "Error fetching users", error: err.message });
    }
});

export default router;
