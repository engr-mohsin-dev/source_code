// Array methods in JS 

// it takes a callback fnc to perform the operation


// ForEach method

const myArray = [10, 20, 30, 40];

// task is --> a function takes index & multiply with a number 

function multiplyByTwo(number, index) {
    console.log(`index is ${index} & Number is ${number} * 2 = ${number * 2}`)

}
multiplyByTwo(myArray[0], 0);
multiplyByTwo(myArray[1], 1);
multiplyByTwo(myArray[2], 2);

// to do the same task in simple way we use for loop

for (let i = 0; i < myArray.length; i++) {
    multiplyByTwo(myArray[i], i);
}


// to do more efficient we use for Each

myArray.forEach(function (number, index) {
    console.log(`index is ${index} & Number is ${number} * 2 = ${number * 2}`)
})


// to do more more efficient we use callback
myArray.forEach(multiplyByTwo);


// example 

const users = ['mohsin', 'ali', 'haris', 'sikander'];


// 1st way 

function showIndex(users, index) {
    console.log(`The index of ${users} is ${index}`);
}

showIndex(users[0],0);
showIndex(users[1],1);
showIndex(users[2],2);
showIndex(users[3],3);


// 2nd way

for (let j = 0; j < users.length; j++){
    console.log(`The index of ${users[j]} is ${j}`);
}

// 3rd way

users.forEach(function (value, index) {
    console.log(`The index of ${value} is ${index}`)
})


// 4th way

users.forEach(showIndex);



// example 2

const students = ['laiba','daneen', 'alia','karishma', 'nadia'];


// 1st way 
function showTheIndex(data, index){
    console.log(`Student name : ${data} & its index : ${index}`);
}

showIndex(students[0],0);
showIndex(students[1],1);
showIndex(students[2],2);
showIndex(students[3],3);
showIndex(students[4],4);

// 2nd way 
for (let i=0;i<students.length;i++){
    console.log(`Student name : ${students[i]} & its index : ${i}`)
}


// 3rd way

students.forEach(function(student, index){
    console.log(`Student name : ${student} & its index : ${index}`)
})

// 4th way

students.forEach(showTheIndex)

