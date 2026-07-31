document.addEventListener("DOMContentLoaded", (event) => {
  // your code here
  const form = document.querySelector("#create-task-form");
  const taskList = document.querySelector("#tasks");
  form.addEventListener("click", (event) => {
    event.preventDefault();
    const taskInput = document.getElementById("new-task-description");
    const taskDescription = taskInput.value.trim();
    if (taskDescription !== "") {
      // Creating list item
      const li = document.createElement("li");
      li.textContent = taskDescription;
      taskList.appendChild(li);
      taskInput.value = "";
    }
  });
});
