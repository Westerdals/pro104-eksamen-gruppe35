const editTaskPopup = document.getElementById("edit_task_popup");
var savedTaskName = document.getElementById("saved_task_name");
var savedMember = document.getElementById("saved_member");
var savedDate = document.getElementById("saved_date");
var savedColor = document.getElementById("saved_color");
var savedDescription = document.getElementById("saved_description");
var updatesOutput = document.getElementById("updates_output");
var update = document.getElementById("update");
var openTask;

//editTask er knapper som blir generert med hver newTask
function editTask(i) {

    openTask = i;
    const taskList = JSON.parse(window.localStorage.getItem("taskList"));
    openPopup('edit_task_popup');

    savedTaskName.value = taskList[i].taskName;
    savedMember.value = taskList[i].member;
    savedDate.value = taskList[i].date;
    savedColor.value = taskList[i].color;
    savedDescription.value = taskList[i].description;

    renderUpdates();
}

//Sletter task objekt og erstatter med nytt
function saveEditTask() {
    event.preventDefault();
    const taskList = JSON.parse(window.localStorage.getItem("taskList")) || [];
   
    taskName = savedTaskName.value;
    member = savedMember.value;
    date = savedDate.value;
    color = savedColor.value;
    description = savedDescription.value;
    updateArrey = taskList[openTask].updateArrey;
    taskLocation = taskList[openTask].taskLocation;

    const task = { taskName, member, date, color, description, updateArrey, taskLocation };
    taskList.splice(openTask, 1, task);
    window.localStorage.setItem("taskList", JSON.stringify(taskList));

    renderToDoList();
    closePopup('edit_task_popup');
}
//Sletter task fra taskList
function deleteTask() {
    const taskList = JSON.parse(window.localStorage.getItem("taskList")) || [];
    taskList.splice(openTask, 1, );
    window.localStorage.setItem("taskList", JSON.stringify(taskList));

    renderToDoList();
    closePopup('edit_task_popup');
}

function saveNewUpdate() {
    const taskList = JSON.parse(window.localStorage.getItem("taskList")) || [];
    taskList[openTask].updateArrey.unshift(update.value);
    window.localStorage.setItem("taskList", JSON.stringify(taskList));
    update.value = "";
    renderUpdates();
}

function renderUpdates() {
    const taskList = JSON.parse(window.localStorage.getItem("taskList"));
    let ownerName = localStorage.getItem("Owner");
    
    savedUpdates = taskList[openTask].updateArrey;
    updateArreyLength = savedUpdates.length;
    var updatesText = "";

    for (var i2 = 0; i2 < updateArreyLength; i2++) {
        updatesText += `<p>
                            <p>${ownerName}</p>
                             ${savedUpdates[i2]}
                            <p>---------------</p>
                        </p>`
    }

    updatesOutput.innerHTML = updatesText;
    updatesText = "";
}
