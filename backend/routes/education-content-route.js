import {
  AddEducationContent,
  getAllEducationContent,
  DeleteEducationContent,
  EditEducationContent,
} from "../controllers/education-content-controller.js";
import express from "express";
const router = express.Router();

router.get("/education-content", getAllEducationContent);
router.post("/add-education-content", AddEducationContent);
router.put("/edit-education-content", EditEducationContent);
router.delete("/delete-education-content", DeleteEducationContent);

export default router;
