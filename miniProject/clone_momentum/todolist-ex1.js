const toDoForm = document.querySelector(".js-todoform"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-todolist");

const TODOS_LS = "toDos";
const toDos = [];

function delToDo() {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);

    const cleanToDos = toDos.filter(
        function(toDo) {
            console.log(toDo.id, li.id);
            return toDo.id !== parseInt(li.id);
        }
    );
    toDos = cleanToDos;

}

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delbtn = document.createElement("button");
    delbtn.innerText = "🎃";
    delbtn.addEventListener("click",delToDo);
    const span = document.createElement("span");
    const newId= toDos.length+1;
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delbtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text = text,
        id = newId
    }
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();

    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){

    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submimt", handleSubmit);
}

init();