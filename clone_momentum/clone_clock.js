const clockContainer = document.querySelector(".clock-js")
, clockTitle = document.querySelector(".title-js");


function getTime() {
    const date = new Date();
    const mimutes = date.getMinutes();
    const hours = date.getHours();
    const sec = date.getSeconds();
    clockTitle.innerHTML = 
    `${hours <10 ? `0${hours}` : `${hours}`}:${mimutes < 10 ? `0${mimutes}`:`${mimutes}`}:${sec<10 ? `0${sec}` : `${sec}`}`;
}



function init() {
    setInterval(getTime,1000);
}


init();