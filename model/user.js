const mongoose = require('mongoose')
const shema = mongoose.Schema({
    nom: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
})
module.exports = mongoose.model('User', shema)
