function sumArray(numbers: any[]): number {
    return numbers.reduce((acc, curr) => typeof curr === 'number' ? acc + curr : acc, 0);
}

let numbers: any[] = [1, 2, 3, 4, 5];
let total: number = sumArray(numbers);
console.log(total);
