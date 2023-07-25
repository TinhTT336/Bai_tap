// BÀI 1: Viết chương trình nhập vào số N.Hiển thị các số nguyên tố từ 0 → N
// let n = +prompt("Nhap vao 1 so bat ky");
// if (n < 2) {
//     console.log(`${n} khong phai la so nguyen to`);
// } else if (n == 2) {
//     console.log(`${n} la so nguyen to`);
// } else {
//     for (i = 2; i < n; i++) {
//         let flag = true;
//         if (n % i == 0) {
//             flag = false;
//             break;
//         }
//         if (flag) {
//             console.log(`${n} la so nguyen to`);
//         }
//     }
// }

// BÀI 3: Viết chương trình nhập vào số nguyên N.Nếu giá trị nhập vào > 0,
//     yêu cầu người dùng nhập tiếp cho đến khi nào nhập vào số < 0 thì kết thúc.
// Hiển thị kết quả phân loại các số vừa nhập thuộc các nhóm số nguyên tố, số hoàn hảo, số chẵn, số lẻ

let n;
do {
    n = +prompt("Nhap vao 1 so nguyen");
    console.log(n);
} while (n > 0);
let sum = 0;
for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
        console.log(`${i} la so chan`);
        // if (n % i !== 0) {
        //     console.log(`${i} la so chan va la so nguyen to`);
        //     break;
        // } else {
        //     sum += i;
        // }
        // if (sum == n) {
        //     console.log(`${n} la so chan va la so hoan hao`);
        // } else {
        //     console.log(`${n} la so chan`);
        // }
    } else {
        console.log(`${i} la so le`);
        // if (n % i !== 0) {
        //     console.log(`${i} la so le va la so nguyen to`);
        //     break;
        // } else {
        //     sum += i;
        // }
        // if (sum == n) {
        //     console.log(`${n} la so le va la so hoan hao`);
        // } else {
        //     console.log(`${n} la so le`);
        // }
    }
}

