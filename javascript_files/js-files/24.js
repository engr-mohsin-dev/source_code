// Spread operator in objects

const my_object = {
    userName:"mohsin",
    userAge:22,
    userEmail:"mohsin@gmail.com"
};

console.log(my_object)
console.log(my_object.userName);
console.log(my_object.userAge);
console.log(my_object.userEmail);

const newObject = {...my_object, userAddress:"peshawar"}
console.log(newObject)

