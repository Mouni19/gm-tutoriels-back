const express = require('express')
const router = express.Router();
const User = require('../model/user')

router.post('/addUser', (req, res) => {
    console.log(req.body)
    const nom = req.body.nom;
    const email = req.body.email;
    const password = req.body.password;

    const newline = new User();
    newline.nom = nom;
    newline.email = email;
    newline.password = password;
    newline.save()
        .then(res => {
            console.log('New added to database succesfully')
        }).catch(err => {
        console.log(err)
    })
    res.send('New added succesfully')
})

router.get('/allusers', (req, res) => {
    User.find()
        .then(r => {
            res.send(r)
        })
        .catch(err => console.log(err))
})
router.post('/deleteuser', (req, res) => {
    const id = req.body.id;
    User.deleteOne({'_id': id})
        .then(r => {
            res.send('OK')
        })
        .catch(e => res.send('not ok'))
})

module.exports = router;
