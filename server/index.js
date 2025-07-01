import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotnev from "dotenv";
import authRoutes from "./routes/authRoutes.js";

dotnev.config();

const app = express();
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 8000;

// Routes
app.use("/api/auth", authRoutes)

// DB connection
mongoose.connect(process.env.MONGO_URI, {})
    .then(() => {
        console.log("MongoDB Connected!");
        app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
    })
    .catch((err) => console.error(err));