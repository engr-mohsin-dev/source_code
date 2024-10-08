// Object Destructuring

const shopingcCart = {
    userId: 1,
    userProduct: "watch",
    productColor: 'black',
    orderDate:"2-Apr-2000",
    orderType:"normal"
};


// destructuring in lengthy way

// let var1 = shopingCart.userId;
// let var2 = shopingCart.userProduct;
// let var3 = shopingCart.productColor;

// console.log(var1)
// console.log(var2)
// console.log(var3)


// destructuring in simple way
// const { userId, userProduct, productColor } = shopingcCart;      // this would be by default variables assigned by JS

// inorder to assign different variables we use the following method
const { userId:key1, userProduct:key2, productColor:key3, ...leftkeys } = shopingcCart;

console.log(key1);
console.log(key2);
console.log(key3);

console.log(leftkeys);
console.log(typeof(leftkeys));
