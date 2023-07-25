// Bài 6: Tính tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên.

let count = 0;
let sum = 0;

for (let i = 0; count < 30; i++) {
    if (i % 7 == 0) {
        console.log(`${i} chia het cho 7`);
        console.log(count);
        sum += i;
        count++;
    }
}
console.log(sum);

// Viết 1 đoạn mã cho phép người dùng nhập vào 1 số n
// tiến hành kiểm tra xem đó có phải là 1 số nguyên dương hợp lệ không.
// Nếu đó là số hợp lệ, tiến hành tính kết quả của biểu thức
// A=0+1+2+3+...+n
// let n = +prompt("Nhập vào 1 số bất kỳ");
// let sum = 0;
// if (n > 0) {
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     } console.log(sum);
// }

//  Viết 1 đoạn mã cho phép người dùng nhập vào 1 số n
// tiến hành kiểm tra xem đó có phải là 1 số nguyên dương hợp lệ không.
// Nếu đó là số hợp lệ, tiến hành tính kết quả của biểu thức
// A=1+1/2+1/3+...+1/n
// let n = +prompt("Nhap so n");
// let sum = 0;
// if (n > 0) {
//     for (let i = 1; i <= n; i++){
//         sum += 1 / i;
//     }console.log(sum);
// }

//  Viết 1 đoạn mã cho phép người dùng nhập vào 1 số n
// tiến hành kiểm tra xem đó có phải là 1 số nguyên dương hợp lệ không.
// Nếu đó là số hợp lệ, tiến hành tính kết quả của biểu thức
// A=1x1/2+1/2*1/3+...+1/(n-1)*1/n
// let n = +prompt("Nhap n");
// let sum = 0;
// if (n > 1) {
//     for (let i = 2; i <= n; i++) {
//         sum += (1 / (n - 1)) * (1 / n);
//     } console.log(sum);
// }

// Viết 1 đoạn mã cho phép người dùng nhập vào 1 số n
// tiến hành kiểm tra xem đó có phải là 1 số nguyên dương hợp lệ không.(1<=n<=9)
// Nếu đó là số hợp lệ, tiến hành in ra bảng cửu chương của số đó
// input: n = 8;
// output: 8x1 = 8;

// let a;
// do {
//     a = +prompt("Nhap 1 so bat ky");
// } while (a < 1 || a > 9);
// let b;
// for (i = 1; i <= 10; i++) {
//     b = i * a;
//     console.log(`${i} x ${a} = ${b}`);
// }

// Viết 1 đoạn mã cho phép người dùng nhập vào 1 số n
// tiến hành kiểm tra xem đó có phải là 1 số nguyên dương hợp lệ không.
// Nếu đó là số hợp lệ, tiến hành in ra màn hình console dãy số fibonacci n phần tử
// input = 13
// output: 0,1,1,2..

// let n = +prompt("Nhap n");
// let a = 0;
// let b = 1;
// let c;
// let sum = 0;
// for (i = 1; i <= n; i++) {
//     if (i == 1) {
//         console.log(a);
//     }
//     else if (i == 2) {
//         console.log(b);
//     }
//     else {
//         c = a + b;
//         a = b;
//         b = c;
//         console.log(c);
//         sum = sum + c;
//     }
// } console.log(sum);

//  Viết 1 đoạn mã cho phép người dùng nhập vào 1 số n
// tiến hành kiểm tra xem đó có phải là 1 số nguyên dương hợp lệ không.
// Nếu không hợp lệ, yêu cầu nhập lại
// Nếu đó là số hợp lệ, tiến hành in console các số 0->n dạng chẵn lẻ

// let n;
// do {
//     n = +prompt("Nhap vao 1 so bat ky");
// } while (n <= 0);
// for (let i = 1; i <= n; i++) {
//     if (i % 2 == 0) {
//         console.log(`${i} la so chan`);
//     } else {
//         console.log(`${i} la so le`);
//     }
// }

// Viết một đoạn mã cho phép người dùng nhập vào một số nguyên dương n.
// Tiến hành kiểm tra xem đó có phải là một số hợp lệ hay không.Nếu đó là số hợp lệ,
//     tiến hành in ra màn hình console các số chẵn trước, sau đó in ra các số lẻ sau

// Input: n = 5
// 	Expected output:
// 0
// 2
// 4
// 1
// 3
// 5

// let n = +prompt("Nhap n");
// if (n > 0) {
//     for (let i = 1; i <= n; i++) {
//         if (i % 2 == 0) {
//             console.log(`${i} la so chan`);
//         }
//     }
//     for (let i = 1; i <= n; i++) {
//         if (i % 2 !== 0) {
//             console.log(`${i} la so le`);
//         }
//     }
// }
//cach 2:
// let n = +prompt("Nhap n");
// if (n > 0) {
//     for (let i = 1; i <= n; i += 2) {
//         console.log(`${i} la so le`);
//     }
//     for (let i = 2; i <= n; i += 2) {
//         console.log(`${i} la so chan`);
//     }
// }

// Viết một đoạn mã mô phỏng máy ATM.
// Cho người dùng nhập vào số tiền cần rút.
// Sau đó in ra tổng số tờ tiền mà người dùng nhận được với từng loại mệnh giá.
// Biết máy ATM chỉ rút được 3 loại mệnh giá là 500.000, 200.000, 100.000, 50.000.
// Biết số tiền tối thiểu rút một lần là 50.000

// let t;
// let a = b = c = d = 0;
// // t = 500000 * a + 200000 * b + 100000 * c + 50000 * d;
// do {
//     t = +prompt("Nhap so tien");
// } while (t % 50000 !== 0)
// while (t > 0) {
//     if (t > 500000) {
//         t -= 500000;
//         a++;
//     } else if (t > 200000) {
//         t -= 200000;
//         b++;
//     } else if (t > 100000) {
//         t -= 100000;
//         c++;
//     } else {
//         t -= 50000;
//         d++;
//     }
// }
// if (a > 0) {
//     console.log(`500000 - ${a} to`);
// }
// if (b > 0) {
//     console.log(`200000 - ${b} to`);
// }
// if (c > 0) {
//     console.log(`100000 - ${c} to`);
// }
// if (d > 0) {
//     console.log(`50000 - ${d} to`);
// }












