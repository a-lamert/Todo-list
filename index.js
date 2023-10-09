const toDoList = [];
function addTask(taskText) {
  toDoList.splice(0, 0, { text: taskText, completed: false });
}
function markTaskAsCompleted(index) {
  if (index >= 0 && index < toDoList.length) {
    toDoList[index].completed = true;
  }
}

addTask("Talk a walk");
addTask("read");
addTask("Listen to musik");

markTaskAsCompleted(0);

console.log("Task list:");
toDoList.forEach((task) => {
  const status = task.completed ? " (done)" : "";
  console.log(`${task.text}${status}`);
});





