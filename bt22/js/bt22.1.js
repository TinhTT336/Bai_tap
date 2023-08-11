let inputToDo = document.getElementById("input_todo");
let idGlobal = null;

function read() {
    const todos = JSON.parse(localStorage.getItem("toDoList")) || [];

    let strHTML = "";

    todos.forEach(todo => {
        strHTML += ` <li>
                        <input type="radio" name="todo" onclick="changeId(${todo.id},'${todo.name}'">
                        <span class="text">${todo.name}</span>
                        <button onclick="del(${todo.id})">&times;</button>
                    </li>`
    })
    document.getElementById("lists").innerHTML = strHTML;

}
read()


document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const todos = JSON.parse(localStorage.getItem("toDoList")) || [];
    if (idGlobal != null) {
        const index = todos.findIndex(todo => todo.id == idGlobal)
        todos[index].name = inputToDo.value;
        localStorage.setItem("toDoList", JSON.stringify(todos))
        read();
        inputToDo.value = "";
        idGlobal = null;
        return
    }

    let id = null;
    if (todos.length == 0) {
        id = 1;
    } else {
        id = todos[todos.length - 1].id + 1;
    }
    let todo = { id, name: inputToDo.value };
    todos.push(todo);
    localStorage.setItem("toDoList", JSON.stringify(todos));
    read();
    this.reset();
})

function del(id) {
    let todos = JSON.parse(localStorage.getItem("toDoList")) || [];
    todos = todos.filter(todo => todo.id != id);
    localStorage.setItem("toDoList", JSON.stringify(todos));
    read();
}

function changeId(id, name) {
    idGlobal = id;
    inputToDo.value = name;
    console.log(id);
}

