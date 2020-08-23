const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImg(imgNumber){  
    const image = new Image();

    img.src =`D:/js/clone_momentum/image/ocean01.jpg`
    body.appendChild(image);
}

function getRandom() {
    // Math.floor() or Math.ceil()
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number ;
}

function init(){
    const randomNumber = getRandom();
    paintImg(randomNumber);
}

init();