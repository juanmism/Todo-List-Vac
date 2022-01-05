const todos = [];

const newTodo = document.querySelector("#todo");

newTodo.addEventListener("keypress", (event) => {
   
    if (event.code === "Enter") {
        todos.push(event.target.value);
        render();
        event.target.value = "";
    }
    
});
const deleteTodo = (index) => {
    todos.splice(index,1);
    render();
    
}

function render (){
    const todoList = document.querySelector("#todo-list");
    let todoListToPrint = "";
    todos.forEach((todo, index) => {
        todoListToPrint += `<li>${todo} <span onclick="deleteTodo(${index})"> x <span></li>`;
    });
    todoList.innerHTML = todoListToPrint;
}

window.onload = render();