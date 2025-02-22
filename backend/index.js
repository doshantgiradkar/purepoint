import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./src/routes/user.routes.js";
import authorityRoutes from "./src/routes/authority.routes.js";
import connectDB from "./src/config/dbConfig.js";

dotenv.config();
const app = express();

// Middleware
app.use(express.json());  // 🟢 Enable JSON parsing for request bodies

// Routes
app.use("/api/users", userRoutes);
app.use("/api/authorities", authorityRoutes);

// Connect to MongoDB
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    connectDB();
    console.log(`Server running on port ${PORT}`);
});
