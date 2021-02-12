const mongoose = require('mongoose')
const shema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    favoriteFoods: {
        type: Array
    }
})

module.exports = mongoose.model('Person', shema)

