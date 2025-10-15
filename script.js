document.getElementById('add-task').addEventListener('click', addTask);
const taskList = document.getElementById('task-list');

function addTask() {
  const taskInput = document.getElementById('task-input');
  const taskText = taskInput.value.trim();

  if (taskText === '') return;

  const li = document.createElement('li');
  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <div class="actions">
      <button class="edit">Edit</button>
      <button class="delete">Delete</button>
    </div>
  `;

  // Event delegation
  li.querySelector('.delete').addEventListener('click', () => li.remove());

  li.querySelector('.edit').addEventListener('click', () => {
    const currentText = li.querySelector('.task-text').textContent;
    const newText = prompt("Edit your task:", currentText);
    if (newText !== null) {
      li.querySelector('.task-text').textContent = newText.trim();
    }
  });

  li.addEventListener('click', (e) => {
    if (e.target.className === 'task-text') {
      li.classList.toggle('completed');
    }
  });

  taskList.appendChild(li);
  taskInput.value = '';
}
