const ques = document.querySelector(".js-ques"),
    doListInput = ques.querySelector("input"),
    asList = document.querySelector(".js-doList");

const doList_LS = "dos";
let dos = [];

function saveDos(){
    localStorage.setItem(doList_LS,JSON.stringify(dos));
}

function delList(event) {
    //html에서 delete
    const btn = event.target;
    const li = btn.parentNode;
    // console.log(event.target.parentNode);
    asList.removeChild(li);

    // LS에서 delete -> filter사용

   
    const cleanDos = dos.filter(
        function(toDo){
            // console.log(toDo.id, li.id);
            return toDo.id !== parseInt(li.id);
        });
    // console.log(cleanDos);
    // console.log(dos);
    dos = cleanDos;
    // console.log(dos);
    saveDos();
}

function paintList(text){
    const li = document.createElement("li");
    const del = document.createElement("button");
    del.innerText = "×";
    del.addEventListener("dblclick",delList);
    const span = document.createElement("span");
    const ListId = dos.length + 1;
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(del);
    li.id = ListId;
    console.log(li);
    asList.appendChild(li);
    const dosObj = {
        text:text,
        id : ListId
    }
    dos.push(dosObj);
    saveDos();


}

function handleList(event){
    event.preventDefault();

    const currentValue = doListInput.value;
    paintList(currentValue);
    // console.log(doListInput.value);
    doListInput.value = "";
}

function doListLoad() {
    const toDoList = localStorage.getItem(doList_LS);
    if(toDoList !== null){

        
        // parse : 가져온 것을 js object로 변경
        // console.log(toDoList);
        const parsedToDos = JSON.parse(toDoList);
        // console.log(parsedToDos);
        // array를 위한 function
        parsedToDos.forEach(
            function(toDo){
                paintList(toDo.text);
            }
         ); 

        
    }
}

function init(){
   doListLoad();
   ques.addEventListener("submit",handleList);
}

init();
