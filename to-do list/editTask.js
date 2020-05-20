function editTask(i){
    const thisTask = JSON.parse(window.localStorage.getItem("taskList"));
    alert(`Taskname: ${thisTask[i].taskName} and member: ${thisTask[i].member} and maybe some`);
}