// Array destructuring

//  manual method
let List = ['user_1',"user_2","user_3"];
// console.log(List[0]);
// console.log(List[1]);
// console.log(List[2]);

// best approach
let [index_1,index_2,index_3,index_4] = List;
console.log(index_1);
console.log(index_2);
console.log(index_3);

// if any element is not available
console.log(index_4);

//if i wannah skip the specific element
List.push("user_4");
let [inx_1,,inx_3,inx_4] = List;
console.log(inx_1,inx_3,inx_4) 

// if i wannah store the left of values in an array

let employees = ["MOHSIN","SIKANDER","HARIS","ALI"];
let [emp1,emp2, ...islamabadBranch] = employees;
console.log(emp1);
console.log(emp2);
console.log(islamabadBranch);

