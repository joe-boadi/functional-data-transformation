// An array of objs
const persons = [
    {
        "firstname" : "Joe",
        "lastname" : "Orion",
        "age" : 28,
        "position" : "Frontend"
    },
    {
        "firstname" : "Prine",
        "lastname" : "Nay",
        "age" : 17,
        "position" : "QA"
    },
    {
        "firstname" : "John",
        "lastname" : "Doe",
        "age" : 21,
        "position" : "Backend"
    },
    {
        "firstname" : "Sarah",
        "lastname" : "John",
        "age" : 17,
        "position" : "QA"
    },
]

const obj = {
    "firstName" : "Joe",
    "lastName" : "Orion",
    "age" : 28,
    "position" : "Frontend"
}

const fullName = (obj) =>  `${obj?.firstName} ${obj?.lastName}`
// console.log(fullName(obj))

// Checks if a person is 18 or older (given property age).
const isAdult = person => person?.age >= 18 ? true : false;
console.log(isAdult(obj))

const filterByAge = (people, minAge) => people?.filter(person => person.age >= minAge);
console.log(filterByAge(persons, 18));
