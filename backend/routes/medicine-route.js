import {
  getAllMedicines,
  addMedicines,
  deleteMedicines,
  EditMedicines,
} from "../controllers/medicine-controller.js";
import express from "express";
const router = express.Router();

router.get("/medicines", getAllMedicines);
router.post("/add-medicines", addMedicines);
router.delete("/delete-medicines", deleteMedicines);
router.put("/edit-medicines", EditMedicines);

export default router;
