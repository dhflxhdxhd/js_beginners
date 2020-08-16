const title = document.getElementById("title");
const body = document.getElementById("body");
// console.dir(document)

// DOM : Doucument Object Model
// every html thing is going to be an object
// object has many keys

/*body.style.backgroundColor= "red";
title.innerHTML = "Can I do?";

alert("hi");
// querySelector -> return first children in every Nodes
function handleResize() {
    console.log("Resizing now.")
}

function handleclick(){
    body.style.backgroundColor = "white";
}  

title.addEventListener("click", handleclick);

const age = prompt("How old are you");
console.log(age);

if (age < 12){
    console.log("you are so young")
} else {
    console.log("wow!")
}*/

const color = "darkcyan";
const otherColor = "blue";

function init() {
    title.style.color = "color";
    title.addEventListener("click", colorClick);
}

function colorClick() {
    console.log("Click it.")
    const currentColor = title.style.color;

    if (currentColor === color){
        console.log("change color to blue");
        title.style.color = otherColor;
    } else {
        console.log("Return to the original");
        title.style.color = color
    }
}

init();


