
let tasks = [];

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const dateInput = document.getElementById("dateInput");

  const taskText = taskInput.value.trim();
  const taskDate = dateInput.value;

  if (taskText === "" || taskDate === "") {
    alert("Please enter both task and date");
    return;
  }

  
  tasks.push({ text: taskText, date: taskDate });

  
  taskInput.value = "";
  dateInput.value = "";

  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = "flex justify-between items-center bg-gray-100 p-3 rounded";

    li.innerHTML = `
      <div>
        <p class="font-medium">${task.text}</p>
        <p class="text-sm text-gray-500">${task.date}</p>
      </div>
      <div class="flex gap-2">
        <button onclick="editTask(${index})" class="bg-yellow-400 hover:bg-yellow-500 text-white px-2 py-1 rounded">Edit</button>
        <button onclick="deleteTask(${index})" class="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded">Delete</button>
      </div>
    `;

    taskList.appendChild(li);
  });
}

function deleteTask(index) {
  tasks.splice(index, 1); 
  renderTasks(); 
}

function editTask(index) {
  const newTask = prompt("Edit task", tasks[index].text);
  const newDate = prompt("Edit date", tasks[index].date);

  if (newTask && newDate) {
    tasks[index].text = newTask;
    tasks[index].date = newDate;
    renderTasks();
  }
}
