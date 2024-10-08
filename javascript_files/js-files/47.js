// Maps in JS are collections of key-value pairs, similar to objects but with better key management and order preservation.
// Unlike objects, Maps allow any data type as a key and maintain the insertion order of entries.
// just used to accept anydata type of the key.
// it takes and  returns data in Array 

// Declaration

const data = new Map();
console.log(data);



// - set(key, value): Adds/updates an entry.
// - get(key): Retrieves a value.
// - has(key): Checks if a key exists.
// - delete(key): Removes an entry.
// - clear(): Clears all entries.
// - size: Number of entries.
// - keys(): Iterator for keys.
// - values(): Iterator for values.
// - entries(): Iterator for [key, value] pairs.
// - forEach(callback): Executes a callback for each entry.

// Add Data
data.set('userId', 1)

console.log(data);

// update data
data.set('userId', 0)
console.log(data);

// retrive data

console.log(data.get('userId'));

// has()

console.log(data.has('userId'))

// delete()

data.delete('userId');
console.log(data)


//clear()
data.clear()
console.log(data)



// add data in Map

data.set(0, 1).set(1, 'Mohsin').set(2, 22);

console.log(typeof (data))

// type check
console.log(data instanceof Map)



// keys()

for (let key of data.keys()) {
    console.log(key, typeof (key))
}

// values()

for (let value of data.values()) {
    console.log(value, typeof (value))
}

console.log('------------------')


// direct for of loop in Maps

for (let key of data) {
    console.log(key)
}


// we can destructure them

for (let [key, value] of data) {
    console.log(key, value)
}



// another metod to declare Maps


const person1 = new Map([['id', 1], ['name', 'Mohsin']]);

console.log(person1)

const extraInfo = new Map();
extraInfo.set(person1,{'age':22,'gender':'male'})

console.log(extraInfo)


// optional chaining