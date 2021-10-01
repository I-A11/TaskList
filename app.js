const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

const addTask = (e) => {
  e.preventDefault();
  if (taskInput.value === "") {
    alert("Add a task");
  }

  const li = document.createElement("li");

  li.className = "collection-item";

  li.appendChild(document.createTextNode(taskInput.value));

  const link = document.createElement("a");

  link.className = "delete-item secondary-content";

  link.innerHTML = `<i class='fas fa-trash-alt'></i>`;

  li.appendChild(link);

  taskList.appendChild(li);

  taskInput.value = "";
};
// Remove task
const removeTask = (e) => {
  if (e.target.parentElement.classList.contains("delete-item")) {
    // console.log(e.target.parentElement);
    if (confirm("Are You Sure?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
};

// Clear Tasks
const clearTasks = () => {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
};

//filter tasks
const filterTasks = (e) => {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll(".collection-item").forEach((task) => {
    const item = task.firstChild.textContent;
    if (item.toLocaleLowerCase().indexOf(text) !== -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });

  console.log(text);
};
const loadEventListeners = () => {
  form.addEventListener("submit", addTask);
  taskList.addEventListener("click", removeTask);
  // clear tasks
  clearBtn.addEventListener("click", clearTasks);
  // filter tasks
  filter.addEventListener("keyup", filterTasks);
};

loadEventListeners();
