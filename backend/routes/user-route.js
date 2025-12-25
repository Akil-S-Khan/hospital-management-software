import { VerifyUser, AddUser } from "../controllers/user-controller.js";
import express from "express";
const router = express.Router();

router.post("/verify-user", VerifyUser);
router.post("/add-user", AddUser);

export default router;
