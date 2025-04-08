const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../config/database');
const dotenv = require('dotenv');

dotenv.config();

// Register a new user
exports.register = async (req, res) => {
    try {
        const {name, email, password} = req.body;

        // Check if user already exists
        const userExists = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (userExists.rows.length > 0) {
            return res.status(400).json({error: 'User already exists'});
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert user into the database
        const newUser = await pool.query(
            'INSERT INTO users (name, email, password_hash) VALUES ($1, $2, $3) RETURNING *',
            [name, email, hashedPassword]
        );

        res.status(201).json({message: 'User registered successfully', user: newUser.rows[0]});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Server error'});
    }
};

// Login a user
exports.login = async (req, res) => {
    try {
        const {email, password} = req.body;

        // Find user by email
        const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (user.rows.length === 0) {
            return res.status(400).json({error: 'Invalid credentials'});
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.rows[0].password_hash);
        if (!isMatch) {
            return res.status(400).json({error: 'Invalid credentials'});
        }

        // Generate JWT token
        const token = jwt.sign({userId: user.rows[0].id}, process.env.JWT_SECRET, {expiresIn: '1h'});

        res.status(200).json({message: 'Login successful', token});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Server error'});
    }
};
