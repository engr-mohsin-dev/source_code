// reduce method
// it takes a callback fnc to perform the operation
const numbers = [120, 90, 78, 66, 34];


const sum = function (accumulator, currentvalue) {
    return accumulator + currentvalue;
}


// inorder to initialliz the start value 0 or any use ,0 in reduce method
var check = numbers.reduce(sum,0)               // this ,0 shows that the accumulator's start value is 0.
console.log(check)

const sub = function (accumulator, currentvalue) {
    return accumulator - currentvalue;
}

var check = numbers.reduce(sub,0)               // this ,0 shows that the accumulator's start value is 0.
console.log(check)

const mul = function (accumulator, currentvalue) {
    return accumulator * currentvalue;
}

var check = numbers.reduce(mul,0.2)             // this ,0.2 shows that the accumulator's start value is 0.
console.log(check)

const div = function (accumulator, currentvalue) {
    return accumulator / currentvalue;
}

var check = numbers.reduce(div,3)               // this ,3 shows that the accumulator's start value is 0.
console.log(check)





// real project example

const userCart = [
    {
        productId: 1,
        productName: 'Keyboard',
        productPrice: 1200
    },
    {
        productId: 2,
        productName: 'mouse',
        productPrice: 299
    },
    {
        productId: 3,
        productName: 'usb',
        productPrice: 900
    },
    {
        productId: 4,
        productName: 'led',
        productPrice: 4000
    },
    {
        productId: 5,
        productName: 'ram',
        productPrice: 2200
    }
]


let check2 = userCart.reduce((totalAmmount, currentProduct)=>{
    return totalAmmount + currentProduct.productPrice;
        
},0);                                       // ,0 shows that the initial value is 0
console.log(check2)