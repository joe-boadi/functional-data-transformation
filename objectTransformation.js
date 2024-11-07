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

/**
 * Concatenates the first and last name of an object
 * @param {Object} obj - The object containing firstName and lastName properties
 * @returns {string} - The full name as a single string
 */
const fullName = (obj) => `${obj?.firstName} ${obj?.lastName}`;

/**
 * Checks if a person is 18 or older
 * @param {Object} person - The object containing the age property
 * @returns {boolean} - True if the person is 18 or older, otherwise false
 */
const isAdult = person => person?.age >= 18;

/**
 * Filters an array of person objects to keep only those at least minAge years old
 * @param {Array} people - The array of person objects
 * @param {number} minAge - The minimum age to filter by
 * @returns {Array} - The filtered array of person objects
 */
const filterByAge = (people, minAge) => people?.filter(person => person.age >= minAge);

