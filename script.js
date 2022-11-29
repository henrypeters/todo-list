const button = document.getElementById("btn");
const input = document.getElementById("userInput");
const notifyElement = document.getElementById("note");
const completeElement = document.getElementById("done");

notify = `Please enter some values !`;

button.addEventListener("click", function() {
    if (input.value.length > 0) {
        const todoList = document.querySelector("#todo-list");
        const todoItem = document.createElement("li");
        todoItem.classList.add("todo-item");

        todoItem.appendChild(document.createTextNode(input.value));
        const content = document.createElement("div");
        const actions = document.createElement("div");
        const completeButton = document.createElement("button");
        const deleteButton = document.createElement("button");

        content.classList.add("todo-content");
        actions.classList.add("actions");
        completeButton.classList.add("complete");
        deleteButton.classList.add("delete");

        completeButton.innerHTML = `<img src="images/check.png">`;
        deleteButton.innerHTML = `<img src="images/delete.png">`


        actions.appendChild(completeButton);
        actions.appendChild(deleteButton);
        todoItem.appendChild(content);
        todoItem.appendChild(actions);

        completeButton.addEventListener("click", completefunc)

        todoList.appendChild(todoItem);
        todoList.insertBefore(todoItem, todoList.childNodes[0]);
        input.value = "";   

    }else {
        // notifyElement.innerHTML = notify;
        // notifyElement.style.color = "red"
        // notifyElement.style.fontWeight = "200"
        alert("Please enter some values !")
    }
})

function completefunc() {
    let slash = document.getElementById("done")
    todoItem.appendChild(document.createTextNode(input.value)).innerHTML = slash
}

input.addEventListener("keypress", function(event) {
    if (input.value.length > 0 && event.keyCode === 13) {
        const todoList = document.querySelector("#todo-list");
        const todoItem = document.createElement("div");
        todoItem.classList.add("todo-item");
        todoItem.appendChild(document.createTextNode(input.value));


        const content = document.createElement("div");
        const actions = document.createElement("div");
        const complete = document.createElement("button");
        const deleteButton = document.createElement("button");

        content.classList.add("todo-content");
        actions.classList.add("actions");
        complete.classList.add("complete");
        deleteButton.classList.add("delete");

        complete.innerHTML = `<img src="images/check.png">`;
        deleteButton.innerHTML = `<img src="images/delete.png">`

        actions.appendChild(complete);
        actions.appendChild(deleteButton);
        todoItem.appendChild(content);
        todoItem.appendChild(actions)

        todoList.appendChild(todoItem);
        todoList.insertBefore(todoItem, todoList.childNodes[0]);


        input.value = "";   
    }
})