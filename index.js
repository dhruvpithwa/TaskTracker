function drag(event){
    event.dataTransfer.setData("id", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var fetchData = event.dataTransfer.getData("id");
    event.target.appendChild(document.getElementById(fetchData));
    event.dataTransfer.clearData("id");
}