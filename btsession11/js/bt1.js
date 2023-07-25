// BÀI 1: Viết chương trình hiển thị bình phương của số nguyên từ 2 🡪 N
//  nhưng hiển thị các kết quả chia hết cho 2..N nhập từ người dùng.
// Nếu N < 2 hoặc N > 100, thông báo người dùng nhập lại.
// let n = +prompt("Nhap so nguyen bat ky");
// for (let i = 2; i < n; i++)
//     if (n > 2 && n < 100) {
//         if ((i * i) % 2 == 0) {
//             console.log(`Binh phuong cua so nguyen ${i} chia het cho 2 la ${i * i}`);
//         }
//     } else {
//         n = +prompt("Nhap lai 1 so nguyen");
//     }

// let n;
// do {
//     n = +prompt("Nhap lai 1 so");
//     for (let i = 1; i <= n; i++) {
//         if ((i * i) % 2 !== 0) {
//             continue;
//         }
//         console.log(`Binh phuong cua so nguyen ${i} chia het cho 2 la ${i * i}`);
//     }
// }
// while (n < 2 || n > 100);


// BÀI 2: Viết chương trình hiển thị bình phương của số chẵn từ 2 🡪 N.
// N nhập từ người dùng.Nếu N < 2 hoặc N > 100, thông báo người dùng nhập lại.
// let n = +prompt("Nhap 1 so nguyen bat ky");
// if (n < 2 || n > 100) {
//     console.log("Nhap lai so khac");
// } else {
//     for (let i = 2; i <= n; i++) {
//         if ((i % 2) !== 0) {
//             continue;
//         } console.log(`Binh phuong cua so chan ${i} la ${i * i}`);
//     }
// }
// let n;
// do {
//     n = +prompt("Nhap 1 so nguyen");
//     for (let i = 2; i <= n; i++) {
//         if ((i % 2) !== 0) {
//             continue;
//         }
//         console.log(`Binh phuong cua so chan ${i} la ${i * i}`);
//     }
// } while (n > 2 && n < 100);

// BÀI 3: Viết chương trình hiển thị thay đổi 10 màu sắc ngẫu nhiên khi hiển thị console.log()
// let color = 0;
// for (let i = 1; i <= 10; i++) {
//     color = Math.floor(100 + Math.random() * 899)
//     console.log('%c Oh my heavens! ', `color: #${color}`);
// }

// BÀI 4: Viết chương trình hiển thị các số từ 1 🡪 100. Nếu số đó chia hết cho 3 thì hiển thị là “Fizz”, 
// nếu số đó chia hết cho 5 thì hiển thị là “Buzz”. Nếu số đó chia hết cho 3 và 5 thì hiển thị “FizzBuzz”.

// let n = +prompt("Nhap 1 so nguyen bat ky");
// let i;
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0) {
//         if (i % 5 == 0) {
//             console.log(`${i} FizzBuzz`);
//         } else {
//             console.log(`${i} Fizz`)
//         };
//     } else {
//         if (i % 5 == 0) {
//             console.log(`${i} Buzz`)
//         }
//     }
// }

// BÀI 6: Viết chương trình kiểm tra số N có phải là số hoàn hảo hay không ? N nhập từ browser
// let n = +prompt("Nhap so n");
// let sum = 0;
// for (let i = 1; i <= (n / 2); i++) {
//     if (n % i == 0) {
//         sum += i;
//     }
// }
// if (sum == n && sum !== 0) {
//     console.log(`${n} la so hoan hao`);
// } else {
//     console.log(`${n} khong la so hoan hao`);
// }

// BÀI 7: In ra giai thừa của số nguyên dương N ? N nhập từ browser
// let n = +prompt("Nhap 1 so bat ky lon hon 0");
// let gt = 1;
// let i = 1;
// while (i <= n) {
//     gt = gt * i;
//     i++;
// } console.log(`Giai thua cua ${n} la ${gt}`);

// let n = +prompt("Nhap 1 so nguyen duong bat ky");
// let gt = 1;
// for (let i = 1; i <= n; i++) {
//     gt *= i;
// } console.log(`Giai thua cua ${n} la ${gt}`);

// BÀI 8: In ra dãy 20 số Fibonaci đầu tiên

// const number = 20;
// let n1 = 0, n2 = 1, n3;
// for (let i = 1; i <= number; i++) {
//     console.log(n1);
//     n3 = n1 + n2;
//     n1 = n2;
//     n2 = n3;
// }

// BÀI 9: In ra một tam giác vuông

// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= i; j++) {
//         document.writeln(" * ");
//     } document.writeln("<br/>");
// }

// for (let i = 10; i > 0; i--) {
//     for (let j = 1; j <= i; j++) {
//         document.writeln(" * ");
//     } document.writeln("<br/>");
// }


for (let i = 5; i >= 1; i--) {
    let s = '';
    for (let j = 1; j <= i; j++) {
        s = s + '0';
    }
    // for (let k = 1; k <= (i + 4); k+=2) {
    //     s = s + "*";
    // }
    console.log(s)
}


//      *
//     ***
//    *****
//   *******
//  *********

// BÀI 10: Game đoán số:
// let n = +prompt("Nhap vao 1 so bat ki");
// if (n >= 1 && n <= 10) {
//     alert("Chuc mung ban da danh chien thang");
// } else {
//     do {
//         n = +prompt("Nhap tiep");

//     }
//     while (n < 1 || n > 10)
// }



