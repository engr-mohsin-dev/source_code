// Data types 
// there are 2 main data types
// 1. Premitive Data types

// 2. Non-Premitive Data types      (References)
// Array , object, functions, date, map, etc.

// Array 
// An array in JavaScript is a list-like object used to store multiple values in a single variable.

let myArray = ["apple", "mango", "orange", 50];
console.log(myArray)
console.log(typeof (myArray))

// basically it is an object in nature it stores values behind the scene like below
// myArray = {
//         0:"apple",
//         1:"mango",
//         2:"orange",
//         3:50
// }

// object
// An object in JavaScript is a collection of key-value pairs used to store data and functions.

let myObject = {
    name:"Mohsin",
    age:22,
    address:"Peshawar"
};
console.log(typeof(myObject))           // it is litteraly an object.
console.log(myObject)


// functions
// A function in JavaScript is a block of code designed to perform a specific task and can be executed when called.

function myFnc(){
    let myName = "MOHSIN";
    console.log(myName);
}


// calling the fnc
myFnc()
let obj1 = myFnc()


