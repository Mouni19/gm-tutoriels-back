const Person = require('../model/person')

module.exports.ListPerson = (req, res) => {
    Person.find()
        .then(persons => res.send(persons))
        .catch(err => res.send('[]'))
}

module.exports.AddPerson = (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const foods = req.body.foods

    const person = new Person();
    person.name = name;
    person.age = age;
    person.favoriteFoods = foods;
    person.save()
        .then(r => res.send('OK'))
        .catch(err => res.send('Not OK'))
}
