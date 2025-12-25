const { getDashboard } = require("../controllers/dashboard-controller");

const router = require("express").Router();

router.get("/dashboard", getDashboard);

module.exports = router;
