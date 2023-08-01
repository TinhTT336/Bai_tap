// Bài 1: Viết chương trình cho người dùng nhập vào 3 số, viết hàm kiểm tra để tìm ra số bé nhất và in ra số đó
function findMin(a, b, c) {
    let min = a;
    if (b < min) {
        min = b;
    }
    if (c < min) {
        min = c;
    }
    return min;
}
console.log(findMin(5, 2, 1));

// Bài 2: Viết hàm kiểm tra xem số người dùng nhập vào có phải là số nguyên tố hay không ?
function isPrimeNumber(n) {
    if (n < 2) {
        console.log(`${n} khong la so nguyen to`);
    } else {
        let check = false;
        for (let i = 2; i < n / 2; i++) {
            if (n % i == 0) {
                check = true;
                break;
            }
        }
        if (check == true) {
            console.log(`${n} khong la so nguyen to`);
        } else {
            console.log(`${n} la so nguyen to`);
        }
    }
}
isPrimeNumber(2);

// Bài 3: Cho mảng sau:
// Viết hàm trả về tất cả các cặp số có tổng bằng 10
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function findTwoNumberHasTotalIsTen(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length / 2; j++) {
            if (arr[i] + arr[j] == 10) {
                console.log(`2 so ${arr[i]} va ${arr[j]} co tong bang 10`);
            }
        }
    }
}
findTwoNumberHasTotalIsTen(arr);

// Bài 4: Cho người dùng nhập vào chuỗi kí tự.Viết hàm kiểm tra xem tần suất xuất hiện của mỗi ký tự và in ra chúng

//chua bai
//nhap vao 1 chuoi su dung input
function handleSubmit() {
    //lay ra gia tri cua o input
    let value = document.getElementById("input").value;
    value = value.toLowerCase();
    console.log(value);
    //tao 1 mang de chua danh sach cac ky tu va so lan xuat hien cua no
    let arr = [];//mang 2 chieu, ky tu luu o phan tu soo 0 cua mang con
    //duyet tung ky tu cua chuoi trong o input va kiem tra
    for (let i = 0; i < value.length; i++) {
        let index = checkExitCharacter(arr, value.charAt(i));
        if (index >= 0) {//neu ky tu thu i ton tai trong mang arr 
            //da ton tai ky tu, phai sua so lan xuat hien
            arr[index][1] += 1;
        } else {
            //chua ton tai
            arr.push([value.charAt(i), 1]);
        }
    }
    // arr = [[r, 1][i, 2]]
    //dung vong lap de in ra
    for (let i = 0; i < arr.length; i++) {
        console.log(`Ky tu ${arr[i][0]} xuat hien ${arr[i][1]} lan `);
    }

}
//kiem tra ton tai cua 1 ky tu o trong 1 mang va tra ve vi tri cua phan tu neu no ton tai, neu khong ton tai tra ve -1;
function checkExitCharacter(arr, char) {//arr la mang 2 chieu [[ky tu, so lan xuat hien]]
    for (let i = 0; i < arr.length; i++) {
        //phan tu con arr[i]
        if (arr[i][0] == char) {
            return i;//ton tai
        }
    }
    return -1;//chua ton tai
}

let names = ['John', 'Bob', 'Jonas', 'Bruce', 'John']
let count = names.reduce(function (allNames, name) {
    if (name in allNames) {
        allNames[name]++
    }
    else allNames[name] = 1
    return allNames
}, {})
console.log(count);

// Bài 5: Viết hàm tính giai thừa của một số nguyên bất kỳ được đưa vào.Thực thi hàm vừa khởi tạo
function calculateFactorial(n) {
    let multi = 1;
    if (n > 0) {
        for (let i = 1; i <= n; i++) {
            multi = multi * i;
        } return multi;
    }
}
console.log(calculateFactorial(3));

// Bài 6: Cho người dùng nhập vào chuỗi số bất kì.Viết hàm sắp xếp chuỗi số đó từ bé đến lớn
// let str1 = prompt("Nhap 1 chuoi so de sap xep")//(4, 5, 6, 7, 53, 6);
// let arr2 = str1.split(",");
// console.log(arr2);
// function sortUpAscending(str) {
//     return arr2.sort((a, b) => a - b);
// }
// console.log(sortUpAscending(arr2));
let str1 = "38473738";
let arr2 = str1.split("");
console.log(arr2);
function sortUpAscending(str1) {
    return arr2.sort();
}
console.log(sortUpAscending(arr2));

let str = "amfhkasufashfmahf";
let array = str.split("");
arr.sort();
// Bài 7: Viết chương trình tạo hàm để kiểm tra xem năm người dùng nhập vào có phải năm nhuận không

// Hệ thống kiến thức về mảng
//1 mảng có 2 thành phần vị trí (index) và phần tủ (element)
//truy xuất/lấy ra 1 phần tử của mảng array tại vị trí index:
// array[index](tương tác 2 chiều - có thể thay đổi giá trị bằng phép gán)
//duyệt mảng: có 3 cách: for in; for of; for i;
//các phương thức chính của mảng: push(), pop(), indexOf(element), sort(function), splice(),
//mảng đa chiều: trong mảng có mảng;
//cách truy xuất phần tử của mảng nhiều chiều array[i][j][k]
//cú pháp khai báo và khởi tạo mảng:
//cách 1: let arr=[];
//cach 2: let arr=new Array();

//splice sử dụng để xoá 1 hay nhiều phần tử hoặc thêm mới 1 hay nhiều phần tử tại vị trí vừa xoá
// let arrInt = [1, 2, 3, 4, 5, 6];
// arrInt.splice(2, 3, 20, 30, 40, 50, 60);
// console.log(arrInt);