function cycle() {

    var hexValues = ["0","1","2","3","4","5","6","7","8","9"];

    function createColor(a) {

        for (var i = 0; i < 6; i++) {

          var x = Math.round(Math.random() * 9);
          var y = hexValues[x];
          a += y;

        }

        return a;

    }
      
    var colorOne = createColor("#");
    var colorTwo = createColor("#");
    var angle = Math.round(Math.random() * 360);
    
    var gradient = "linear-gradient(" + angle + "deg, " + colorOne + ", " + colorTwo + ")";
    
    document.body.style.backgroundImage = gradient;

}

let input = document.getElementById("add");
let add = document.getElementById("add-button");
let todo = document.getElementById("to-do");
let complete = document.getElementById("complete");

let createTask = function (name) {

    let newTask = document.createElement("li");
    let checkTask = document.createElement("button");
    let deleteTask = document.createElement("button");
    let flagIcon = document.createElement('i');
    let trashIcon = document.createElement('i');

    newTask.innerText = name + "   ";
    checkTask.className = "check";
    deleteTask.className = "delete";
    flagIcon.className = "fas fa-flag";
    trashIcon.className = "fas fa-trash";

    newTask.appendChild(checkTask);
    newTask.appendChild(deleteTask);
    checkTask.appendChild(flagIcon);
    deleteTask.appendChild(trashIcon);
    return newTask;

}

let addTask = function () {

    let newTask = createTask(input.value);
    
    if (input.value == "") {

        return;

    }

    todo.appendChild(newTask);
    input.value = "";
    bindEvents(newTask);

}

let deleteTask = function () {

    let newTask = this.parentNode;
    let ul = newTask.parentNode;
    ul.removeChild(newTask);

}

let completeTask = function () {

    let newTask = this.parentNode;
    let ul = newTask.parentNode;
    ul.removeChild(newTask);
    complete.appendChild(newTask);

}

let bindEvents = function (task) {

    let checkButton = task.querySelector("button.check");
    let deleteButton = task.querySelector("button.delete");

    checkButton.onclick = completeTask;
    deleteButton.onclick = deleteTask;

}

add.onclick = addTask;
add.addEventListener("click", addTask);

