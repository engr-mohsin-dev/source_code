// lexical environment

// when a fnc declared it creates an imaginary basket that holds 3 things.
// variables, fnctions in fnc, & lexical environment 

// lexical environment
// it check & allows the access of data to the fnc.

let num = 10;

function fnc(){
    let num = 20;
    console.log(num);
}

fnc()

console.log(num)