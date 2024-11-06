// Capitalizes the first letter of a string.
const capitalize = str => {
    // convert string into an array.
    const splitWord = str.split('');
    // transform first letter to caps
    const toCaps = splitWord[0].toUpperCase();
    // join caps to rest of letters
    const capitalized = toCaps + splitWord.splice(1).join('');

    return `${capitalized} - first character capitalized from (${str})`;
}
// TEST
console.log(capitalize('word'));


// Reverses a string.
const reverseString = str => {
    // string to array.
    let reversed_arr = str.split('').reverse();
    // console.log(reversed_arr)
    let reversed_word = reversed_arr.join('');
    return `${reversed_word} is reveresed word of ${str}`;
}
console.log(reverseString('rat'))


// Checks if a string is a palindrome reads the same backward as forward
function isPalindrome(str) {
    // split word, reverse word, join word, compare with original word
    const new_word = reverseString(str);
    if (str === new_word) {
        return `${str} is a palindrome!`;
    }
    return `${str} is not palindrome!`;
}
console.log(isPalindrome('rent'))


// Counts the number of words in a string.
const wordCount = str => {
    if (typeof str !== 'string') return `argument not a string`
    const wordLength = str.length
    return `${str} is a size of ${wordLength}`
}
console.log(wordCount(1))
console.log(wordCount('code'))

// compose function
function compose(...fns) {
    return fns.reduce(
        function reducer (accumulator, current) {
            return function returnedFunc(...args) {
                return accumulator(current(...args))
          }
         }
      )
}
// const composedFns = compose(capitalize(str), reverseString(str))
// console.log(composedFns)