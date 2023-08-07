// 1. Tạo một ứng dụng Todo - list:C/R/U/D
let toDoList = [
    { id: 1, job: "Hit the gym" },
    { id: 2, job: "Meet George" },
    { id: 3, job: "Pay bills" },
    { id: 4, job: "Buy eggs" },
    { id: 5, job: "Read a book" },
]

function readToDoList() {
    let str = "";
    for (let i = 0; i < toDoList.length; i++) {
        const element = toDoList[i];
        str += ` <tr>
            <td>${element.id}</td>
            <td>${element.job}</td>
            <td><button type="button" onclick="editForm(${element.id})">Edit</button></td>
            <td><button type="button" onclick="deleteToDoList(${element.id})" >Delete</button></td>
        </tr>`
    }
    document.getElementById("content-body").innerHTML = ""
    document.getElementById("content-body").innerHTML = str;
}
readToDoList();

function deleteToDoList(idDelete) {
    // console.log("==>", idDelete)
    if (confirm("Are you sure to delete?")) {
        let indexDelete = toDoList.findIndex((value) => {
            return value.id == idDelete;
        })
        // console.log("vitri: ", indexDelete);
        toDoList.splice(indexDelete, 1);
        readToDoList();
    }
}

function addToDoList() {
    let newName = document.getElementById("title_input").value;
    let newId = getNewID();
    let newJob = {
        id: newId,
        job: newName,
    }
    toDoList.push(newJob);
    // console.log(toDoList);
    document.getElementById("title_input").value = "";
    readToDoList();
}
function getNewID() {
    let idMax = 0;
    for (let i = 0; i < toDoList.length; i++) {
        const element = toDoList[i];
        if (idMax < element.id) {
            idMax = element.id;
        }
    } return idMax + 1;
}

let div = document.getElementById("edit_info")
let idUpdateGlobal = null;
function editForm(idUpdate) {
    // console.log(idUpdate);
    div.style.display = "block";
    let idEdit = toDoList.findIndex((value) => {
        return value.id == idUpdate;
    })
    // console.log(idEdit);
    idUpdateGlobal = idEdit;
    document.getElementById("id_edit").value = toDoList[idEdit].id
    document.getElementById("name_edit").value = toDoList[idEdit].job
}

function updateToDoList() {
    toDoList[idUpdateGlobal].id = document.getElementById("id_edit").value
    toDoList[idUpdateGlobal].job = document.getElementById("name_edit").value
    idUpdateGlobal = null;
    // console.log(toDoList[updateIndex]);
    readToDoList();
    document.getElementById("id_edit").value = ""
    document.getElementById("name_edit").value = ""
    div.style.display = "none";
}

function closex() {
    div.style.display = "none";
}




