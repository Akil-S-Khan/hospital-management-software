import {
  getAllAppointments,
  AddAppointments,
  DeleteAppointments,
  EditAppointments,
} from "../controllers/appointment-controller.js";
import express from "express";
const router = express.Router();

router.get("/appointments", getAllAppointments);
router.post("/add-appointments", AddAppointments);

router.delete("/delete-appointments", DeleteAppointments);

router.put("/edit-appointments", EditAppointments);

export default router;
