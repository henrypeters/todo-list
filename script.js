const addListButton = document.getElementById("btn");
// const userInput = document.getElementById("userInput");
const userInput = document.querySelector("input");
const notifyElement = document.getElementById("note");
const validationError = document.getElementById("validationError")
const note = document.getElementById('note')

let notify = `Please enter some values !`;
let isFieldEmpty = true







const addList = () => {
  
    const todoList = document.querySelector("#todo-list");
            const todoItem = document.createElement("div");
            todoItem.classList.add("todo-item");
    
            todoItem.appendChild(document.createTextNode(input.value));
            const content = document.createElement("div");
            const actions = document.createElement("div");
            const deleteButton = document.createElement("addListButton");
    
            content.classList.add("todo-content");
            actions.classList.add("actions");
            deleteButton.classList.add("delete");
    
    
            deleteButton.innerHTML = `<img src="images/delete.png">`
    
    
            actions.appendChild(deleteButton);
            todoItem.appendChild(content);
            todoItem.appendChild(actions);
    
            deleteButton.addEventListener("click", deletefunc);
    
            todoList.appendChild(todoItem);
            todoList.insertBefore(todoItem, todoList.childNodes[0]);
            input.value = "";
            isFieldEmpty = false;
}






function deletefunc() {
    const todoItem = this.parentNode.parentNode
    const parent = todoItem.parentNode;

    parent.removeChild(todoItem);

}

userInput.addEventListener("keypress", function (event) {
  
    if (userInput.value.length > 0 && event.keyCode === 13) {
        const todoList = document.querySelector("#todo-list");
        const todoItem = document.createElement("div");
        todoItem.classList.add("todo-item");
        todoItem.appendChild(document.createTextNode(userInput.value));

        const content = document.createElement("div");
        const actions = document.createElement("div");
        const deleteButton = document.createElement("addListButton");

        content.classList.add("todo-content");
        actions.classList.add("actions");
        deleteButton.classList.add("delete");

        deleteButton.innerHTML = `<img src="images/delete.png">`

        deleteButton.addEventListener("click", deletefunc);

        actions.appendChild(deleteButton);
        todoItem.appendChild(content);
        todoItem.appendChild(actions)

        todoList.appendChild(todoItem);
        todoList.insertBefore(todoItem, todoList.childNodes[0]);

        userInput.value = "";
    }
})