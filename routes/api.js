const express = require('express')
const {AddPerson, ListPerson} = require("../controllers/person-controller");
const router = express.Router();

router.get('/persons', ListPerson)
router.post('/addperson', AddPerson)

module.exports = router;
