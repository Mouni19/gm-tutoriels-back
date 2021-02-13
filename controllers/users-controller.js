const User = require('../model/user')

module.exports.ListUser = (req, res) => {
    User.find()
        .then(users => res.send(users))
        .catch(err => res.send([]))
}

module.exports.AddUser = (req, res) => {
    const user = new User()
    user.name = req.body.name;
    user.age = req.body.age
    user.email = req.body.email
    user.save()
        .then(r => res.send('OK'))
        .catch(err => res.send('Not OK'))
}
module.exports.DeleteUser = (req, res) => {
    User.remove({
        '_id': req.body.id
    }).then(r => res.send('OK'))
        .catch(err => res.send('Not OK'))
}
