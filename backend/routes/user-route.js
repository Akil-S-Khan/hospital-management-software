const { VerifyUser, AddUser } = require("../controllers/user-controller");

const router = require("express").Router();

router.post("/verify-user", VerifyUser);
router.post("/add-user", AddUser);

module.exports = router;
