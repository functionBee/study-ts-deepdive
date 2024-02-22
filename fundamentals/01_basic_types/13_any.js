"use strict";
function sumArray(numbers) {
    return numbers.reduce((acc, curr) => typeof curr === 'number' ? acc + curr : acc, 0);
}
let numbers = [1, 2, 3, 4, 5];
let total = sumArray(numbers);
console.log(total);
