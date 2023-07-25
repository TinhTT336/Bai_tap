// phát triển một ứng dụng cho phép hiển thị
// 20 số nguyên tố đầu tiên.
// let n = +prompt("nhap vao 1 so nguyen");
// let count = 0;
// let i;
// while (count < n) {
//     function test_prime(n) {
//         if (n === 1) {
//             return false;
//         }
//         else if (n === 2) {
//             return true;
//         } else {
//             for (var i = 2; i < n; i++) {
//                 if (n % i === 0) {
//                     return false;
//                 }
//             }
//             return true;
//         }
//     } console.log(`${n}`);
//     count++;
// } 
// let n = +prompt("Nhap vao 1 so nguyen");
// let count = 0;

// for (let i = 2; count < n; i++) {
//     let check = true;
//     for (let j = 2; j <= (i / 2); j++) {
//         if (i % j == 0) {
//             check = false;
//             break;
//         }  
//     }
//     if (check == true) {
//         console.log(`${i} la so nguyen to`);
//         count++;
//     }
//     check = true;
// }

// let number = +prompt("Nhap vao 1 so");

// let isPrimeNumber = number > 1;

// for (let i = 1; i < number / 2; i++) {
//     if (number % i != 0) {
//         continue;
//     }
//     else {
//         isPrimeNumber = false;
//         break;
//     } console.log(`${i} la so nguyen to`);
// }



// let trs = "";
// for (let i = 1; i <= 10; i++) {
//     tds = "";
//     for (let j = 1; j <= 10; j++) {
//         tds += `<td>${j * i}</td>`;
//     } trs += `<tr>${tds}</td>`;
// }
// document.getElementById("table-body").innerHTML = trs;