const renderTasks = () => {
    const taskList = document.querySelector('.todo-app__list');
    taskList.innerHTML = '';

    taskList.forEach(task => {

        const listItem = document.createElement('li');
        listItem.setAttribute('id', task.id);
        listItem.addEventListener('click', () => markCompleted(task.id))

        const taskCircle = document.createElement('div')
        taskCircle.classList.add("circle")

        const taskName = document.createElement('span')
        taskName.textContent = task.name

        const deleleButton = document.createElement('i');
        deleteButton.classList.add('bx','bx-x','close-icon');
        deleleButton.addEventListener('click' , () => deleteTask(task.id))

        taskContainer.appendChild(taskCircle);
        taskContainer.appendChild(taskName);

        listItem.appendChild(taskCircle);
        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);

    });
}

renderTasks()