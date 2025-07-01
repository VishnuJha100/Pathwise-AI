import express from "express";
import { updateSkillStatus } from "../controllers/progressController.js";

const router = express.Router();

router.put("/update-skills-status", updateSkillStatus);

export default router;