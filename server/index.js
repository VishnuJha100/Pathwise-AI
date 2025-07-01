import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotnev from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import resumeRoutes from "./routes/resumeRoutes.js";
import roleRoutes from "./routes/roleRoutes.js";
import learningRoutes from "./routes/learningRoutes.js";
import progressRoutes from "./routes/progressRoutes.js";

dotnev.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/api/roles", roleRoutes);
app.use("/api/learning", learningRoutes);
app.use("/api/progress", progressRoutes);

// DB connection
mongoose.connect(process.env.MONGO_URI, {})
    .then(() => {
        console.log("MongoDB Connected!");
        app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
    })
    .catch((err) => console.error(err));