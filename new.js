

//datatype teller//

function datatype(){
    let ask = prompt("write anything to know it's datatype");
    let ans = typeof ask;
    document.getElementById("write").innerHTML =
    `Datatype of what you have written is ${ans} `;
}