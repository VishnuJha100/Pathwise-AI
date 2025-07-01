import express from "express";
import { matchRoles } from "../controllers/roleController.js";

const router = express.Router();

router.get("/match", matchRoles);

export default router;