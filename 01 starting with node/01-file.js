const persons = [
    {name: "Jack", age: 25},
    {name: "Bob", age: 29},
    {name: "Anna", age: 27},
]

persons.push({name: "Jorge", age: 30})
console.log(persons)

let reqParams = "Bob"
let person = persons.find(el => el.name === reqParams)
console.log(person)