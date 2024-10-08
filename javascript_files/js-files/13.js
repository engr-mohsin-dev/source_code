// switch statement

// it is mostly similiar to conditionals statements



// ---> 1st Example


let day = 9;
switch (day){
    case 0:
        console.log("Monday");
        break
    case 1:
        console.log("Tuesday");
        break
    case 2:
        console.log("Wednesday");
        break
    case 3:
        console.log("Thursday");
        break
    case 4:
        console.log("Friday");
        break
    case 5:
        console.log("Saturday");
        break
    case 6:
        console.log("Sunday");
        break
    default:
        console.log("Invalid Day")
}


// ---> 2nd Example

let fruits = ["apple", "mango", "orange", "lichi", "strawberry"];

let ind = 5;
switch (ind){
    case 0:
        console.log(fruits[0]);
        break
    case 1:
        console.log(fruits[1]);
        break
    case 2:
        console.log(fruits[2]);
        break
    case 3:
        console.log(fruits[3]);
        break
    case 4:
        console.log(fruits[4]);
        break
    default:
        console.log("Fruit is ! available")
}


// example

let friends = ["mohsin","ali","abbas"];
let val = 0;

switch (val){
    case 0:
        console.log(friends[0]);
        break
    case 1:
        console.log(friends[1]);
        break
    case 2:
        console.log(friends[2]);
        break
    default:
        console.log("Error")
}

