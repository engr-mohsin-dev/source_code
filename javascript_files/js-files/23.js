// Computed properties

const key1 = "key_1";
const key2 = "key_2";

const val1 = "val_1";
const val2 = "val_2";

// this is computed property
const newObj = {};
newObj[key1] = val1; 
newObj[key2] = val2; 
console.log(newObj);

// i can also write in this way 

const newobj = {
    [key1] : val1,
    [key2] : val2,
}

console.log(newobj);


// same output 
