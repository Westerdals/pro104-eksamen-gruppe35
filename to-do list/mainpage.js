var newTaskPopupDiv = document.getElementById("new_task_popup");
var memberPopupDiv = document.getElementById("popup_member_main");
var editPopupDiv = document.getElementById("edit_task_popup");

function openNewTaskPopup() {
    newTaskPopupDiv.classList.toggle("open");
}

function closeNewTaskPopup() {
    newTaskPopupDiv.classList.toggle("open");

}

function openMemberPopup() {
    memberPopupDiv.classList.toggle("open");
}

function closeMemberPopup() {
    memberPopupDiv.classList.toggle("open");
}

function openEditPopup() {
    editPopupDiv.classList.toggle("open");
}

function closeEditPopup() {
    editPopupDiv.classList.toggle("open");
}