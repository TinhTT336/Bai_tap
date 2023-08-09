let orders = [{ idNumber: 1, id: 1, name: " Nguyen Van A", orderTime: "9/8/2023", price: 1000001, status: "Đơn hàng mới", createdTime: "9/8/2023", updatedTime: "10/8/2023" },
{ idNumber: 2, id: 2, name: " Nguyen Van B", orderTime: "9/8/2023", price: 1008001, status: "Hoàn tất", createdTime: "9/8/2023", updatedTime: "10/8/2023" },
{ idNumber: 3, id: 3, name: " Nguyen Van C", orderTime: "9/8/2023", price: 2000001, status: "Đang giao hàng", createdTime: "9/8/2023", updatedTime: "10/8/2023" },
{ idNumber: 4, id: 4, name: " Nguyen Van D", orderTime: "9/8/2023", price: 4070001, status: "Đã xác thực", createdTime: "9/8/2023", updatedTime: "10/8/2023" },
{ idNumber: 5, id: 5, name: " Nguyen Van E", orderTime: "9/8/2023", price: 6000001, status: "Đơn hàng mới", createdTime: "9/8/2023", updatedTime: "10/8/2023" },
]

function displayOrder() {
    let strHTML = "";
    orders.forEach((element) => {
        strHTML += `<tr>
                        <td>${element.idNumber}</td>
                        <td>${element.id}</td>
                        <td>${element.name}</td>
                        <td>${element.orderTime}</td>
                        <td>${element.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                        <td>${element.status}</td>
                        <td>${element.createdTime}</td>
                        <td>${element.updatedTime}</td>
                        <td> <button type="button" class="btn btn_read" onclick="toggleForm(${element.id})"> <i class="bi bi-pencil-square"></i>
                                Xem</button>
                        </td>
                        <td> <button type="button" class="btn btn_delete" onclick="deleteOrder(id)"><i class="bi bi-trash-fill"></i> Xoá</button>
                        </td>
                    </tr>`
    })
    document.getElementById("t-body").innerHTML = strHTML;
}
displayOrder();


let indexGlobalUpdate = null;
function deleteOrder(id) {
    let indexDelete = orders.findIndex(order => order.id == id);
    let result = confirm("Ban co chac chan muon xoa khong?");
    if (result) {
        orders.splice(indexDelete, 1);
    }
    displayOrder();
}

let inputIdNumber = document.getElementById("idNumber");
let inputId = document.getElementById("id");
let inputName = document.getElementById("name");
let inputOrderTime = document.getElementById("orderTime");
let inputPrice = document.getElementById("price");
let inputStatus = document.getElementById("status");
let inputCreatedTime = document.getElementById("createdTime");
let inputUpdatedTime = document.getElementById("updatedTime");

function toggleForm(id) {
    document.getElementById("form_scope").classList.toggle("hide");

    if (id != undefined) {
        const indexUpdate = orders.findIndex(order => order.id == id);

        indexGlobalUpdate = indexUpdate;
        console.log(id);
        console.log(indexUpdate);
        console.log(orders[indexUpdate].updatedTime);
        document.getElementById("idNumber").value = orders[indexUpdate].idNumber
        inputIdNumber.value = orders[indexUpdate].idNumber;
        inputName.value = orders[indexUpdate].name;
        inputOrderTime.value = orders[indexUpdate].orderTime;
        inputPrice.value = orders[indexUpdate].price;
        inputStatus.value = orders[indexUpdate].status;
        inputCreatedTime.value = orders[indexUpdate].createdTime;
        inputUpdatedTime.value = orders[indexUpdate].updatedTime;

    } else {
        indexGlobalUpdate = null;
        document.getElementById("form").reset();
    }
}

function updateOrder(id) {

}

function toggleForm1() {
    document.getElementById("form_scope1").classList.toggle("hide");

}
document.getElementById("form1").addEventListener("submit", function (e) {
    e.preventDefault();
    const inputName1 = document.getElementById("name1");
    const inputPrice1 = document.getElementById("price1");
    const inputStatus1 = document.getElementById("status1");

    const newOrder = {
        idNumber: orders.length + 1,
        id: getNewId(),
        name: inputName1.value,
        orderTime: new Date().toLocaleDateString(),
        price: inputPrice1.value,
        status: inputStatus1.value,
        createdTime: new Date().toLocaleDateString(),
        updatedTime: new Date().toLocaleDateString(),
    };

    orders.push(newOrder);
    console.log(newOrder);
    this.reset();
    toggleForm1();
    displayOrder();
});

function clearAll() {
    let result = confirm("Ban co chac chan muon xoa khong?")
    if (result) {
        document.getElementById("t-body").clearAll();
        displayOrder();
    }
}

function getNewId() {
    let idMax = 0;
    for (let i = 0; i < orders.length; i++) {
        const element = orders[i];
        if (idMax < element.id) {
            idMax = element.id;
        }
    } return ++idMax;
}

function searchByStatus() {
    let inputSearch = document.getElementById("input_search").value;

    let arrOrder = orders.filter(value => value.status.toLowerCase().includes(inputSearch.toLowerCase()))

    displayData(arrOrder);
    inputSearch = "";
}