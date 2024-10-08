// callback fncs

// when we pass a function as an argument to the function is known as callback fnc.

function func_1(name){
    return name;
    // console.log(`I am func 1 ${name}`);
}
function func_2(age){
    return age;
    // console.log(`I am func 1 ${age}`);
}

function func_3(callback_1, callback_2){
    let name = func_1('Mohsin');
    let age = func_2(22);
    console.log(`My name is ${name} & i am ${age} years old.`);
}


func_3(func_1(),func_2())

// when a fnc accepts | returns | both at same time --> higher order fnc