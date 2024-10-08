// sort method

// sort () works on the basis of ASCII code.
// priority 
            // numbers --> to ASCII --> just read the initial number --> Sorted
            // characters --> to ASCII --> just read the initial char --> Sorted       (Captal Alphabets are more priorities)
            // characters --> to ASCII --> just read the initial char --> Sorted       (small Alphabets are less priorities)

const numbers = [10,9,56,76,77,12,65];
numbers.sort();
console.log(numbers)


const capitalAlph = ["APPLE", "MANGO", "BANANA"];
capitalAlph.sort()

console.log(capitalAlph)

const smallAlph = ["banana", "orange", "apple"];
smallAlph.sort()
console.log(smallAlph)

const mix = ["banana", "Orange", "apple"];
mix.sort()
console.log(mix)

