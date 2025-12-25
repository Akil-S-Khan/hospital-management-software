const {
  getAllMedicines,
  addMedicines,
  deleteMedicines,
  EditMedicines
} = require("../controllers/medicine-controller");

const router = require("express").Router();

router.get("/medicines", getAllMedicines);
router.post("/add-medicines", addMedicines);
router.delete("/delete-medicines", deleteMedicines);
router.put("/edit-medicines", EditMedicines);



module.exports = router;