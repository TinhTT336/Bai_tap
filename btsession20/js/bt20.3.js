const data = [
    { idnumber: 1, id: 1, name: "Apple", img: "avatar-2.jpg", price: 58000, count: 2, total: 116000 },
    { idnumber: 2, id: 2, name: "Orange", img: "avatar-3.jpg", price: 24000, count: 1, total: 24000 },
    { idnumber: 3, id: 3, name: "Mango", img: "avatar-5.jpg", price: 45000, count: 3, total: 135000 },
]

const inputName = document.getElementById("name");
const inputImg = document.getElementById("img");
const inputPrice = document.getElementById("price");
const inputCount = document.getElementById("count");
let indexUpdateGlobal = null;

function getNewId() {
    let idMax = 0;
    for (let i = 0; i < data.length; i++) {
        if (idMax < data[i].id) {
            idMax = data[i].id
        }
    } return idMax + 1;
}
function drawTable() {
    let strHTML = "";
    data.forEach(element => {
        strHTML += ` <tr>
                    <td>${element.idnumber}</td>
                    <td>${element.id}</td>
                    <td>${element.name}</td>
                    <td>${element.img}/td>  
                    <td>${element.price}</td>
                    <td>${element.count}</td>
                    <td>${element.total}</td>
                    <td> <button type="button" class="btn btn_edit" onclick="toggleForm(${element.id})"> <i class="bi bi-pencil-square"></i> Sửa</button></td>
                    <td> <button type="button" class="btn btn_delete" onclick="deleteProduct(${element.id})"><i class="bi bi-trash-fill"></i> Xoá</button></td>
                </tr>`
    });
    document.getElementById("t-body").innerHTML = strHTML;
    console.log(strHTML);
}
drawTable();

function deleteProduct(id) {
    let indexDelete = data.findIndex((e) => {
        return e.id == id;
    })
    // console.log(indexDelete);
    const result = confirm("Bạn có chắc chắn muốn xoá không?")
    if (result) {
        data.splice(indexDelete, 1);
        drawTable();
    }
}
function toggleForm(id) {
    document.getElementById("form_scope").classList.toggle("hide");
    if (id != undefined) {
        const indexUpdate = data.findIndex(e => e.id == id);
        indexUpdateGlobal = indexUpdate;
        inputName.value = data[indexUpdate].name;
        inputPrice.value = data[indexUpdate].price;
        inputCount.value = data[indexUpdate].count;
    } else {
        indexUpdateGlobal = null;
        document.getElementById("form").reset()
    }
}

// document.getElementById("form").addEventListener("submit", function (e) {
//     e.defaultPrevented();

//     if (indexUpdateGlobal != null) {
//         data[indexUpdateGlobal].name = inputName.value;
//         data[indexUpdateGlobal].price = inputPrice.value;
//         data[indexUpdateGlobal].count = inputCount.value;

//         if (inputImg.value) {
//             let img = inputImg.value
//             img = img.split("\\")
//             img = img[img.length - 1]
//             data[indexUpdateGlobal].img = img
//         }
//         indexUpdateGlobal = null
//         this.reset()
//         toggleForm()
//         drawTable()
//         return;
//     }
//     console.log(data.length)

//     let img = inputImg.value;
//     img = img.split("\\")
//     img = img[img.length - 1]
//     const product = {
//         idNumber: data.length + 1,
//         id: getNewId(),
//         name: inputName.value,
//         img: img,
//         price: inputPrice.value,
//         count: inputCount.value,
//     }

//     data.push(product)
//     this.reset()
//     toggleForm()
//     drawTable()
// })

// sự kiện submit form
document.getElementById("form").addEventListener("submit", function (e) {
    // tránh việc load lại trang khi submit, vì load lại trang là như bấm open liveserver, mất hết dữ liệu đang làm việc
    e.preventDefault()

    // nếu có indexUpdateGlobal thì submit là để cập nhật lại một sản phẩm ở vị trí indexUpdateGlobal
    if (indexUpdateGlobal != null) {
        // sửa từng trường của sản phẩm bằng các biến mà người dùng nhập lại
        data[indexUpdateGlobal].name = inputName.value
        data[indexUpdateGlobal].price = inputPrice.value
        data[indexUpdateGlobal].count = inputCount.value
        // riêng cái ảnh vì ko đẩy lên được lúc click nút edit nên phải check xem ng dùng có chọn ảnh mới ko
        // nếu có thì gán ảnh mới cho trường img
        // nếu ko thì thôi
        if (inputImg.value) {
            let img = inputImg.value
            img = img.split("\\")
            img = img[img.length - 1]
            data[indexUpdateGlobal].img = img
        }
        // sau khi update thành công thì đưa indexUpdateGlobal về null như ban đầu để chờ lần edit tiếp
        indexUpdateGlobal = null
        // xóa các trường trong form
        this.reset()
        // ẩn form
        toggleForm()
        // vẽ lại bảng
        drawTable()
        // thoát hàm
        return
    }

    // nếu ko có indexUpdateGlobal thì submit là để thêm mới sản phẩm
    // lấy link ảnh
    let img = inputImg.value
    img = img.split("\\")
    img = img[img.length - 1]
    // tạo object sản phẩm mới
    const product = {
        id: getNewId(),
        name: inputName.value,
        price: inputPrice.value,
        count: inputCount.value,
        img
    }
    // vì đã gán idGlobal mới nhất cho sản phẩm phía trên nên tăng idGlobal lên 1 để cho lần làm việc tiếp theo
    // idGlobal++
    // thêm sản phẩm vào mảng data
    data.push(product)
    // xóa các trường trong form
    this.reset()
    // ẩn form
    toggleForm()
    // vẽ lại bảng
    drawTable()
})

// xóa phần tử được chọn theo id
function deleteProduct(id) {
    // tìm vị trí cần xóa
    const indexDelete = data.findIndex(e => e.id == id)
    // hỏi xem ng dùng có muốn xóa
    const result = confirm(`Delete ${data[indexDelete].name}`)
    // nếu có thì xóa
    if (result) {
        // xóa
        data.splice(indexDelete, 1)
        // vẽ lại mảng
        drawTable()
    }
}

