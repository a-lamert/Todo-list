constformInput = document.getElementById ("todo-form");
const listItem = document.getElementById.getElementById
("todo-list");

const tasks = [];

const addTask = event => {
  event.preventDefault();

  const todoItem = event.target
  ["todo-item"].value;
  const todoDesc = event.target
  ["todo-item"].value;

  event.target["todo-item"].value = "";
  event.target["todo-desc"].value = "";
  tasks.push({ todoItem, todoDesc, done: false });

  renderTasks();
  console.log(tasks); 
};
 
function renderTasks() {

  while (listItem.hasChildNodes()) {
    listItem.firstChild.remove();
}

tasks.forEach(task => {

  const li = document.createElement("li");

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.checked = task.done;
  
  if (task.done) {
    li.classList.add  ("completed");
  } else { 
    li.classList.remove("completed");
  }

  checkBox.onclick = ()=> {
  task.done = !task.done;
  if (task.done) {
    li.classList.remove("comleted");
  }
  console.log(tasks);
  console.lo("Mouse click")
};
console.log("it worked for Each");
li.append(checkBox);
const text = document.createTextNode('${task.todoItem} ${task.todoDesc}');
li.append(text);

listItem.append(li);
 });
}

formInput.addEventListener("submit", addTask);
 









