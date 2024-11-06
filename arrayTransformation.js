/**
 * Doubles every number in an array
 * @param {Array<number>} arrs - The array of numbers to double
 * @returns {Array<number>} - The array with each number doubled
 */
const double = arrs => arrs?.map(element => element * 2);

/**
 * Filters out even numbers from an array
 * @param {Array<number>} arrs - The array of numbers to filter
 * @returns {Array<number>} - The array with only even numbers
 */
const filterEven = arrs => arrs?.filter(element => element % 2 === 0);

/**
 * Calculates the sum of all numbers in an array
 * @param {Array<number>} arrs - The array of numbers to sum
 * @returns {number} - The sum of all numbers in the array
 */
const sum = arrs => arrs?.reduce((total, item) => total + item, 0);

/**
 * Calculates the average of all numbers in an array
 * @param {Array<number>} arrs - The array of numbers to average
 * @returns {number} - The average of all numbers in the array
 */
const average = arrs => arrs?.reduce((prev, cur) => prev + cur, 0) / arrs.length;

