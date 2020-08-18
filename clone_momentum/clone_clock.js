const clockContainer = document.querySelector(".clock-js")
, clockTitle = document.querySelector(".title-js");

function getTime() {
    const date = new Date();
    const mimutes = date.getMinutes();
    const hours = date.getHours();
    const sec = date.getSeconds();
    clockTitle.innerHTML = `${hours}:${mimutes}:${sec}`;
}

function init() {
    getTime();
}


init();