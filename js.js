//my virables//
var todocontainer = document.querySelector(".todo-container"),
    inputtask = document.querySelector(" .add-task input"),
    addtasks = document.querySelector(".add-task .plus"),
    taskscotain = document.querySelector(".tasks-content"),
    tskscount = document.querySelector(".task-count span"),
    tskscompleted = document.querySelector(".comleted-task span");



//infucus to input
window.onload = function() {
    inputtask.focus();
}

//add taskboks//
addtasks.onclick = function() {
    if (inputtask.value === "") {
        return false
    } else {
        let notaskmsg = document.querySelector(".no-tasks-messege");
        if (document.body.contains(document.querySelector(".no-tasks-messege"))) {
            notaskmsg.remove();
        }



        //create dynamic taskbox//
        var taskbox = document.createElement("div"),
            deletetask = document.createElement("span");

        deletetask.classList.add("delete");
        deletetask.textContent = "delete";
        taskbox.textContent = inputtask.value;
        taskbox.classList.add("task-box");
        taskbox.appendChild(deletetask);
        taskscotain.appendChild(taskbox);

        //remove input value //
        inputtask.value = "";
        inputtask.focus();
        countalltasks();
    }

}

////

document.addEventListener("click", function(e) {
    if (e.target.classList.contains("delete")) {
        e.target.parentNode.remove();
        countalltasks()

        if (document.querySelector(".tasks-content").childElementCount == 0) {
            addmnotsksmsg()
        }

    }

    if (e.target.classList.contains("task-box")) {
        e.target.classList.toggle("finished");

        countalltasks()

    }
})



function countalltasks() {

    tskscount.innerHTML = document.querySelectorAll(".tasks-content .task-box").length;


    tskscompleted.innerHTML = document.querySelectorAll(".tasks-content .finished").length;
}


//add no tasks msg//
function addmnotsksmsg() {
    let msgelem = document.createElement("span");
    msgelem.classList.add("no-tasks-messege");
    msgelem.textContent = "no tasks";

    taskscotain.appendChild(msgelem);

}

localStorage.setItem("tasks", document.querySelectorAll(".tasks-content .task-box"));