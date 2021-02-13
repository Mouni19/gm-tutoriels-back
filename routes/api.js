const express = require('express')
const {AddPerson, ListPerson, FindByName, EditPerson, DeletePerson} = require("../controllers/person-controller");
const router = express.Router();

router.get('/persons', ListPerson)
router.post('/addperson', AddPerson)
router.get('/findbyname', FindByName)
router.post('/editperson', EditPerson)
router.post('/deleteperson', DeletePerson)
module.exports = router;
