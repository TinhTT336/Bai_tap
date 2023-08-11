const container = document.getElementById("list");
const inputList = document.getElementById("input_list");
let toDoList;
let indexGlobalUpdate = null;
// toDoList=[{ id: 1, name: "cong viec 1" }, { id: 2, name: "cong viec 2" }]
// localStorage.setItem("toDoList", JSON.stringify(toDoList))||[];
toDoList = JSON.parse(localStorage.getItem("toDoList"));
console.log(toDoList);

function displayList() {
    let strHTML = "";//nen dung forEach() lay du lieu luon
    for (let i = 0; i < toDoList.length; i++) {
        strHTML += ` <li><input type="radio" name="list1" id="list1" onclick="updateList(${toDoList[i].id})"><span>${toDoList[i].name}</span> <button type="button" id="btn_delete"
                    onclick="deleteList(${toDoList[i].id})">&times</button></li>`;
    }
    document.getElementById("list").innerHTML = strHTML;

} displayList()

let keyListener = document.querySelector('#input_list');
keyListener.addEventListener('keypress', function (e) {
    e.preventDefault();
    const toDoList = JSON.parse(localStorage.getItem("toDoList"));

    if (e.keyCode === 13) {
        if (indexGlobalUpdate != null) {
            toDoList[indexGlobalUpdate].name = inputList.value;
            localStorage.setItem("toDoList", JSON.stringify(toDoList));
            displayList();
            indexGlobalUpdate = null;
            inputList.value = "";
            return;
        }
        let newList = { id: toDoList.length + 1, name: inputList.value }
        toDoList.push(newList);
        localStorage.setItem("toDoList", JSON.stringify(toDoList));
        inputList.value = "";
        displayList();
    }


});


function deleteList(id) {
    let toDoList = JSON.parse(localStorage.getItem("toDoList"));
    console.log(toDoList);
    let deleteIndex = toDoList.findIndex((list) => list.id == id);
    console.log(deleteIndex);
    toDoList = toDoList.filter(todo => todo.id != id)
    // let result = confirm("Ban co chac chan muon xoa khong?")
    // if (result) {
    //     toDoList.splice(deleteIndex, 1);
    // }
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
    displayList();
}

function updateList(id) {
    const toDoList = JSON.parse(localStorage.getItem("toDoList"));
    let updateIndex = toDoList.findIndex((list) => list.id == id);
    inputList.value = toDoList[updateIndex].name;

    console.log(updateIndex);
    indexGlobalUpdate = updateIndex;
}
