import express from "express";
import { AddDoctor, DeleteDoctor, getAllDoctor, UpdateDoctor } from "../controllers/doctors-controllers.js";

let router = express.Router();

router.get("/doctor", getAllDoctor);
router.post("/add-doctor", AddDoctor);
router.put("/update-doctor", UpdateDoctor);
router.delete("/delete-doctor", DeleteDoctor);

export default router;