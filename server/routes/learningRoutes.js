import express from "express";
import { generateLearningPath } from "../controllers/learningController.js";

const router = express.Router();
router.post("/roadmap", generateLearningPath);

export default router;
