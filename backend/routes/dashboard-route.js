import getDashboard from "../controllers/dashboard-controller.js";
import express from "express";
const router = express.Router();

router.get("/dashboard", getDashboard);

export default router;
