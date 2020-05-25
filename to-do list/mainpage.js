function openPopup(id) {
    document.getElementById(id).classList.toggle("open")
}

function closePopup(id) {
    document.getElementById(id).classList.remove("open");
}


//Drag and drop
function onDragStart(event) {
    event
      .dataTransfer
      .setData('text/plain', event.target.id);
  
    event
      .currentTarget
      .style
      .backgroundcolor = "yellow";
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
  }