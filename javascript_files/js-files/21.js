// dot notation & bracket notation
// both are same but different ways to write the code 

// object keys stored in string format"

const my_object = {
    "user_name": "Mohsin",
    "user_age": 22,
    "user_address": "Peshawar"
};

// dot notation

// console.log(my_object.user_name);
// console.log(my_object.user_age);
// console.log(my_object.user_address);

// bracket notation

// console.log(my_object["user_name"]);
// console.log(my_object["user_age"]);
// console.log(my_object["user_address"]);


// main differences b/w dot & bracket notation 
// console.log(my_object);
// let key = "email";

// // now i wannah add the value of key inside an object
// my_object.key = "mohsin@gmail.com";                         // it returns key not its value 
// console.log(my_object);

// my_object["key"] = "mohsin@gmail.com";                      // it returns key not its value 
// console.log(my_object);

// my_object[key] = "mohsin@gmail.com";                        // great work
// console.log(my_object);


// why we use bracket notion ???
// if
const new_obj = {
    "key 1":"value 1",
    "key 2":"value 2",
    "key 3":"value 3"
}

console.log(new_obj["key 1"])
console.log(new_obj["key 2"])
console.log(new_obj["key 3"])

