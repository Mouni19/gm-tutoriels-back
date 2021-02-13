const Person = require('../model/person')

module.exports.ListPerson = (req, res) => {
    Person.find()
        .then(persons => res.send(persons))
        .catch(err => res.send('[]'))
}

module.exports.AddPerson = (req, res) => {
    const msg = validate(req, res)
    if (msg) return res.send(msg);
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

const validate = (req) => {
    if (!req.body.name || req.body.length > 50) {
        return 'Name not valid'
    }
    if (req.body.foods && req.body.foods.length > 5) {
        return 'Max foods is 5 !';
    }
    if (req.body.age && req.body.age < 10 || req.body.age > 100) {
        return 'age between 11 et 100 !';
    }
    return '';
}
