const express = require('express')
const {ListUser, AddUser, DeleteUser} = require("../controllers/users-controller");
const router = express.Router();

router.get('/users', ListUser)
router.post('/adduser', AddUser)
router.post('/deleteuser', DeleteUser)
//new Update
module.exports = router;
