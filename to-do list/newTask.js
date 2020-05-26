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

    //henter ut listen lagret i localstorage, hvis ingen liste, lager en tom liste.
    const taskList = JSON.parse(window.localStorage.getItem("taskList")) || [];

    //henter toDoList elementet fra HTML.
    const toDoList = document.getElementById("toDo");
    const inProgressList = document.getElementById("inProgress");
    const doneList = document.getElementById("done");

    //Tømmer listene i HTML dokumentet.
    toDoList.innerHTML = "";
    inProgressList.innerHTML = "";
    doneList.innerHTML = "";

    //Lager en taskID for å finne riktig index plass i localstorage arrey.
    var taskNumber = 0;

    //Loopen kjører X antall ganger, der x er tasks i tasklisten.
    for (const task of taskList) {

        const { taskName, date, color, description, taskLocation} = task;

        if(taskLocation == "toDo"){
            //Lager en div og lagrer den i 'newTask'.
            const newTask = document.createElement("div");

            //Henter verdiene fra objektet så vi kan sette dem opp på siden.
            

            //setter opp tasks på siden.
            newTask.innerHTML = `<div id="${taskNumber}" 
                                    class="taskBox"
                                    draggable="true"
                                    ondragstart="onDragStart(event)"
                                    >
                                    <div class="priorityColor" style="background-color: ${color}"></div>
                                    <h3 id="taskname-style">${taskName}</h3>
                                    
                                    <p style="font-size: 12px;">Due date:</p>
                                    <p id="date-style">${date}</p>
                                    <p id="description-style">${description}</p>
                                    <button class="btn edit" onclick="editTask(${taskNumber})"><i class="fa fa-edit"></i></button>
                                </div>`;

            //Legger den nye div'en med tekst i til HTML doc.
            toDoList.appendChild(newTask);

            //inkrementerer TaskNumber for at alle newTasks skal få unik ID.
            taskNumber++;
        }
        if(taskLocation == "inProgress"){
            //Lager en div og lagrer den i 'newTask'.
            const newTask = document.createElement("div");

            //Henter verdiene fra objektet så vi kan sette dem opp på siden.
            const { taskName, date, color, description, } = task;

            //setter opp tasks på siden.
            newTask.innerHTML = `<div id="${taskNumber}" 
                                    class="taskBox"
                                    draggable="true"
                                    ondragstart="onDragStart(event)"
                                    >
                                    <div class="priorityColor" style="background-color: ${color}"></div>
                                    <h3 id="taskname-style">${taskName}</h3>
                                    
                                    <p style="font-size: 12px;">Due date:</p>
                                    <p id="date-style">${date}</p>
                                    <p id="description-style">${description}</p>
                                    <button class="btn edit" onclick="editTask(${taskNumber})"><i class="fa fa-edit"></i></button>
                                </div>`;

            //Legger den nye div'en med tekst i til HTML doc.
            inProgressList.appendChild(newTask);

            //inkrementerer TaskNumber for at alle newTasks skal få unik ID.
            taskNumber++;
        }
        if(taskLocation == "done"){
            //Lager en div og lagrer den i 'newTask'.
            const newTask = document.createElement("div");

            //Henter verdiene fra objektet så vi kan sette dem opp på siden.
            const { taskName, date, color, description, } = task;

            //setter opp tasks på siden.
            newTask.innerHTML = `<div id="${taskNumber}" 
                                    class="taskBox"
                                    draggable="true"
                                    ondragstart="onDragStart(event)"
                                    >
                                    <div class="priorityColor" style="background-color: ${color}"></div>
                                    <h3 id="taskname-style">${taskName}</h3>
                                    
                                    <p style="font-size: 12px;">Due date:</p>
                                    <p id="date-style">${date}</p>
                                    <p id="description-style">${description}</p>
                                    <button class="btn edit" onclick="editTask(${taskNumber})"><i class="fa fa-edit"></i></button>
                                </div>`;

            //Legger den nye div'en med tekst i til HTML doc.
            doneList.appendChild(newTask);

            //inkrementerer TaskNumber for at alle newTasks skal få unik ID.
            taskNumber++;
        }
    }
}

renderToDoList();


//Event listener som kjører renderProductList hvis noe blir
//gjort med localStorage key "taskList"
window.addEventListener("storage", function(event) {
    if (event.key === "taskList") {
        renderToDoList();
    }
});