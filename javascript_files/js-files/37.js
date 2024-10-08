// parameter destructuring

const personDetails = {
    name: 'mohsin',
    age: 22,
    gender: 'male'
}


// simple concept

function getDetails (object){
    console.log(object.name);
    console.log(object.age);
    console.log(object.gender);
}

getDetails(personDetails)



// destructuring

function destruct({name,age,gender}){
    console.log(name);
    console.log(age);
    console.log(gender);
}

destruct(personDetails)