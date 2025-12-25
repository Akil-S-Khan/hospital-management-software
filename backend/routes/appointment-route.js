const {getAllAppointments,AddAppointments, DeleteAppointments, EditAppointments} = require("../controllers/appointment-controller");

const router = require("express").Router();

router.get("/appointments", getAllAppointments);
router.post("/add-appointments", AddAppointments);

router.delete("/delete-appointments", DeleteAppointments)

router.put("/edit-appointments", EditAppointments)

module.exports = router;