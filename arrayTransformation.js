const double = arrs => arrs?.map(element => element * 2);
console.log(double([2, 3, 4, 5])); 

const filterEven = arrs => arrs?.filter(x => x % 2 === 0);
console.log(filterEven([3, 2, 5, 4, 6, 7, 10])); 

const sum = arrs => arrs?.reduce((total, x) => total + x, 0);
console.log(sum([3, 2, 5, 4, 6, 7, 10])); 

const average = arrs => arrs?.reduce((total, x) => total + x, 0) / arr.length;
console.log(average([3, 2, 5, 4, 6, 7, 10])); 