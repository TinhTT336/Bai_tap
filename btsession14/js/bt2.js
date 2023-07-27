//  Bai 1: Viết chương trình khởi tạo mảng 2 chiều, gồm một bộ các phần tử có sẵn,
//   in ra các phần tử trong mảng.
// let a = [
//     [1, 2, 1, 24],
//     [8, 11, 9, 4],
//     [7, 0, 7, 27],
//     [7, 4, 28, 14],
//     [3, 10, 26, 7]
// ];
// for (let i in a) {
//     console.log("row " + i);
//     for (let j in a) {
//         console.log(a[i][j]);
//     }
// }

// Bài 2: Viết một chương trình để in các ký tự trong một mảng theo thứ tự đảo ngược.
// Ví dụ, nếu một mảng chứa các ký tự['c', 's', 'c', '2', '6', '1']sau khi thực hiện đảo ngược sẽ là "162csc".
// let arr = ['c', 's', 'c', '2', '6', '1'];
// let arr1 = [];
// let ketQua = "";
// for (let i = arr.length - 1; i >= 0; i--) {
//     arr1.push(arr[i]);//cach 1
// } console.log(arr1.join(""));

// ketQua += arr[i];//cach 2
// console.log(ketQua);

// Bài 3: Viết một chương trình khai báo một mảng ký tự.In ra số “ký tự số” trong mảng.
// let arr = [];
// let num = prompt("Nhap so luong phan tu cua mang muon tao");
// for (let i = 0; i < num; i++) {
//     let n = prompt(`Nhap phan tu thu ${i + 1}/${num} muon them vao mang`);
//     arr.push(n);
// }
// for (let j = 0; j < arr.length; j++) {
//     if (parseInt(arr[j]) === 0) {
//         console.log(arr[j]);
//     } else if (!parseInt(arr[j])) {
//         continue;
//     } else {
//         console.log(arr[j]);
//     }
// }

//cach 2:
// for (let j = 0; j < arr.length; j++) {
//     if (arr[j] < 0 || arr[j] > 0) {
//         console.log(arr[j]);
//     }
// }

// Bài 4: Viết một chương trình để đếm số từ trong một chuỗi.
//cach 1
// let str = prompt("Nhap vao 1 chuoi");
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//     if (str[i] == " ") {//dua tren khoang trong giua cac tu
//         count++;
//     }
// }
// console.log(count + 1);//so tu bang so khoang trang +1

// cach 2:
// let str = prompt("Nhap vao 1 chuoi");
// let arr = str.split(" ");
// console.log(arr.length);

//cach 3: cach hop ly nhat
// let str = prompt("Nhap vao 1 chuoi");
// let count = 0;
// let arr = str.split(" ");
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] != "") {
//         count++;
//     }
// }
// console.log(count);


//Bài 5: Viết một chương trình nhập vào 2 chuỗi,
//sau đó kiểm tra xem hai chuỗi có giống nhau hay không.
// let str = prompt("Nhap vao chuoi 1");
// let str1 = prompt("Nhap vao chuoi 2");
// if (str.length !== str1.length) {
//     console.log("Hai chuoi khong giong nhau");
// } else {
// let check = true;
// for (let i = 0; i < str.length;i++)
// if (str[i] != str1[i]) {
//     check = false;
// break;
// }
// if (check) {
//     console.log("Hai chuoi giong nhau");
// } else {
//     console.log("Hai chuoi khong giong nhau");
// }
// }


//cach 2:
// let str = prompt("Nhap vao 1 chuoi");
// let str1 = prompt("Nhap vao 1 chuoi");
// console.log(str);
// console.log(str1);
// if (str === str1) {
//     console.log("Hai chuoi giong nhau");
// } else {
//     console.log("Hai chuoi khong giong nhau");
// }

//Bài 6: Viết chương trình nhập vào một mảng ký tự,
//tìm tất cả các ký tự trong mảng là(-) và thay thế các ký tự này bởi ký tự(_)
// let arr = [];
// let str = prompt("Nhap vao noi dung ban muon");
// arr = str.split(' ');
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == "-") {
//         arr[i] = "_";
//     }
// }
// console.log(arr.join(""));