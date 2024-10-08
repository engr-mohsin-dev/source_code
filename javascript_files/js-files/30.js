// arrow fnc


const sumThreeNums = (num1,num2,num3) =>{
    return num1 + num2 + num3;
}

const result = sumThreeNums(23,90,54);
console.log(result)


// arrow fnc writing styles

// style 1
const style1 = name =>  console.log(name);
style1("ALI")

// style 2

const style2 = (name,age) => console.log(`my name is ${name} & age is ${age}`);
style2("Mohsin",22)

// style 3
const style3 = (val1) => val1 + 200;
console.log(style3(34))



// example 

// find the target number inside an array

const findTarget = (array,target) => {
    for (let i = 0 ; i < array.length; i++){
        if (array[i] === target){
            return i;
        }
    }return "target not find";
}


console.log(findTarget([12,43,64,90,87], 97))