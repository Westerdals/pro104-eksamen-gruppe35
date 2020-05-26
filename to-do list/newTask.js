function createTask() {
    event.preventDefault();

    const taskName = document.getElementById("taskName").value;
    const member = document.getElementById("member").value;
    const date = document.getElementById("date").value;
    const color = document.getElementById("color").value;
    const description = document.getElementById("description").value;
    const taskLocation = "toDo";
    const updateArrey = [];

    const task = { taskName, member, date, color, description, updateArrey, taskLocation };
    const taskList = JSON.parse(window.localStorage.getItem("taskList")) || [];
    taskList.push(task);
    window.localStorage.setItem("taskList", JSON.stringify(taskList));

    renderToDoList();
    closePopup('new_task_popup');
    event.target.reset();
}

function renderToDoList() {
    const taskList = JSON.parse(window.localStorage.getItem("taskList")) || [];
    const toDoList = document.getElementById("toDo");
    const inProgressList = document.getElementById("inProgress");
    const doneList = document.getElementById("done");

    toDoList.innerHTML = "";
    inProgressList.innerHTML = "";
    doneList.innerHTML = "";
    var taskNumber = 0;

    for (const task of taskList) {
        const { taskName, date, color, description, taskLocation} = task;
        if(taskLocation == "toDo"){
            const newTask = document.createElement("div");
            newTask.innerHTML = `<div id="${taskNumber}" 
                                        class="taskBox"
                                        draggable="true"
                                        ondragstart="onDragStart(event)">
                                    <div class="priorityColor" style="background-color: ${color}"></div>
                                    <h3 id="taskname-style">${taskName}</h3>
                                    <p style="font-size: 12px;">Due date:</p>
                                    <p id="date-style">${date}</p>
                                    <p id="description-style">${description}</p>
                                    <button class="btn edit" onclick="editTask(${taskNumber})"><i class="fa fa-edit"></i></button>
                                </div>`;
            toDoList.appendChild(newTask);
            taskNumber++;
        }
        if(taskLocation == "inProgress"){
            const newTask = document.createElement("div");
            const { taskName, date, color, description, } = task;
            newTask.innerHTML = `<div id="${taskNumber}" 
                                        class="taskBox"
                                        draggable="true"
                                        ondragstart="onDragStart(event)">
                                    <div class="priorityColor" style="background-color: ${color}"></div>
                                    <h3 id="taskname-style">${taskName}</h3>
                                    
                                    <p style="font-size: 12px;">Due date:</p>
                                    <p id="date-style">${date}</p>
                                    <p id="description-style">${description}</p>
                                    <button class="btn edit" onclick="editTask(${taskNumber})"><i class="fa fa-edit"></i></button>
                                </div>`;
            inProgressList.appendChild(newTask);
            taskNumber++;
        }
        if(taskLocation == "done"){
            const newTask = document.createElement("div");
            const { taskName, date, color, description, } = task;
            newTask.innerHTML = `<div id="${taskNumber}" 
                                        class="taskBox"
                                        draggable="true"
                                        ondragstart="onDragStart(event)">
                                    <div class="priorityColor" style="background-color: ${color}"></div>
                                    <h3 id="taskname-style">${taskName}</h3>
                                    
                                    <p style="font-size: 12px;">Due date:</p>
                                    <p id="date-style">${date}</p>
                                    <p id="description-style">${description}</p>
                                    <button class="btn edit" onclick="editTask(${taskNumber})"><i class="fa fa-edit"></i></button>
                                </div>`;
            doneList.appendChild(newTask);
            taskNumber++;
        }
    }
}

renderToDoList();
window.addEventListener("storage", function(event) {
    if (event.key === "taskList") {
        renderToDoList();
    }
});