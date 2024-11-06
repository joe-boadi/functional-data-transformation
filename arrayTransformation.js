// Doubles every number in an array.
 const double = arr => {
    let new_arr = [];
    new_arr = arr.map(element => {
        return element * 2;
    });
    return new_arr
 };
 console.log(double([2, 3, 4, 5]))

// Filters out even numbers from an array.
const filterEven = arr => {
    let evenArr= []
    arr.filter(element => {
        if (element % 2 === 0) {
            evenArr.push(element)
        }
    })
    return evenArr
}
console.log(filterEven([3, 2, 5, 4, 6, 7, 10]))

//Calculates the sum of all numbers in an array.
const sum = arr => {
    let total = 0;
    arr.map(element => {
        total += element;
    })
    return total;
}
console.log(sum([3, 2, 5, 4, 6, 7, 10]))

// Calculates the average of all numbers in an array
const average = arr => {
    return sum(arr) / arr.length;
}

console.log(average([3, 2, 5, 4, 6, 7, 10]))