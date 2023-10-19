import {Task} from "./tasks";

async function fetchData() {
    try {
        const response = await fetch('http://localhost:3000/getAllTask');

        if (!response.ok) {
            throw new Error(`API request failed with status: ${response.status}`);
        }

        const data = await response.json();
        const tasks: Task[] = data.data;
        renderTasks(tasks);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function renderTasks(tasks: Task[]) {
    const taskList = document.getElementById('taskList');
    var i = 0;
    tasks.forEach((task) => {

        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${task.title}</span>
            <span>${task.projectName}</span>
            <span>${task.createdAt}</span>
            <input type="checkbox" id="state_${i}" ${task.isDone ? 'checked' : ''}>
            <button onclick="deleteTask('${task.title}', '${i}')">delete</button>
            <button onclick="updateTask('${!task._id}', '${i}')">update</button>
        `;
        taskList.appendChild(listItem);
        i+=1;
    });
}

async function deleteTask(title, index) {
    const apiUrl = `http://localhost:3000/deleteTaskByTitle?title=${title}`; // Replace with the actual API endpoint

    try {
        const data = {
            title: title
        }
        const response = await fetch(apiUrl, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`API request failed with status: ${response.status}`);
        }
        console.log(index)
        removeTask(index * 1)
        console.log('Data has been deleted successfully.');
    } catch (error) {
        console.error('Error deleting data:', error);
    }
}
async function updateTask(id, index) {
    var value = document.getElementById('state_' + index) as HTMLInputElement;
    var isDone = false;
    if(value.value === "on") {
        alert(isDone);
        isDone = true;
    }
    const apiUrl = `http://localhost:3000/updateStateTask/${id}`; // Replace with the actual API endpoint
    try {
        const response = await fetch(apiUrl, {
            method: 'PUT',
            body: JSON.stringify({isDone: isDone}),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`API request failed with status: ${response.status}`);
        }
        console.log('Data has been deleted successfully.');
        alert('update state task success!')
    } catch (error) {
        console.error('Error deleting data:', error);
    }
}

function removeTask(index) {
    const taskList = document.getElementById('taskList');

    const taskItems = taskList.getElementsByTagName('li');

    if (index >= 0 && index < taskItems.length) {
        taskList.removeChild(taskItems[index]);
    } else {
        console.log('Chỉ mục không hợp lệ.');
    }
}

// Call the function to fetch data
fetchData();