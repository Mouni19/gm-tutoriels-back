const express = require('express')
const {ListUser, AddUser, DeleteUser} = require("../controllers/users-controller");
const router = express.Router();

router.get('/users', ListUser)
router.post('/adduser', AddUser)
router.post('/deleteuser', DeleteUser)
router.post('/updateuser',UpdateUser)

module.exports = router;
