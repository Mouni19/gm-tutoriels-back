const mongoose = require('mongoose')
const shema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number
    }
})

module.exports = mongoose.model('User', shema)
