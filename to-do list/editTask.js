const editTaskPopup = document.getElementById("edit_task_popup");
var user = "Lars Sponheim";
var savedTaskName = document.getElementById("saved_task_name");
var savedMember = document.getElementById("saved_member");
var savedDate = document.getElementById("saved_date");
var savedColor = document.getElementById("saved_color");
var savedDescription = document.getElementById("saved_description");
var updatesOutput = document.getElementById("updates_output");
var update = document.getElementById("update");

//holder ID for tasken som er åpen for edit nå.
var openTask;

function editTask(i) {

    //legger task ID ut av funksjonen så vi kan bruke den når vi lagrer
    openTask = i;

    //henter ut tasklisten fra localstorage.
    const taskList = JSON.parse(window.localStorage.getItem("taskList"));

    //viser edit task vinduet.
    editTaskPopup.classList.toggle("open");

    //Legger tasks fra index posisjon inn i form
    savedTaskName.value = taskList[i].taskName;
    savedMember.value = taskList[i].member;
    savedDate.value = taskList[i].date;
    savedColor.value = taskList[i].color;
    savedDescription.value = taskList[i].description;

    renderUpdates();
}

function saveEditTask() {
    event.preventDefault();

    const taskList = JSON.parse(window.localStorage.getItem("taskList")) || [];

    //tar ny informasjon fra form og lagrer den i task formatet.
    taskName = savedTaskName.value;
    member = savedMember.value;
    date = savedDate.value;
    color = savedColor.value;
    description = savedDescription.value;
    updateArrey = taskList[openTask].updateArrey;

    const task = { taskName, member, date, color, description, updateArrey };


    //'opentask' = hvilken posisjon vi skal redigere,
    //'1' = sletter så mange tasks som ligger der, 'task' = legger inn task i den ledige plassen.
    taskList.splice(openTask, 1, task);

    //legger tilbake hele task listen i localstorage.
    window.localStorage.setItem("taskList", JSON.stringify(taskList));

    //refresher ToDo listen.
    renderToDoList();

    //lukker edit popup.
    closeEditTaskPopup();
}

function saveNewUpdate() {

    const taskList = JSON.parse(window.localStorage.getItem("taskList")) || [];

    taskList[openTask].updateArrey.push(update.value);

    window.localStorage.setItem("taskList", JSON.stringify(taskList));

    update.value = "";
    renderUpdates();
}

function renderUpdates() {

    const taskList = JSON.parse(window.localStorage.getItem("taskList"));

    savedUpdates = taskList[openTask].updateArrey;

    updateArreyLength = savedUpdates.length;

    var updatesText = "";

    for (var i2 = 0; i2 < updateArreyLength; i2++) {

        updatesText += `<p>
                            <p>${user}</p>
                             ${savedUpdates[i2]}
                            <p>---------------</p>
                        </p>`
    }

    updatesOutput.innerHTML = updatesText;

    updatesText = "";
}

function closeEditTaskPopup() {
    editTaskPopup.style.display = "none";
}