const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    if (taskInput.value === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskInput.value;

    li.addEventListener("click", () => {
        li.classList.toggle("completed");
        saveTasks();
    });

    const deleteBtn = document.createElement("span");
    deleteBtn.textContent = "❌";
    deleteBtn.onclick = () => {
        li.remove();
        saveTasks();
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
    saveTasks();
}

function saveTasks() {
    localStorage.setItem("tasks", taskList.innerHTML);
}

function loadTasks() {
    taskList.innerHTML = localStorage.getItem("tasks") || "";
}
