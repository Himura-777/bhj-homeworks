const taskInput = document.getElementById("task__input");
const addButton = document.getElementById("tasks__add");
const tasksList = document.getElementById("tasks__list");
const taskForm = document.getElementById("tasks__form");

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    addTask(taskText);
    taskInput.value = "";
  }
});

function addTask(taskText) {
  const taskElement = document.createElement("div");
  taskElement.classList.add("task");

  taskElement.innerHTML = `
      <div class="task__title">${taskText}</div>
      <a href="#" class="task__remove">&times;</a>
    `;

  const removeButton = taskElement.querySelector(".task__remove");
  removeButton.addEventListener("click", function (event) {
    event.preventDefault();
    taskElement.remove();
  });

  tasksList.appendChild(taskElement);
}
