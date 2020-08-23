const toDoForm = document.querySelector(".js-todoform"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-todolist");

const TODOS_LS = "toDos"
let toDos = [];

// function filterFn(todo) {
//   //true를 return하는 item이 있는 array를 만드는 역할.  
//   return toDo.id === 1;
// }
function delToDo(event){
  // console.dir(event.target);
  // console.log(event.target.parentNode);
  // html에서 delete
  const btn = event.target;
  const li = btn.parentNode;
  // console.log(event.target);
  // console.log(event.target.parentNode);
  toDoList.removeChild(li);
  //
  const cleanToDos = toDos.filter(function(toDo) {
    console.log(toDo.id, li.id);
    return toDo.id !== parseInt(li.id);
  });
  console.log(cleanToDos);
  console.log(toDos);
  toDos = cleanToDos;

  saveToDos();
}
function saveToDos(){
  // 모든 object를 string으로 만들기 위해 JSON.stringfy()
  localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

function paintToDo(text){
  const li = document.createElement("li");
  const del = document.createElement("button");
  del.innerText = "🚫"  //emoji : windows + ;
  del.addEventListener("click", delToDo);
  const span = document.createElement("span");
  const newId = toDos.length +1;
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(del);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text : text,
    id : newId
  }
  toDos.push(toDoObj);
  saveToDos();

}

function handleSubmit(event){
  event.preventDefault();
  const currentValue = toDoInput.value;

  paintToDo(currentValue);
  toDoInput.value = ""; // enter을 누르면 입력한 값 사라짐. 
}

function something(toDo){ paintToDo(toDo.text);}

function loadToDos(){
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if(loadedToDos !== null){
    // parse : 가져온 것을 js object로 변경
    const parsedToDos = JSON.parse(loadedToDos);
    // array를 위한 function
    parsedToDos.forEach( something );
  }
}

function init(){
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();