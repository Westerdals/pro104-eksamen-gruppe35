const editTaskPopup = document.getElementById("edit_task_popup");

var savedTaskName = document.getElementById("saved_task_name");
var savedMember = document.getElementById("saved_member");
var savedColor = document.getElementById("saved_color");
var savedDescription = document.getElementById("saved_description");

var openTask; 

function editTask(i){

    //Stopper siden fra å oppdatere seg når man leverer form.
    event.preventDefault();

    //henter ut tasklisten fra localstorage.
    const thisTask = JSON.parse(window.localStorage.getItem("taskList"));

    //viser edit task vinduet.
    editTaskPopup.style.display = "block";

    //Legger tasks fra index posisjon i
    savedTaskName.value = thisTask[i].taskName;
    savedMember.value = thisTask[i].member;
    savedColor.value = thisTask[i].color;
    savedDescription.value = thisTask[i].description;

    openTask = i;
}

function saveEditTask(){
    event.preventDefault();

    taskName = savedTaskName.value
    member = savedMember.value;
    //date = savedDate.value;
    color = savedColor.value;
    description = savedDescription.value;

    const task = {taskName, member, color, description};

    const taskList = JSON.parse(window.localStorage.getItem("taskList")) || [];

    taskList.splice(openTask, 1, task);

    window.localStorage.setItem("taskList", JSON.stringify(taskList));

    renderToDoList();
    
    closeEditTaskPopup();
}

function closeEditTaskPopup(){
    editTaskPopup.style.display = "none";
}