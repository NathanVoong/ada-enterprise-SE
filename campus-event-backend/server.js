import dotenv from "dotenv";
dotenv.config();

import express from "express";
import sequelize from "./database.js";
import userRoutes from "./routes/userRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import registrationRoutes from "./routes/registrationRoutes.js";

const app = express();
const PORT = process.env.PORT || 5001; // Use port 5001 to avoid conflicts

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", userRoutes); // User-related endpoints
app.use("/api/events", eventRoutes); // Event-related endpoints
app.use("/api/registrations", registrationRoutes); // Registration-related endpoints

// Start the server and connect to the database
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, "0.0.0.0", async () => {
        console.log(`Server is running on port ${PORT}`);

        try {
            await sequelize.authenticate();
            console.log("Connection has been established successfully.");
        } catch (error) {
            console.error("Unable to connect to the database:", error);
        }
    });
});
