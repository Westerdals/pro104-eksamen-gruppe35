const editTaskPopup = document.getElementById("edit_task_popup");

var savedTaskName = document.getElementById("saved_task_name");
var savedMember = document.getElementById("saved_member");
var savedDate = document.getElementById("saved_date");
var savedColor = document.getElementById("saved_color");
var savedDescription = document.getElementById("saved_description");

//holder ID for tasken som er åpen for edit nå.
var openTask; 

function editTask(i){

    //Stopper siden fra å oppdatere seg når man leverer form.
    event.preventDefault();

    //henter ut tasklisten fra localstorage.
    const thisTask = JSON.parse(window.localStorage.getItem("taskList"));

    //viser edit task vinduet.
    editTaskPopup.style.display = "block";

    //Legger tasks fra index posisjon inn i form
    savedTaskName.value = thisTask[i].taskName;
    savedMember.value = thisTask[i].member;
    savedDate.value = thisTask[i].date;
    savedColor.value = thisTask[i].color;
    savedDescription.value = thisTask[i].description;

    //legger task ID ut av funksjonen så vi kan bruke den når vi lagrer
    openTask = i;
}

function saveEditTask(){
    event.preventDefault();

    //tar ny informasjon fra form og lagrer den i task formatet.
    taskName = savedTaskName.value
    member = savedMember.value;
    date = savedDate.value;
    color = savedColor.value;
    description = savedDescription.value;

    const task = {taskName, member, date, color, description};

    const taskList = JSON.parse(window.localStorage.getItem("taskList")) || [];

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

function closeEditTaskPopup(){
    editTaskPopup.style.display = "none";
}