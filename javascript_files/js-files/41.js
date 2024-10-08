// map method
// it takes a callback fnc to perform the operation

const temp = [2,3,4,5,8];

// it takes a callback fnc to work 


// func that multiply the number by 7
let func = function(number){
    return number * 7;
}


// taking a callback fnc to perform the function on the given list of array
let see = temp.map(func)
console.log(see)


// .map always returns an array in nature 
// it is conventional to return the data instead of consol.log while using the map method.



const fruits = ['apple','lichi', 'pineapple','banana'];


function fruitNameIndex(name, index){
    return (`Index : ${index} & Fruit : ${name}`)
}

let myFruit = fruits.map(fruitNameIndex);
console.log(myFruit);
console.log(myFruit[0]);
console.log(myFruit[1]);
console.log(myFruit[2]);
console.log(myFruit[3]);



// example in Object 

const sampleObj = [
    {firstName : 'mohsin', age:22, },
    {firstName : 'ali', age:22, },
    {firstName : 'sikander', age:22, }
]


function onlyName(data){
    return data.firstName;
}

let names = sampleObj.map(onlyName);
console.log(names)