// Bài 1: Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử.
// Chương trình thực hiện tính và hiển thị xem có bao nhiêu số nguyên lớn hơn hoặc bằng 10.
// let str = prompt("Nhap 10 so nguyen bat ky tach nhau bang dau ',");
// let arr1 = str.split(",");
// console.log(arr1);
// for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] >= 10) {
//         console.log(`${arr1[i]}  la so lon hon 10`);
//     }
// }

// Bài 2: Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử khác nhau.
// Chương trình hiển thị ra được phần tử có giá trị lớn nhất trong mảng và vị trí của phần tử đó.
// let arr2 = [];
// const a = 4;
// for (let i = 0; i < a; i++) {
//     let n = +prompt(`Nhap vao phan tu thu ${i + 1}/${a} cua mang`);
//     arr2.push(n);
// }
// // [89, 57, -20, 36, 24, 75];
// console.log(arr2);
// let max = arr2[0];
// for (let i = 0; i < arr2.length; i++) {
//     if (max < arr2[i]) {
//         max = arr2[i];
//     }
// }
// console.log(`So lon nhat la ${max} o vi tri ${arr2.indexOf(max)}`);

//cach 2:
// let arr = [11, 22, 33, 44, 55, 66, 88, 77, 99, 100];
// let max = Math.max(11, 22, 33, 44, 55, 66, 88, 77, 99, 100);
// let index = arr.indexOf(max);
// console.log("Phần tử trong mang có giá trị lớn nhất là:" + index);

//Bài 3: Viết chương trình khởi tạo nhập vào một mảng số nguyên.
// Hiển hiện giá trị lớn nhất trong mảng đó và giá trị trung bình của các phần tử trong mảng.
// let str1 = prompt("Nhap 10 so nguyen bat ky, tach nhau boi dau',");
// let arr2 = str1.split(",");

// let arr2 = [89, 57, -20, 36, 24, 75];
// console.log(arr2);
// let max = arr2[0];
// let sum = 0;
// for (let i = 0; i < arr2.length; i++) {
//     if (max < arr2[i]) {
//         max = arr2[i];
//     }
//     sum += arr2[i];
// }
// console.log(`So lon nhat la ${max} o vi tri ${arr2.indexOf(max)}`);
// let average = sum / (arr2.length);
// console.log(average);

//Bài 4: Viết chương trình khởi tạo nhập vào một mảng số nguyên và đảo ngược các phần tử trong mảng đó.
// let n = prompt("Nhap 1 day so nguyen tach nhau boi dau','");
// let arr = n.split(",");
// console.log(arr.reverse());

// let arr = [];
// let ketQua = "";
// let num = +prompt("Nhap so luong phan tu cua mang");
// for (let i = 0; i < num; i++) {
//     let n = +prompt(`Nhap vao phan tu ${i + 1}/${num} cua mang`)
//     arr.push(n);
// }
// for (let j = arr.length - 1; j >= 0; j--) {
//     ketQua += arr[j];
// }
// console.log(ketQua.split(""));

//Bài 5: Viết chương trình đếm số nguyên âm trong một chuỗi.
// let arr = [];
// let number = +prompt("Nhap vao 1 so nguyen");
// for (let i = 0; i < 10; i++) {
//     let n = +prompt("Nhap vao 1 so nguyen bat ky");
//     arr.push(n);
// }
// let arr1 = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//         console.log(arr[i]);
//         arr1.push(arr[i]);
//     }
// }
// console.log(arr1.length);

//cach 2:
// let count = 0;
// let arr = [];
// for (let i = 0; i < 10; i++) {
//     let n = +prompt("Nhap vao 1 so nguyen bat ky");
//     arr.push(n);
// }
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//         console.log(arr[i]);
//         count++;
//     }
// }
// console.log(count);

//Bài 6: Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử.
// Nhập phần tử số nguyên và tìm xem số đó có nằm trong mảng số nguyên không ? 
// Nếu có thuộc mảng số nguyên thì in ra "Number X is in the array" còn lại in ra "Number X is not in the array".
// let n = prompt("Nhap 1 day so nguyen gom 10 so tach nhau boi dau','");
// let arr = (n.split(","));

