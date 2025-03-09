const num = 5;
const ul = document.getElementById("addedTasks");

function addTask() {
  if (ul.children.length >= num) {
    alert("Max Tasks Reached!");
    return;

  } else {
    const task = document.getElementById("newTask").value;
    const task2 = task.charAt(0).toUpperCase() + task.slice(1);
    if (task2 === "") {
      alert("Error! Cannot be Empty!");
      return;
    }

    const li = document.createElement("li");
    li.textContent = task2;
    ul.appendChild(li);

    const button = document.createElement("button");
    button.textContent = "Delete";
    button.style.borderRadius = "8px";
    button.style.backgroundColor = "rgb(233, 63, 63)";
    li.appendChild(button);
    button.onclick = () => {
      li.remove();
    };

    document.getElementById("newTask").value = "";
  }
}

function delTask() {
  ul.replaceChildren();
}
