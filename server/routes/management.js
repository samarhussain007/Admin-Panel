import express from "express";
import { getUser } from "../controllers/general.js";
import { getAdmins, getUserPerformance } from "../controllers/management.js";

const router = express.Router();
router.get("/admins", getAdmins);
router.get("/performance/:id", getUserPerformance);

export default router;
