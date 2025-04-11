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

// Login a user
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find users matching the email
        const users = await models.User.findAll({ where: { email } });

        // Check if any user was found and validate the password
        if (users.length === 0 || users[0].password !== password) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Extract the first user (since email should be unique)
        const user = users[0];

        // Return user data (excluding sensitive fields like password)
        res.status(200).json({
            uuid: user.uuid,
            name: user.name,
            email: user.email,
        });
    } catch (err) {
        res.status(500).json({ message: "Error logging in", error: err.message });
    }
});

// Get a single user by UUID
router.get("/:uuid", async (req, res) => {
    try {
        const { uuid } = req.params;

        // Find the user by UUID
        const users = await models.User.findAll({ where: { uuid } });

        if (!users) {
            return res.status(404).json({ message: "User not found" });
        }

        const user = users[0];
        // Return user data (excluding sensitive fields like password)
        res.status(200).json({
            uuid: user.uuid,
            name: user.name,
            email: user.email,
        });
    } catch (err) {
        res.status(500).json({ message: "Error fetching user", error: err.message });
    }
});

export default router;
