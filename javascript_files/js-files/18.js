// Array Cloning Methods in JavaScript

// Original array declaration
let sampleArray = ["apple", "banana", "mango"];
console.log("Original Array:", sampleArray);

// 1. Clone by manual copy (explicit array assignment)
let newSampleArray1 = ["apple", "banana", "mango"];
console.log("Cloned Array (Manual Copy):", newSampleArray1);

// 2. Clone using the slice() method
let newSampleArray2 = sampleArray.slice(0);  // slice(startIndex, endIndex)
console.log("Cloned Array (Slice Method):", newSampleArray2);

// 3. Clone using the concat() method
let newSampleArray3 = [].concat(sampleArray);
console.log("Cloned Array (Concat Method):", newSampleArray3);

// 4. Clone using the spread operator (...)
let newSampleArray4 = [...sampleArray];
newSampleArray4.pop();  // Example modification (removing last element)
console.log("Cloned Array (Spread Operator) with Modification:", newSampleArray4);

// i also use spread operator like this
let spreadOp = [..."mango"];
console.log(spreadOp)

