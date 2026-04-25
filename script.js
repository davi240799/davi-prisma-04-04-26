
const toggleBtn = document.getElementById("toggleBtn");
const details = document.getElementById("details");

toggleBtn.addEventListener("click", () => {
  if (details.style.display === "none" || details.style.display === "") {
    details.style.display = "block";
    toggleBtn.textContent = "Ocultar Detalhes";
  } else {
    details.style.display = "none";
    toggleBtn.textContent = "Mostrar Detalhes";
  }
});



const form = document.getElementById("todoForm");
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

 
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  list.appendChild(li);
  input.value = "";
});