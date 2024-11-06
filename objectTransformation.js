const obj = {
    "firstname" : "Joe",
    "lastname" : "Orion",
    "age" : 28,
    "position" : "Frontend"
}

/* 
 *   Returns the full name of a person object (given 
 *   properties firstName and lastName) 
*/
const fullName = (obj) => {
    let full_name = "";
    return full_name = obj.firstname + " " + obj.lastname
}
// console.log(fullName(obj))

/*
 * Checks if a person is 18 or older (given property age).
 */
const isAdult = person => {
    if ( person.age >= 18) {
        return true;
    }
    return !true;
}
// console.log(isAdult(obj))


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
/*
 * Filters an array of person objects to keep 
 *   only those at least minAge years old.
*/
const filterByAge = (people, minAge) => {
    let keep_person = []
    people.map( person => {
        if (person.age >= minAge){
           keep_person .push(person)
        }
    })
    return keep_person
}
console.log(filterByAge(persons, 18))