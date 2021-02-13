const express = require('express')
const {AddPerson, ListPerson, FindByName} = require("../controllers/person-controller");
const router = express.Router();

router.get('/persons', ListPerson)
router.post('/addperson', AddPerson)
router.get('/findbyname', FindByName)
module.exports = router;
