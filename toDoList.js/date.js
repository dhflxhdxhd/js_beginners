const headDate = document.querySelector(".js-date"),
    headTime = document.querySelector(".js-time");

function loadHead() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const secs = date.getSeconds();
    const year = date.getFullYear();
    const month = date.getMonth(); // 0~11까지
    const Day = date.getDate();
    
    headDate.innerHTML = `${year}-${month + 1}-${Day}`;
    headTime.innerHTML = `${hours<10? `0${hours}`: `${hours}`}:${minutes<10? `0${minutes}` : `${minutes}`}:${secs<10 ? `0${secs}` : `${secs}`}`;

}

function init() {
    setInterval(loadHead,1000);
}

init();