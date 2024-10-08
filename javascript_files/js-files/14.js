// 	Loops (while, do while, for, forEach, for of, for in)

// there are 6 most using & popular loops in JS

// while loop

// var i = 0;
// while (i <= 10){
//     console.log(i, "From WHile Loop")
//     i++
// }

// ---> example 1

// let ourFruits = ["Apple","Mango", "Orange","strawberry","Banana"];
// var i = 0;
// while (i <= ourFruits.length-1){
//     console.log(i,ourFruits[i], "   From While Loop Example");
//     i++;
// }

// for loop

// for (var i = 0; i <= 10; i++){
//     console.log(i, "From For Loop")
// }

// ---> example 1

// let vegs = ["Potato", "Tomato", "Chili", "Garlic"];
// for (var i = 0; i <= vegs.length-1; i++){
//     console.log(i,vegs[i], "From For Loop")
// }


// do while loop                                    // usually used for Arrays and objects
// this is used to execute at least 1 task 

// var i = 0;
// do {
//     console.log(i, "My name is Mohsin.");
//     i++;
// }
// while(i <= 10)



// for of loop                      // usually used for Arrays and strings and maps                        
// this is usually used in an Array

// let myNewArray = ["mohsin","ali","khalid","summaya","rameen"];
// for (var i of myNewArray){
//     console.log(i)
// }



// for in Loop          // usually used for Objects and Arrays

// let myNewArray = { user1: "mohsin", user2: "ali", user3: "khalid", user4: "summaya", user5: "rameen" };
// for (key in myNewArray){
//     console.log(key, myNewArray[key])
// }


//for each loop             // usually used for Arrays and maps
// let countries = ["pakistan","usa","saudi-arabia","srilanka","dubai"];
// countries.forEach(function(elements,index){
//     console.log(index ,elements.toUpperCase())
// })



