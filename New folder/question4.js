let tasks = []; 

function addTask(id, name, description) {
    tasks.push({ id, name, description });
}

function viewTasks() {
    return tasks;
}

function updateTask(id, newName, newDescription) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.name = newName;
        task.description = newDescription;
    }
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
}


addTask(1, 'Task 1', 'Description for Task 1');
addTask(2, 'Task 2', 'Description for Task 2');
console.log(viewTasks()); 

updateTask(1, 'Updated Task 1', 'Updated Description for Task 1');
console.log(viewTasks()); 

deleteTask(2);
console.log(viewTasks()); 