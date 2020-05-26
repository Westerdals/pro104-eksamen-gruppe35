function openPopup(id) {
    document.getElementById(id).classList.toggle("open")
}

function closePopup(id) {
    document.getElementById(id).classList.remove("open");
}


//Drag and drop

var dragTaskId = "";
var dropLocation = "";

function onDragStart(event) {
    event
      .dataTransfer
      .setData('text/plain', event.target.id);
  
    event
      dragTaskId = event.target.id;
  }


  
  function onDragOver(event) {
    event.preventDefault();
  }



  function onDrop(event) {
    const id = event
      .dataTransfer
      .getData('text');
  
    const draggableTask = document.getElementById(id);
    const dropzone = event.target;
  
    dropzone.appendChild(draggableTask);
  
    event
      .dataTransfer
      .clearData();
      dropLocation = event.target.id;

    changeTaskLocation();
  }

  function changeTaskLocation(){
    const taskList = JSON.parse(window.localStorage.getItem("taskList")) || [];

    //tar ny informasjon fra form og lagrer den i task formatet.
    taskName = taskList[dragTaskId].taskName;
    member = taskList[dragTaskId].member;
    date = taskList[dragTaskId].date;
    color = taskList[dragTaskId].color;
    description = taskList[dragTaskId].description;
    updateArrey = taskList[dragTaskId].updateArrey;
    taskLocation = dropLocation;

    const task = { taskName, member, date, color, description, updateArrey, taskLocation };



    //'opentask' = hvilken posisjon vi skal redigere,
    //'1' = sletter så mange tasks som ligger der, 'task' = legger inn task i den ledige plassen.
    taskList.splice(dragTaskId, 1, task);

    window.localStorage.setItem("taskList", JSON.stringify(taskList));

    //renderToDoList();
  }

  //Bruker skriver inn input verdi for project name
  function handleSubmit() {
    let name = document.getElementById("project").value;
    let ownerName = document.getElementById("owner").value;

    localStorage.setItem("Project Name", name);
    localStorage.setItem("Owner", ownerName);

  }

  window.addEventListener("load", () => {
    let name = localStorage.getItem("Project Name");

    document.getElementById("project_output").innerHTML = name;
  } )