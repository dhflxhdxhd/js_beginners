// console.dir(document)
const title = document.getElementById("title");

function init(){
    title.addEventListener("click", handleBtn);
}

const color_Class = "clicked";

function handleBtn() {
    const hasClass = title.classList.contains(color_Class);
    if(hasClass) {
        title.classList.remove(color_Class);
    } else {
        title.classList.add(color_Class);
    }
}

init();

