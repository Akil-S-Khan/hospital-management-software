const { AddEducationContent, getAllEducationContent, DeleteEducationContent, EditEducationContent } = require("../controllers/education-content-controller");

const router = require("express").Router();

router.get('/education-content', getAllEducationContent)
router.post('/add-education-content', AddEducationContent);
router.put('/edit-education-content', EditEducationContent);
router.delete('/delete-education-content', DeleteEducationContent);

module.exports = router;