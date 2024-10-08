// iterations in object

// there are 2 ways 
// 1. Loop
// 2. Object.keys() method

// 1. Loop


// i. for in Loop

const sampleObj = {
    key_1: "Val_1",
    key_2: "Val_2",
    key_3: ["val_i", "val_ii", "val_iii"]
};

// for (let key in sampleObj) {
//     console.log(key, sampleObj[key]);
// }



// Object.keys()

console.log(Object.keys(sampleObj));                        // it returns all the keys in an array
console.log(typeof (Object.keys(sampleObj)));
const isArray = Array.isArray(Object.keys(sampleObj));
console.log(isArray)                                        // it is an array


let storeArray = Object.keys(sampleObj);

//  now i can apply for of loop 

for (let key of storeArray) {
    console.log(key, sampleObj[key]);

}


