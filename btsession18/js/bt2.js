// Bài 1: Cho mảng như sau:
let products = [
    { id: 1, name: "Milk", count: 100 },
    { id: 2, name: "Yakult", count: 100 },
    { id: 3, name: "Butter", count: 100, }
];

// Thêm đối tượng có các thuộc tính tương tự các đối tượng có trong mảng “products”
let product = {
    id: 4,
    name: "Bread",
    count: 100,
}
products.push(product);
// Xóa đối tượng có id là 2
// let id = 2;
// let findIndex = products.findIndex((value) => {
//     return id == value.id;
// })
// // console.log(findIndex);
// delete products[findIndex];
// console.log(products);

//// Truy vấn đến đối tượng có id là 3, sau đó cập nhật lại giá trị count = 0
let id = 3;
let findIndex1 = products.findIndex((value) => {
    return id == value.id;
})
// console.log(findIndex1);
products[findIndex1].count = 0;
console.log(products);

// // Cho từ khóa “Butter”. Kiểm tra từ khóa có trong mảng “products” hay không ?
// //     Nếu Có in toàn bộ thông tin, nếu Không hiển thị thông báo “Không có dữ liệu bạn tìm kiếm”

let name1 = "Butter";
let findIndex2 = products.findIndex((value) => {
    return name1 == value.name;
})
// console.log(findIndex2);
if (findIndex2) {
    console.log(products[findIndex2]);
} else {
    console.log("Khong co du lieu ban tim kiem");
}

//cach 2: 
let check = -1;
for (let i = 0; i < products.length; i++) {
    if (name1 == products[i].name) {
        check = i;
        break;
    }
}
if (check) {
    console.log(products[check]);
} else {
    console.log("Khong co du lieu ban tim kiem");
}
//cach 3:
let name2 = "Butter";
let findIndex4 = products.filter((value) => {
    return name2 == value.name;
})
console.log(findIndex4);

// Bài 2: Tạo một class Dog có những thuộc tính:
// Tên và tốc độ di chuyển
// Có khả năng thực hiện sủa
// Có khả năng bắt được mèo nếu tốc độ của chó lớn hơn
// Tạo class Cat có những thuộc tính sau:
// Tên và tốc dộ di chuyển
class Cat {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }
}
class Dog {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
        this.barkGau = () => {
            console.log(`Cho ${this.name} sua gau gau`);
        }
        this.catchCat = (cat) => {
            if (this.speed > cat.speed) {
                console.log(`Cho ${this.name} bat duoc meo ${cat.name}`);
            } else {
                console.log(`Cho ${this.name} khong bat duoc meo ${cat.name}`);
            }
        }
    }
}
let dog1 = new Dog("Buck", 100);
let cat1 = new Cat("Tom", 70);
dog1.barkGau();
dog1.catchCat(cat1);

// Bài 3: Tạo một đối tượng User chưa thông tin người dùng bao gồm: tên, email, địa chỉ, điện thoại.Tạo class Admin kế thừa từ class User.
//  Thêm thuộc tính “role” vào 2 đối tượng Admin(value = 1) và User(value = 0)
// Tạo danh sách người dùng(dạng mảng) và thêm vào 3 user, 1 admin
// Xóa người dùng thông qua tên của họ(không xóa được admin)
// Sửa thông tin người dùng thông qua id(không sửa được thông tin admin)
// Thêm 1 nick admin vào mảng danh sách người dùng.Sau đó tìm kiếm toàn bộ thông tin các tài khoản là admin và in ra
class User {
    role = 0;
    constructor(name, email, address, phone) {
        this.name = name;
        this.email = email;
        this.address = address;
        this.phone = phone;
    }
}
class Admin extends User {
    role = 1;
    constructor(name, email, address, phone) {
        super(name, email, address, phone)
    }
}

let user1 = new User("abc", "abc@gmail.com", "Ha Noi", "093783874");
let user2 = new User("def", "def@gmail.com", "Ha Nam", "093383872");
let user3 = new User("aghk", "aghk@gmail.com", "Ha Noi", "0937363871");
let admin1 = new Admin("aghk", "aghk@gmail.com", "Ha Noi", "0937363871");
let arr = [user1, user2, user3, admin1];

