// Functions in JavaScript:

// 1) Function declaration

// Function --> A function in JavaScript is a reusable block of code that performs a specific task when invoked/ called.


// declaration
// there are many different ways to daclare a fnc 

// 1st --> method
// function helloworld(){
//     return "Hello World!";
// }

// invoking / calling
// const myString = helloworld()
// console.log(myString)

// console.log(myString)

// console.log(myString)


// 2nd --> method                   also known as function expression

// const addTwoNums = function(){
//     return 2+10;
// }

// const total = addTwoNums();
// console.log(total)

// 3rd --> method       also known as arrow fnc

// const arrowFnc = () =>{
//     console.log("MOHSIN");
// }

// arrowFnc();



// Parameters & arguments in fnc's 

// function addTwoNums(num1, num2){
//     const total =  num1 + num2;
//     console.log(total)
// }
// addTwoNums(10,90);
// addTwoNums(132,976);
// addTwoNums(123,436);


// Examples solution on fnc's

// 1. is even number |!.


// there are many ways 
// 1st way 

// function isEven(num) {
//     return num % 2 === 0;
// }

// const check = isEven(20);
// console.log(check)


//  2nd way

// function isEven(num) {
//     if (num % 2 === 0){
//         return true
//     }else{
//         return false
//     }
// }

// const check = isEven(20);
// console.log(check)

// 3rd way 
// const isOdd = (num) => {
//     if (num % 2 !== 0){
//         return true;
//     }else{
//         return false;
//     }
// }

// const check = isOdd(12);
// console.log(check)


// 2. example

// array and find the index of target 

const findIndex = function(array,target){
    for (let i = 0; i < array.length;i++){
        if (array[i] === target){
            return i;
        }
    }console.log(-1)
}
const array = [1,2,3,56,32,90];
const indexOfTarget = findIndex(array, 90)
console.log(indexOfTarget)