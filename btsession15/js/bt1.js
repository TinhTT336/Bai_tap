// Bài 1: Tạo hàm alertMessage() hiển thị hộp thoại chứa chuỗi "Xin chao".
// Gọi hàm từ trong phần < body > của trang web.
// function alertMessage() {
//     return alert("xin chao");
// }
// alertMessage();

// Bài 2: Tạo hàm nhận vào một đối số dạng số, tăng giá trị đối số đó lên 1 và trả lại giá trị cho lời gọi hàm.
// Gọi hàm từ trong phần < body > của trang web và hiển thị kết quả lên màn hình.
// let a = +prompt("Nhap vao 1 so");
// function increaseValue(number) {
//     number = number + 1;
//     return number;
// }
// console.log(increaseValue(a));

// Bài 3: Tạo hàm nhận vào hai tham số.Nếu giá trị của tham số thứ nhất lớn hơn tham số thứ hai,
// hiển thị hộp thoại thông báo cho người dùng.Nếu giá trị của tham số thứ nhất nhỏ hơn hoặc bằng tham số thứ hai,
// trả về tổng của hai tham số.
function compareValue(a, b) {
    let sum = 0;
    if (a > b) {
        return `So ${a} lon hon so ${b}`;
    } else {
        sum = a + b;
        return sum;
    }
}
console.log(compareValue(1, 2));
// Bài 4: Thêm các hàm alert() vào những vị trí thích hợp trong đoạn mã sau để bạn
// có thể nhìn thấy giá trị của biến result trước và sau lời gọi hàm.Đoạn mã có dạng như sau:
// function addNumbers() {
//     firstNum = 4;
//     secondNum = 8;
//     result = firstNum + secondNum;
//     return result;
// }
// result = 0;
// alert(result);
// result = addNumbers();
// alert(result);

// Bài 5: Tạo một mảng với bảy phần tử dạng chuỗi có giá trị là tên các ngôi sao sau: Polaris, Aldebaran, Deneb, Vega, Altair, Dubhe và Regulus.Tạo một mảng khác với bảy phần tử dạng chuỗi có giá trị là tên các chòm sao tương ứng chứa các ngôi sao: Ursa Minor, Tarurus, Cygnus, Lyra, Aquila, Ursa Major và Leo.
// Tiếp theo, tạo một hàm nhận vào một tham số dạng chuỗi duy nhất.Trong hàm này, duyệt qua mảng thứ nhất để tìm tên ngôi sao.Nếu tìm thấy, trả lại giá trị tương ứng với chỉ số đó ở mảng thứ hai.Nói cách khác, trả lại tên chòm sao của ngôi sao đó.
// Trong phần của trang web, dùng hộp thoại prompt để người dùng nhập vào tên của ngôi sao, sau đó gọi hàm với thông tin đầu vào.Đừng quên xử lý trong trường hợp không tìm thấy ngôi sao nào.Cho kết quả hiển thị trên màn hình.
let arr1 = ['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe', 'Regulus'];
let arr2 = ['Ursa Minor', 'Tarurus', 'Cygnus', 'Lyra', 'Aquila', 'Ursa Major', 'Leo'];
function findStar(str) {
    let flag = arr1.includes(str);
    let index = arr1.indexOf(str);
    for (let i = 0; i < arr1.length; i++) {
        if (index != -1) {
            i = index;
            return arr2[index];
        } else {
            return `Khong tim thay gia tri ban nhap`;
        }
    }
    //     if (flag) {
    //         return arr2[index];
    //     } else {
    //         return `Khong ton tai gia tri ban nhap`;
    //     }
    // }
}
console.log(findStar("Deneb"));

//cach 2:
function findStar(str) {
    let check = false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] == str) {
            check = true;
            return arr2[i];
        }
    }
    if (check) {
        return `Khong ton tai gia tri ban nhap`;
    }
}
console.log(findStar("Deneb"));