// arr.push(user1);
// arr.push(user2);
// arr.push(user3);
// arr.push(admin1);
console.log(arr);

let deleteName1 = "abc"//prompt("Nhap ten nguoi dung muon xoa");
let findIndex3 = arr.findIndex((value) => {
    return deleteName1 == value.name;
})
if (arr[findIndex3].role == 0) {
    arr.splice(findIndex3, 1);
} else {
    console.log("Ban khong co quyen xoa thong tin admin");
}
console.log(arr);

// do {
//     let idIndex = prompt(`Nhap vao vi tri nguoi dung ban muon sua (0-${arr.length - 1})`);
// } while (idIndex < 0 || idIndex > arr.length);
// if (arr[idIndex].role == 0) {
//     let a = prompt("Nhap thong tin ban muon sua (name/email/address/phone")
//     if (a == "name" || a == "email" || a == "address" || a == "phone") {
//         arr[idIndex][a] = prompt("Nhap noi dung ban muon sua");
//     } else {
//         a = prompt("Nhap thong tin ban muon sua (name/email/address/phone")
//     }
// } else {
//     console.log("Ban khong co quyen sua thong tin admin");
// }

let admin2 = new Admin("ahdjhk", "ahdjhk@gmail.com", "Ha Noi", "0938863871");
arr.push(admin2);

let findAdmin = arr.filter((value) => {
    return 1 == value.role;
})
console.log(findAdmin);

// Bài 4: Tạo dữ liệu để có thể in ra nội dung dưới đây:
let idTT = 1;
class Course {
    completeStatus = "complete:false";
    id = idTT++;
    constructor(name) {
        // this.is = id;
        this.name = name;
        // this.completeStatus = completeStatus;
    }
}
let course1 = new Course("HTML");
let course2 = new Course("CSS");
let course3 = new Course("Basic of Javascript");
let course4 = new Course("Node package Manager (npm)");
let course5 = new Course("Git");

let arrCourse = [course1, course2, course3, course4, course5];
// arrCourse.push(course1);
// arrCourse.push(course2);
// arrCourse.push(course3);
// arrCourse.push(course4);
// arrCourse.push(course5);
console.log(arrCourse);
// Cho người dùng nhập vào 5 chữ cái C / R / U / D / E
// C – Cho người dùng nhập vào khóa học mới và trạng thái hoàn thành.
// Sau đó cập nhật lại mảng dữ liệu và in ra giống như trên
// R – In ra toàn bộ các khóa học theo mẫu trên
// U – Hỏi người dùng vị trí update khóa học.Nếu tồn tại cho người dùng nhập vào tên muốn update
//  và trạng thái mới.Update xong in lại như trên
// D – Hỏi người dùng vị trị của khóa học muốn xóa.Tiến hành xóa và in ra như trên
// E – Biến chương trình thành vòng lặp vĩnh cứu và khi người dùng nhập vào E thì sẽ thoát khỏi chương trình 
// và thông báo “Cảm ơn bạn đã đến với Rikkei Academy”
let input = prompt("Nhập vào 5 chữ cái C / R / U / D / E de tiep tuc thao tac");
while (true) {
    if (input == "C") {
        let newName = prompt("Nhap ten khoa hoc moi");
        let newCourse = new Course(newName);
        arrCourse.push(newCourse);
        console.log(arrCourse);
    } else if (input == "R") {
        console.log(arrCourse);
    } else if (input == "U") {
        let position
        do {
            position = +prompt(`Nhap vi tri khoa hoc ban muon sua (tu 0-${arrCourse.length - 1}) `)
        } while (position < 0 || position > arrCourse.length);
        let updateName = prompt("Nhap ten khoa hoc ban muon sua thanh");
        arrCourse[position].name = updateName;
        do {
            let updateStatus = prompt("Nhap tinh trang khoa hoc ban muon sua thanh (true/false)");
        } while (updateStatus != "true" && updateStatus != "false");
        arrCourse[position].completeStatus = updateStatus;
        console.log(arrCourse);
    } else if (input == "D") {
        let position;
        do {
            position = +prompt(`Nhap vi tri khoa hoc ban muon sua (tu 0-${arrCourse.length - 1}) `)
        } while (position < 0 || position > arrCourse.length);
        arrCourse.splice(arrCourse[position], 1);
        console.log(arrCourse);
    } else if (input == "E" || input == undefined) {
        console.log("Cảm ơn bạn đã đến với Rikkei Academy");
        break;
    }
    input = prompt("Nhập vào 5 chữ cái C / R / U / D / E de tiep tuc thao tac");
}

