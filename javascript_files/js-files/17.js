// important usefull array methods 

let myItems = ["cap", "stole", "ring", "chair"];

console.log(myItems);

// push an element in an array          (at end)
myItems.push("globe");
console.log(myItems);


// pop an element from an array          (at end)
myItems.pop();
console.log(myItems);


// unshift an element in an array          (at start)
myItems.unshift("globe");
console.log(myItems);


// shift an element from an array          (at start)
myItems.shift();
console.log(myItems);


// splice an element from an array          (specific index element removal)
myItems.splice(0,2);                       //start index , end index
console.log(myItems);

