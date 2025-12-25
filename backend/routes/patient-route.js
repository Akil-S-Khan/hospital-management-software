const {
  getAllPatients,
  AddPatients,
  DeletePatients,
  EditPatients,
} = require("../controllers/patient-controller");

const router = require("express").Router();

router.get("/patients", getAllPatients);
router.post("/add-patients", AddPatients);
router.delete("/delete-patients", DeletePatients);
router.put("/edit-patients", EditPatients);

module.exports = router;
