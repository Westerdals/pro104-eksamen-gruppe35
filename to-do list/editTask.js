const editTaskPopup = document.getElementById("edit_task_popup");

function editTask(i){

    const thisTask = JSON.parse(window.localStorage.getItem("taskList"));

    editTaskPopup.style.display = "block";

    document.getElementById("saved_task_name").value = thisTask[i].taskName;
    document.getElementById("saved_member").value = thisTask[i].member;
    document.getElementById("saved_color").value = thisTask[i].color;
    document.getElementById("saved_description").value = thisTask[i].description;
}

function closeEditTaskPopup(){
    editTaskPopup.style.display = "none";
}