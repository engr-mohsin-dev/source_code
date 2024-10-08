// rest parameters in fncs

// function myFunc(a,b,...c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// myFunc(10,20,30,45,22,12)


// example 
// add all nums paswed in parameters

function addAll(...numbers) {
    let total = 0;
    for (number of numbers) {
        total = total + number;
    }
    return total;
}
const ans = addAll(12, 12, 12, 12)
console.log(ans)