const {
      getAllDoctors,
      AddDoctors,
      DeleteDoctors,
      EditDoctors,
} = require("../controllers/doctor-controller");

const router = require("express").Router();

router.get("/doctors", getAllDoctors);
router.post("/add-doctors", AddDoctors);
router.delete("/delete-doctors", DeleteDoctors);
router.put("/edit-doctors", EditDoctors);


module.exports = router;