//Bai 5: Cho mang nhu sau:
let stores = [
    { id: 1, name: "Milk", count: 100 },
    { id: 2, name: "Yakult", count: 100 },
    { id: 3, name: "Butter", count: 100, }
];
let carts = [];

// Cho người dùng nhập vào 5 chữ cái C / R / U / D / E
// C – Cho người dùng nhập vào tên sản phẩm muốn mua.
// Nếu có thêm chúng vào carts khi đó count trong stores của sản phẩn đó giảm đi 1
// R – In ra toàn bộ các sản phẩm trong stores và carts
// U – Hỏi người dùng vị trí update trong carts.
// Nếu tồn tại cho người dùng nhập vào số lượng muốn thay đổi và khi đó count trong stores cũng cập nhật theo.
// Update xong in lại stores và carts
// D – Hỏi người dùng vị trị của sản phẩm muốn xóa trong carts.Tiến hành xóa và in ra lại
// E – Biến chương trình thành vòng lặp vĩnh cứu và khi người dùng nhập vào E thì sẽ thoát khỏi chương trình
//  và thông báo “Cảm ơn bạn đã đến với Rikkei Stores”

// let input = prompt("Nhap vao 5 chu cai C/R/U/D/E de thuc hien cac thao tac tiep theo");
// while (true) {
//     if (input == "C") {
//         let newId = `${carts.length + 1}`;
//         let newName = prompt("Nhap ten san pham muon them");

//         let position = stores.findIndex((value) => {
//             return newName == value.name;
//         })

//         if (position >= 0) {
//             let indexOfCart = carts.findIndex(value => value.name == newName)
//             // console.log("==>: ", indexOfCart)
//             if (indexOfCart >= 0) {
//                 carts[indexOfCart].count += 1;

//             } else {
//                 carts.push({ id: newId, name: newName, count: 1 })
//             }
//             console.log(carts)
//             stores[position].count--;
//             console.log(stores);
//         } else {
//             console.log("Cua hang khong ban san pham nay");
//         }
//     } else if (input == "R") {
//         console.log(carts);
//         console.log(stores);
//     } else if (input == "U") {
//         let position;
//         do {
//             position = +prompt(`Nhap vi tri san pham trong carts ban muon sua (tu 0-${carts.length - 1})`)
//         } while (position < 0 || position >= carts.length);
//         let content = +prompt("Nhap so luong ban muon thay doi");
//         carts[position].count = content;
//         console.log(carts);
//         let nameStores = carts[position].name;
//         let index = stores.findIndex((value) => {
//             return nameStores == value.name;
//         })
//         console.log(index);
//         stores[index].count = 100 - content;
//         console.log(stores[index].count);
//         console.log(stores);
//     } else if (input == "D") {
//         let position;
//         do {
//             position = +prompt(`Nhap vi tri san pham trong carts ban muon xoa(tu 0-${carts.length - 1})`)
//         } while (position < 0 || position >= carts.length);
//         delete carts[position];
//         console.log(carts);
//         let nameStores = carts[position].name;
//         let index = stores.findIndex((value) => {
//             return nameStores == value.name;
//         })
//         stores[index].count = stores[index].count + carts[position].count;
//         console.log(stores);
//     } else if (input == "E") {
//         console.log('Cảm ơn bạn đã đến với Rikkei Stores');
//         break;
//     }
//     input = prompt("Nhap vao 5 chu cai C/R/U/D/E de thuc hien cac thao tac tiep theo");
// }











