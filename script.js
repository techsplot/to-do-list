// Get references to HTML elements
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.classList.add("extra-class")
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button onclick="removeTask(this)">Delete</button>
    `;

    taskList.appendChild(taskItem);
    taskInput.value = "";
}

// Function to remove a task
function removeTask(button) {
       
    const taskItem = button.parentElement;

    taskList.removeChild(taskItem);
}
