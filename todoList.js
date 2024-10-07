const inputTask = document.getElementById('todo-input'); 
const list = document.getElementById('todo-list');


function addTask() {
    if(inputTask.value === ''){
        alert('Desbes de ingresar una tarea');
    }else {
        let data = document.createElement('li');
        let text = document.createElement('span');
        text.innerHTML = inputTask.value;
        let deleteButton = document.createElement('Button');
        let radioButton = document.createElement('input');
        radioButton.type = 'radio';
        radioButton.classList.add('task-radio');
        deleteButton.innerText = 'Delete';
        deleteButton.classList.add('delete-button');
        list.appendChild(data);
        data.appendChild(text);
        data.classList.add('todo-item');
        data.appendChild(deleteButton);
        data.appendChild(radioButton);
        saveTask();
        deleteTaskbtn();
        radioButton.querySelector('task-radio');
        radioButton.onclick = function() {
            if(radioButton.checked){
                text.classList.add('success-task');
                saveTask();
            } 
        }
    }
}

function deleteTaskbtn() {
    document.querySelectorAll('.delete-button').forEach(function (element) {
        element.onclick = function() {
            element.parentElement.remove();
            DeleteStorage();
            saveTask();
        };
    });
}


function DeleteStorage(){
    localStorage.removeItem('data', 'li');
}

function saveTask() {
    localStorage.setItem('data', list.innerHTML);
}

function showTask() {
    list.innerHTML = localStorage.getItem('data');
    deleteTaskbtn();
}

showTask();