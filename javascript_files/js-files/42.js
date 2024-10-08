// filter method
// it takes a callback fnc to perform the operation

const numbers = [83,28,39,43,56,78];


const isEven = number =>{
    return number % 2 === 0;
}
const isOdd = number =>{
    return number % 2 !== 0;
}

const result1 = numbers.filter(isEven);
const result2 = numbers.filter(isOdd);

console.log(result1);
console.log(result2);