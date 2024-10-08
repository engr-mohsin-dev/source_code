// string concatination 
// concatination means to add multiple strings in a single string

let userName = "MOHSIN";
let userAge = 22;
let userEducation = "Bachelors";
 let newString = "My name is "+ " " +userName + " & my age is " + userAge + " & i am " + userEducation +" student.";   
 // not a good approach also takes time
console.log(newString);

//template string

// In JavaScript, string templates let you include variables and create multi-line strings using backticks and `${}`.


console.log(`My name is ${userName}, i am ${userAge} years old & i am a ${userEducation} student.`)         
// great approach also less time & LOC consumes

