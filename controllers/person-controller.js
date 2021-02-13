const Person = require('../model/person')

module.exports.EditPerson = (req, res) => {
    const newName = req.body.name
    const newAge = req.body.age
    const id = req.body.id
    Person.updateOne({
        '_id': id
    }, {
        '$set': {
            name: newName,
            age: newAge
        }
    }).then(r => res.send('OK'))
        .catch(err => res.send('Not OK'))
}
module.exports.DeletePerson = (req, res) => {
    const id = req.body.id
    Person.remove({
        '_id': id
    }).then(r => res.send('OK'))
        .catch(err => res.send('error'))
}
module.exports.FindByName = async (req, res) => {
    const name = req.query.name
    const person = await Person.find({name: name}).exec()
    res.send(person)
}

module.exports.ListPerson = (req, res) => {
    Person.find()
        .sort({age: 'asc'})
        .limit(2)
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
