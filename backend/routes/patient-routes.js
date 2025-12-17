import express from "express";
import { AddPatients, DeletePatients, getAllPatient, UpdatePatients } from "../controllers/patient-controller.js";

let router = express.Router();

router.get("/patients", getAllPatient);
router.post("/add-patient", AddPatients);
router.put("/update-patient/:id", UpdatePatients)
router.delete("/delete-patient/:id", DeletePatients)

export default router;