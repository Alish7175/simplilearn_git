

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
document.getElementById("pre_details").innerHTML =
    `The details of employee ${obj.empName} are as follows:  `;
    document.querySelector(".details").innerHTML =
    `Employee ID: ${obj.empId}<br>Employee Name: ${obj.empName}<br>Employee Salary: ${obj.empSalary}  `;    
