
const btn = document.getElementById("addTaskBtn");
const todoData = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

btn.addEventListener("click", ()=>{
    if(todoData.value){
        let todoItem = document.createElement("li");
        todoItem.classList.add("task-item");
        todoItem.textContent = todoData.value;
        taskList.appendChild(todoItem);
        todoData.value = "";
    }
});

taskList.addEventListener("click", (event)=>{
    if(event.target.classList.contains("task-item")){
        event.target.classList.add("completed");
        event.target.style.textDecoration = "line-through";
    }
})