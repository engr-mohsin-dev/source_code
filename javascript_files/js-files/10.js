// conditionals statements
// if, else if & else conditions

let num_1 = 10;
let num_2 = 20;

if (num_1 > num_2) {
    console.log("Num 1 is greater than Num 2")
} else if (num_1 === num_2) {
    console.log("Num 1 is equal to Num 2")
} else {
    console.log("Num 1 is lesser than Num 2")
}

// nested conditionals
// nested ---> conditions inside conditions

// guessing number game
let userValue = 77;
let guessValue = 120;

if (userValue) {
    if (userValue === guessValue) {
        console.log("Congrates you win!");
    } else if (userValue < guessValue) {
        console.log("Guesst the High value");
    } else if (userValue > guessValue) {
        console.log("Guesst the Low value");
    }
    else {
        console.log("Invalid Guess");
    }
} else {
    console.log("Falsy Guess");
}



