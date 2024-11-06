/**
 * Capitalizes the first character of a string
 * @param {string} str - The string to capitalize
 * @returns {string} - The string with the first character capitalized
 */
const capitalizeFirstChar = str => str.charAt(0).toUpperCase() + str.slice(1);

/**
 * Reverses a string
 * @param {string} str - The string to reverse
 * @returns {string} - The reversed string
 */
const reverseString = str => str.split('').reverse().join('');

/**
 * Checks if a string is a palindrome
 * @param {string} str - The string to check
 * @returns {string} - A message indicating whether the string is a palindrome
 */
const isPalindrome = str => str === reverseString(str) ? 
    `${str} is a palindrome!` : `${str} is not a palindrome!`;

/**
 * Returns the length of a string or an error message if the argument is not a string
 * @param {string} str - The string to measure
 * @returns {string} - A message with the length of the string or an error message
 */
const wordLength = str => typeof str !== 'string' ? `argument not a string` 
        : `${str} size - ${str.length}`;

/**
 * Composes multiple functions into a single function
 * @param {...Function} fns - The functions to compose
 * @returns {Function} - A function that is the composition of the input functions
 */
function compose(...fns) {
    return function (arg) {
        return fns.reduceRight((acc, fn) => fn(acc), arg);
    }
}


const composedFns = compose(capitalizeFirstChar, reverseString);

