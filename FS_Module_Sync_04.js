// write a node js script and name person by assigning name and age in form of members.
// create a fxn named elder which returns elder person's obj
// details of elder person should be printed in console as well as in file.
var ps = require('fs')

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    display() {
        return ('Name: ' + this.name + ', Age: ' + this.age)
    }
}

let persons = [
    new Person('Person1', 30),
    new Person('Person2', 25),
    new Person('Person3', 35),
]

function elder() {
    // sort persons on basis of age
    persons.sort((a, b) => {
        return b.age - a.age;
    })
    return persons[0]
}

elder_person = elder()

console.log(elder_person.display())

ps.writeFileSync('Node/Elder.txt', elder_person.display())
