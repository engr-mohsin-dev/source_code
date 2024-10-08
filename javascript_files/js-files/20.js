// Object in JS
// In JavaScript, objects are collections of key-value pairs, where keys are strings (or symbols) and values can be of any type, used to store structured data and functionalities. 

const myObject = {
    name:"MOHSIN",
    age:22,
    address:"Peshawar"
};

console.log(myObject);

// Accessing a specific key and its value. 
console.log(myObject.name);
console.log(myObject.age);
console.log(myObject.address);


// update the value of a specific key

myObject.name = "Ali";
console.log(myObject.name)


// add a new key value pair in existing object

myObject.gender = "male";
console.log(myObject)


// we can also add an array in value against key

const myObj = {
    company:"Rolex",
    products:["Watches","Cars","Houses"]
}

console.log(myObj.company)
console.log(myObj.products)
console.log(myObj.products[0])
console.log(myObj.products[1])
console.log(myObj.products[2])




