// sets 

// sets are itterable
// rules must to be follow -->
// - Stores only unique values.
// - Maintains insertion order.
// - No duplicate elements allowed.
// - Can hold any data type.
// - Methods `add()`, `delete()`, `has()`, `clear()`, and `size` methods.
// - No indexing; elements are accessed by iteration.
// - Iterated using `for...of` or `.forEach()`.


// Declaration 


const mySet = new Set([1,2,3,4,5]);                        // set declared 
console.log(mySet)



// Empty set

const mySet2 = new Set([]);
console.log(mySet2)


// Itterable 

const fruits = new Set (['apple','banana','orange']);

for (let fruit of fruits){
    fruit = fruit.toUpperCase()
    console.log(fruit)
}


// methods

// clear(), add(), delete(), has(), and size().

const data = new Set(['apple', 'banana', 'peach']);
console.log(data)

// clear()              --> clear all

data.clear()
console.log(data)

// add()

data.add('apple');
data.add('banana');
data.add('orange');
data.add('lichi');

//------------------------------------- or 
data.add('apple').add('banana').add('orange').add('lichi');


console.log(data)

// delete()

data.delete('banana');
data.delete('apple');
data.delete('orange');
data.delete('lichi');

console.log(data)


// has() --> to check if has | !.

data.add(1)

if (data.has(1)) {
    console.log('Present')
} else {
    console.log('! Present')
}

// size()

console.log(data.size)



// let check on string

const setData = new Set('MOHSIN');
console.log(setData.size)


// let check on an object 
const users = new Set(
    [
        {
            userId: 1,
            userName: 'Ali'
        },
        {
            userId: 2,
            userName: 'Dilawar'
        },
        {
            userId: 3,
            userName: 'Faisal'
        }
    ]
);

users.forEach(element => {
    console.log(element.userId, element.userName);
});
