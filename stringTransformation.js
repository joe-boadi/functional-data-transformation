const capitalizeFirstChar = str => str.charAt(0).toUpperCase() + str.slice(1);
console.log(capitalizeFirstChar('word'));

const reverseString = str => str.split('').reverse().join('');
console.log(reverseString('racecar'));

const isPalindrome = str => str === reverseString(str) ? 
    `${str} is a palindrome!` : `${str} is not a palindrome!`;

console.log(isPalindrome('racecar'));

const wordLength = str => typeof str !== 'string' ? `argument not a string` 
        : `${str} size - ${str.length}`;
console.log(wordLength('world'));


function compose(...fns) {
    return function (arg) {
        return fns.reduceRight((acc, fn) => fn(acc), arg);
    }
}

const composedFns = compose(capitalizeFirstChar, reverseString);
console.log(composedFns('racecar')); 