// let arr = [89, 57, -20, 36, 24, 75];
// console.log(arr);
// let number = +prompt("Nhap 1 so nguyen bat ky");
// let index = arr.indexOf(number);
// if (index != -1) {
//     console.log("Number X is in the array");

// } else {
//     console.log("Number X is not in the array");

// }

//Bài 7: Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử.
// Nhập phần tử số nguyên và kiểm tra xem số đó có thuộc mảng đã cho không ?
//  Nếu có thuộc mảng đã cho xoá số đó khỏi mảng.
// Gợi ý: Việc xoá ở đây tức là dịch phần tử ở bên phải số đã nhập sang vị trí của số đó, và gán 0 cho phần tử cuối cùng của mảng.
// const a = 3;
// let arr = [];
// let arrDelete = [];
// for (let i = 0; i < a; i++) {
//     let n = +prompt(`Nhap vao phan tu thu ${i + 1} cua mang ${a} phan tu`);
//     arr.push(n);
// }
// let num = +prompt("Nhap vao 1 so nguyen de kiem tra");
// let check = true;//gia su co ton tai
// for (let i = 0; i <arr.length; i++) {
//     if (arr[i] === num) {
//         //co ton tai
//         check = true;
//     } else {
//         arrDelete.push(arr[i]);
//     }
// }
// if (check) {
//     //thuc hien xoa
//     arr = arrDelete;
// } else {
//     //thong bao khong co
//     alert(`Gia tri ${num} khong ton tai trong bang`)
// }
// //hien thi mang
// console.log(arr);

// console.log(arr);
// let number = +prompt("Nhap vao 1 so nguyen va kiem tra xem so co thuoc mang khong");
// let index = arr.indexOf(number);
// let arr1 = [];
// if (index != -1) {
//     console.log(number + " nam trong mang");
//     // console.log(arr.splice(index, 1));
//     // console.log(arr);
//     for (j = 0; j < arr.length; j++) {
//         if (j != index) {
//             arr1.push(arr[j])
//         }
//     }
//     arr = arr1;
// } else {
//     console.log("Khong nam trong mang!");
// }
// console.log(arr);

// Bài 8: Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử.
// Chương trình sắp xếp mảng theo thứ tự giảm dần và hiển thị ra mảng đã được sắp xếp.
// const a = 3;
// let arr = [];
// for (let i = 0; i < a; i++) {
// let n = +prompt(`Nhap vao phan tu thu ${i+1} cua mang 10 phan tu`);
//     arr.push(n);
// }
// arr.sort(function (a, b) {
//     return a - b;
// })
// console.log(arr);

//cach 2:
// const a = 3;
// let arr = [];
// for (let i = 0; i < a; i++) {
//     let n = +prompt(`Nhap vao phan tu thu ${i + 1} cua mang 10 phan tu`);
//     arr.push(n);
// }
// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//         if (arr[j] > arr[j + 1]) {
//             let x = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = x;
//         }
//     }
// }
//tim hieu cac cach sap xep trong JS



// Bài 9: Viết chương trình khởi tạo nhập vào 2 mảng số nguyên gồm 10 phần tử, gọi là mảng a và b.
// Mảng c là một mảng được khai báo gồm 20 phần tử số nguyên.
// Chương trình sẽ lưu các phần tử được nối từ hai mảng b và a vào mảng c.Hiển thị mảng c.
// const x = 2;
// let a = [];
// let b = [];
// let c = [];
// for (let i = 0; i < x; i++) {
//     let n = +prompt(`Nhap vao phan tu thu ${i + 1}/${x} cua mang a`);
//     a.push(n);
// }
// for (let i = 0; i < x; i++) {
//     let n = +prompt(`Nhap vao phan tu thu ${i + 1}/${x} cua mang b`);
//     b.push(n);
// }
// // c = b.concat(a);
// // console.log(c);
// for (let k = 0; k < b.length; k++) {
//     a.push(b[k]);
// }
// c = a;
// console.log(c);