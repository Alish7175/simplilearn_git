

//datatype teller//

function datatype(){
    let ask = prompt("write anything to know it's datatype");
    let ans = typeof ask;
    document.getElementById("write").innerHTML =
    `Datatype of what you have written is ${ans} `;
}

var obj = {
    "empId": 101,
    "empName":"sara",
    "empSalary": 99999,
}
obj.empId = 201;
document.getElementById("pre_details").innerHTML =
    `The details of employee ${obj.empName} are as follows:  `;
    document.querySelector(".details").innerHTML =
    `Employee ID: ${obj.empId}<br>Employee Name: ${obj.empName}<br>Employee Salary: ${obj.empSalary}  `;    

//making reference of array  //
    
let fruits = ["apple" , "mango" , "banana" , "pumpkin"];
let realFruits = fruits;
realFruits[3] = "orange";
console.log(fruits);    

document.querySelector(".realFruits").innerHTML =
    `Pumpkin changed to ${fruits[3]} by creating reference  `;    

//making copy of array (not reference)//

let copyFruits = Array.from(fruits);
copyFruits[2] = "watermelon";
console.log(fruits);
console.log(copyFruits);

document.querySelector(".copyFruits").innerHTML =
    `<b>${fruits[2]}</b> changed to <b>${copyFruits[2]}</b> to show that it is unrelated copy`;

//making copy of object (not reference)//  
let student = {
    "name":"Roy",
    "age":18,
    "class":"12th",
    "roll_no":10
};
let studDetails = Object.assign({},student);
studDetails.name = "Joy";
console.log(`Student 1 : ${student.name}`);
console.log(`Student 2 : ${studDetails.name}`);

document.querySelector(".students").innerHTML =
    `<b>${student.name}</b> changed to <b>${studDetails.name}</b> to show that it is unrelated copy of object`;
//above written is the shallow copy of an object//
//contant object property can be changed specifically//
const constantObj = {
    "hero honda":"10",
    "pulsar":20,
    "hayabusa":1,
    "yamaha":1 
} 
constantObj.pulsar =10;
console.log(constantObj);

//splicing arrays
let fruits2 = ["apple" , " banana" , " mango" ," peach"];
let fruits3 = Array.from(fruits2);
fruits2.splice(2 , 2);
console.log(fruits2);
document.getElementById("fruitArraysplice1").innerHTML = 
`New array of fruits after splice is ${fruits2}`;
document.getElementById("fruitArray1").innerHTML = 
`New array of fruits after splice is ${fruits3}`;