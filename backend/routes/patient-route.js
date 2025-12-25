import {
  getAllPatients,
  AddPatients,
  DeletePatients,
  EditPatients,
} from "../controllers/patient-controller.js";
import express from "express";
const router = express.Router();

router.get("/patients", getAllPatients);
router.post("/add-patients", AddPatients);
router.delete("/delete-patients", DeletePatients);
router.put("/edit-patients", EditPatients);

export default router;
