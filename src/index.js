document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("#create-task-form");
  const taskList = document.querySelector("#tasks");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const taskInput = document.getElementById("new-task-description");
    const taskDescription = taskInput.value.trim();
    if (taskDescription !== "") {
      // Creating list item
      const li = document.createElement("li");
      li.textContent = taskDescription;

      // Add delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "✕";
      deleteBtn.style.marginLeft = "10px";
      deleteBtn.style.color = "red";
      deleteBtn.style.cursor = "pointer";
      deleteBtn.style.border = "none";
      deleteBtn.style.background = "none";
      // Adding an event listener to the delete button
      deleteBtn.addEventListener("click", function () {
        li.remove();
      });

      li.appendChild(deleteBtn);
      taskList.appendChild(li);
      taskInput.value = "";
    }
  });
});
