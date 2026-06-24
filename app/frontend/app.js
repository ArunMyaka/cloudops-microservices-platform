const tasksEl = document.querySelector("#tasks");
const form = document.querySelector("#task-form");
const titleInput = document.querySelector("#task-title");

async function api(path, options = {}) {
  const response = await fetch(`/api${path}`, {
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options,
  });
  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }
  if (response.status === 204) {
    return null;
  }
  return response.json();
}

async function loadTasks() {
  const tasks = await api("/tasks");
  tasksEl.innerHTML = "";
  tasks.forEach((task) => {
    const item = document.createElement("li");
    item.className = `task ${task.completed ? "done" : ""}`;
    item.innerHTML = `
      <input type="checkbox" ${task.completed ? "checked" : ""} aria-label="Toggle task" />
      <span></span>
      <button class="delete" type="button">Delete</button>
    `;
    item.querySelector("span").textContent = task.title;
    item.querySelector("input").addEventListener("change", async (event) => {
      await api(`/tasks/${task.id}`, {
        method: "PATCH",
        body: JSON.stringify({ completed: event.target.checked }),
      });
      await loadTasks();
    });
    item.querySelector(".delete").addEventListener("click", async () => {
      await api(`/tasks/${task.id}`, { method: "DELETE" });
      await loadTasks();
    });
    tasksEl.appendChild(item);
  });
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  await api("/tasks", {
    method: "POST",
    body: JSON.stringify({ title: titleInput.value.trim() }),
  });
  titleInput.value = "";
  await loadTasks();
});

loadTasks().catch((error) => {
  tasksEl.innerHTML = `<li class="task"><span>${error.message}</span></li>`;
});

