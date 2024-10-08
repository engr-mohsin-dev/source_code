// Objects inside an Array

const objInsideArray = [
    {
        userId: 1,
        userName: 'Ali',
        userAddress: "islamabad"
    },
    {
        userId: 2,
        userName: 'Mohsin',
        userAddress: "peshawar"
    },
    {
        userId: 3,
        userName: 'sikander',
        userAddress: "peshawar"
    }
];
console.log(objInsideArray)

// now print all the obj's respectively

for (let key of objInsideArray) {
    console.log(objInsideArray.indexOf(key), key);
}

// now separate the data f each object into variables

let data1 = objInsideArray[0];
let data2 = objInsideArray[1];
let data3 = objInsideArray[2];

console.log(data1, data2, data3)


// now display the data of each separated object using for in loop

for (let objects of objInsideArray) {
    for (let keys in objects) {
        console.log(keys, " : ", objects[keys])
    }
    console.log("-------------------------")
}