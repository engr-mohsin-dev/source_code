// string methods

let myString = " My name is MOHSIN. ";

// lenght of string
console.log(myString.length);

//typeof
console.log(typeof(myString))

// toUpperCase
myString = myString.toUpperCase();
console.log(myString);
console.log(myString.length);

// toLowerCase
myString = myString.toLowerCase();
console.log(myString);
console.log(myString.length);

//trim
myString = myString.trim();
console.log(myString);
console.log(myString.length);

//lefttrim
myString = myString.trimStart();
console.log(myString);         // Logs: "My name is MOHSIN. "
console.log(myString.length);  // Logs: 18

//righttrim
myString = myString.trimEnd();
console.log(myString);         // Logs: " My name is MOHSIN."
console.log(myString.length);  // Logs: 18


// slice (start index, end index)
console.log(myString.slice(0));
console.log(myString.slice(0,9));
console.log(myString.slice(0,));

// index number finding
console.log(myString.indexOf("y"));

// replace
console.log(myString.replace("mohsin","MOHSIN ASHFAQ AHMAD AWAN"));


// replaceAll
console.log(myString.replaceAll("name", "NamE"));


// repeat
console.log(myString.repeat(4));
myString = myString+"\n";
console.log(myString.repeat(4));

// startswith
myString = "My name is MOHSIN."
myString = myString.toLowerCase()
console.log(myString.startsWith("m"))           // case sensitive

//Endswith
myString = "My name is MOHSIN."
myString = myString.toLowerCase()
console.log(myString.endsWith("."))             // case sensitive

//match
myString = "My name is MOHSIN mohsin Mohsin mOHSIN." 
console.log(myString.match("MOHSIN"))           // it returns the starting index of the value searched

