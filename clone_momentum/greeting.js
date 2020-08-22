const form = document.querySelector(".js-form"),
input = form.querySelector("input")
, greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
SHOWING_CN = "showing";  //showing의 정체는 무엇인가.??

function savename(text){
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(event) {
    // preventDefault : event 금지.
    // 기본 동작을 막는데 필요한 step 1.
    event.preventDefault();
    const currentValue = input.value;
    // console.log(currentValue);
    paintGreeting(currentValue);
    savename(currentValue);
}

function askforname(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerHTML = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null){
        askforname();
    }else {
        paintGreeting(currentUser);
    }
}   

function init(){
    loadName();
}

init();