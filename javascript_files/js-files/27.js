//  Nested Destructuring

const nestedDestructuring = [
    {
        userId: 1,
        userName: 'Ali',
        userAddress: "islamabad"
    },
    {
        userId: 2,
        userName: 'Mohsin',
        userAddress: "peshawar"
    },
    {
        userId: 3,
        userName: 'sikander',
        userAddress: "peshawar"
    }
];

// destructuring
const [var_1, var_2,var_3] = nestedDestructuring;
console.log(var_1);
console.log(var_2);
console.log(var_3);

// nested destructuring
const {userId:key1,userName:key2,userAddress:key3} = var_1;
const {userId:key4,userName:key5,userAddress:key6} = var_2;
const {userId:key7,userName:key8,userAddress:key9} = var_3;


// user id's
console.log(key1);
console.log(key4);
console.log(key7);

// user name's
console.log(key2);
console.log(key5);
console.log(key8);

// user address's
console.log(key3);
console.log(key6);
console.log(key9);


// template string
console.log(`user_id : ${key1} & user_name : ${key2} & address : ${key3}`);
console.log(`user_id : ${key4} & user_name : ${key5} & address : ${key6}`);
console.log(`user_id : ${key7} & user_name : ${key8} & address : ${key9}`);
