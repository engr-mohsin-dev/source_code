// ternary operators

// let my_age = 11;
// let drink = "";

// if (my_age <= 10){
//     drink="Milk"
// }else{
//     drink="Coffee"
// }
// console.log(drink)

// insted of the above we use ternary operator 

// let experience = 365;
// let vacancy = experience >= 365 ? "Eligible": "Not-Eligible";
// console.log(vacancy)

// multiple conditions

let customerAge = 56;
let drink = customerAge >= 1 && customerAge <= 15 ? "Only Milk" :
    customerAge >= 12 && customerAge <= 45 ? "Tea & Coffee" :
        customerAge >= 46 && customerAge <= 65 ? "Tea & Milk" :
            "Milk & Medications";

console.log(drink)


// let ager = 10;
// let drinker = ager >=10 ? "Lassi":"Milk";
// console.log(drinker)
