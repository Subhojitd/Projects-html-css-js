const inputBox = document.getElementById('input-box');
const task = document.getElementById('task-list');
const editModal = document.getElementById('edit-modal');
const editForm = document.getElementById('edit-form');
const editInput = document.getElementById('edit-input');
const closeButton = document.querySelector('.close-button');
let currentTask = null;

function addTask(event) {
    event.preventDefault();

    if (inputBox.value === '') {
        alert('You must enter something');
    } else {
        const taskInput = document.createElement('div');
        taskInput.classList.add('task-card');
        taskInput.innerHTML = `<li>
        <p>Task: ${inputBox.value}</p>
        <p class="status">Status: Pending</p>
        <div class="btn-container">
            <button class="dltBtn">Delete</button>
            <button class="markBtn">Mark Completed</button>
            <button class="editBtn">Edit</button>
        </div>
    </li>`;
        task.appendChild(taskInput);
        inputBox.value = '';

        const markBtn = taskInput.querySelector('.markBtn');
        markBtn.addEventListener('click', markTaskCompleted);

        const deleteBtn = taskInput.querySelector('.dltBtn');
        deleteBtn.addEventListener('click', deleteTask);

        const editBtn = taskInput.querySelector('.editBtn');
        editBtn.addEventListener('click', () => openEditModal(taskInput));

    }
}

function markTaskCompleted(event) {
    const taskElement = event.target.closest('.task-card');
    const statusElement = taskElement.querySelector('.status');
    const markBtn = taskElement.querySelector('.markBtn');

    if (statusElement.textContent === 'Status: Pending') {
        statusElement.textContent = 'Status: Completed';
        markBtn.style.backgroundColor = 'green';
    } else if (statusElement.textContent === 'Status: Completed') {
        statusElement.textContent = 'Status: Pending';
        markBtn.style.backgroundColor = 'yellow';
        markBtn.textContent = 'Status: Pending';
    }
}

function deleteTask(event) {
    const taskElement = event.target.closest('.task-card');
    taskElement.remove();
}

function openEditModal(taskElement) {
    currentTask = taskElement;
    const taskText = taskElement.querySelector('p').textContent.replace('Task: ', '');
    editInput.value = taskText;
    editModal.style.display = 'block';
  }
  
  function closeEditModal() {
    editModal.style.display = 'none';
  }
  
  function updateTask(event) {
    event.preventDefault();
    const updatedTaskText = editInput.value;
    currentTask.querySelector('p').textContent = `Task: ${updatedTaskText}`;
    closeEditModal();
  }

const form = document.getElementById('form');
form.addEventListener('submit', addTask);

editForm.addEventListener('submit', updateTask);
closeButton.addEventListener('click', closeEditModal);