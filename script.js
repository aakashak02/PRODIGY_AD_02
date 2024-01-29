let taskIdCounter = 0;

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const taskId = ++taskIdCounter;
        const taskText = taskInput.value.trim();

        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" class="complete-checkbox" id="checkbox-${taskId}">
            <span>${taskText}</span>
            <button class="delete-button" onclick="deleteTask(${taskId})">Delete</button>
        `;

        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function deleteTask(taskId) {
    const taskList = document.getElementById('taskList');
    const task = document.getElementById(`checkbox-${taskId}`).parentNode;
    taskList.removeChild(task);
}
