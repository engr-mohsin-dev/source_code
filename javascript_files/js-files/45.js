// iterables --> that repeats its values

// String, array, sets, Maps, Node lists, generators are iterables

const userName = 'mohsin';

for (let char of userName){
    console.log(char)
}

const users = ['mohsin','ali','aslam'];

for (let user of users){
    console.log(user)
}


// objects, booleans, numbers, NaN, undefined, null --> are ! itterables

const employees = {
    'userId': 1,
    'userName': 'ali',
}


for (let emp of employees){
    console.log(emp)
}