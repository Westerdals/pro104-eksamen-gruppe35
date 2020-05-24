function createTask() {
    event.preventDefault();

    const taskName = document.getElementById("taskName").value;
    const member = document.getElementById("member").value;
    const date = document.getElementById("date").value;

    const color = document.getElementById("color").value;

    const description = document.getElementById("description").value;
    const updateArrey = [];

    const task = { taskName, member, date, color, description, updateArrey };

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
    const toDoList = document.getElementById("to_do_list");

    //Tømmer toDoList i HTML dokumentet.
    toDoList.innerHTML = "";

    //Lager en taskID for å finne riktig index plass i localstorage arrey.
    var taskNumber = 0;

    //Loopen kjører X antall ganger, der x er tasks i tasklisten.
    for (const task of taskList) {

        //Lager en div og lagrer den i 'newTask'.
        const newTask = document.createElement("div");

        //Henter verdiene fra objektet så vi kan sette dem opp på siden.
        const { taskName, member, date, color, description, } = task;

        //setter opp tasks på siden.
        newTask.innerHTML = `<div id="${taskNumber}" class="task_box"
                                style="background-color: ${color}">
                                <h3 id="taskname-style">${taskName}</h3>
                                
                                <p id="date-style">${date}</p>
                                <p id="description-style">${description}</p>
                                <button onclick="editTask(${taskNumber})"><i class="fa fa-edit"></i> Edit Task</button>
                            </div>`;

        //Legger den nye div'en med tekst i til HTML doc.
        toDoList.appendChild(newTask);

        //inkrementerer TaskNumber for at alle newTasks skal få unik ID.
        taskNumber++;
    }
}


renderToDoList();


//Event listener som kjører renderProductList hvis noe blir
//gjort med localStorage key "taskList"
window.addEventListener("storage", function(event) {
    if (event.key === "taskList") {
        renderToDoList();
    }
})