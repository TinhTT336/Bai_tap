//Bài 1: Chuyển từ độ C sang độ F.
//°C  x  9/5 + 32 = °F
// let c = +prompt("Nhap do C");
// let f = c * 9 / 5 + 32;
// console.log("Do F la: " + f);

//Bài 2: Chuyển từ mét sang feet
//ft =m * 3.2808
// let m = +prompt("Nhap m");
// let ft = m * 3.2808;
// console.log("ft la: " + ft);

//Bài 3: Tính diện tích hình vuông khi biết cạnh a.
// let a = +prompt("Nhap a");
// let area = a * a;
// console.log("Dien tich hinh vuong: " + area);

//Bài 4: Tính diện tích hình chữ nhật khi biết 02 cạnh a, b.
// let a = +prompt("Nhap a");
// let b = +prompt("Nhap b");
// let area = a * b;
// console.log("Dien tich hinh chu nhat la: " + area);


//Bài 5: Tính diện tích tam giác vuông khi biết 02 cạnh kề a, b.
// let a = +prompt("Nhap a");
// let b = +prompt("Nhap b");
// let s = 1 / 2 * (a * b);
// console.log("Dien tich tam giac vuong la: " + s);

//Bài 6: Giải phương trình bậc 1.
//ax+b=0
//x = - b/a
// let a = +prompt("Nhap a");
// let b = +prompt("Nhap b");
// let x = -b / a;
// if (a == 0 && b == 0) {
//     console.log("Phuong trinh co vo so nghiem");
// } else {
//     if (a == 0 && b != 0) {
//         console.log("Phuong trinh vo nghiem");
//     } else {
//         console.log("Nghiem cua phuong trinh bac 1 la: " + x);
//     }
// }


//Bài 7: Giải phương trình bậc 2.
//ax2+bx+c=0 (a≠0)
//Bước 1: Tính Δ=b2-4ac
// let a = +prompt("Nhap a");
// let b = +prompt("Nhap b");
// let c = +prompt("Nhap c");
// let delta = b * b - 4 * a * c;
// if (delta < 0) {
//     console.log("Phuong trinh vo nghiem");
// } else if (delta = 0) {
//     console.log("Phuong trinh co nghiem kep: x1=x2=" + (- (b / (2 * a))));
// } else {
//     console.log("Phuong trinh co 2 nghiem phan biet: " + ((-b + Math.sqrt(delta)) / 2 * a) + " va " + ((-b - Math.sqrt(delta)) / 2 * a));
// }

//Bài 8: Kiểm tra xem một số nhập vào có phải là tuổi của một người không.
//Một số nguyên là tuổi của một người khi nhỏ 120 và lớn hơn 0.
// let age = +prompt("Nhap tuoi");
// if (age < 120 && age > 0) {
//     console.log("Tuoi cua ban la: " + age);
// } else {
//     console.log("Nhap so khong chinh xac");
// }

//Bài 9: Kiểm tra xem 3 số thực (a,b,c) nhập vào có phải là cạnh của một tam giác.
//  Điều kiện để a, b, c là cạnh của một tam giác là:

// let a = +prompt("Nhap a");
// let b = +prompt("Nhap b");
// let c = +prompt("Nhap c");
// let check1 = a > 0 && b > 0 && c > 0;
// let check2 = a + b > 0 && a + c > 0 && b + c > 0;
// if (check1 && check2) {
//     console.log(`${a}, ${b}, ${c} la 3 canh cua tam giac `);
// } else {
//     console.log(`${a}, ${b}, ${c} khong phai la 3 canh cua tam giac `);
// }

// console.log((check1 && check2) ? (`${a}, ${b}, ${c} la 3 canh cua tam giac `) : (`${a}, ${b}, ${c} khong phai la 3 canh cua tam giac `));

//Bài 10: Viết chương trình tính giá điện.
// Bậc 1(0 đến 50kWh): 1.678 đồng / kWh
// Bậc 2(51 đến 100kWh): 1.734 đồng / kWh
// Bậc 3(101 đến 200 kWh): 2.014 đồng / kWh
// Bậc 4(201 đến 300 kWh): 2.536 đồng / kWh
// Bậc 5(301 đến 400 kWh): 2.834 đồng / kWh
// Bậc 6(401 kWh trở lên): 2.927 đồng / kWh
// Tổng tiền điện = (Tiền điện bậc 1 + Tiền điện bậc 2 + Tiền điện bậc 3) x 10 % VAT(thuế GTGT) 
// let kwh = +prompt("Nhap so dien su dung trong thang");
// let tienDien;

// if (0 < kwh && kwh < 51) {
//     tienDien = Math.round(1678 * 50 * 1.1);
// } else if (kwh < 101) {
//     tienDien = Math.round((1678 * 50 + (kwh - 50) * 1734) * 1.1);
// } else if (kwh < 201) {
//     tienDien = Math.round((1678 * 50 + 50 * 1734 + (kwh - 100) * 2014) * 1.1);
// } else if (kwh < 301) {
//     tienDien = Math.round((1678 * 50 + 50 * 1734 + 100 * 2014 + (kwh - 200) * 2536) * 1.1);
// } else if (kwh < 401) {
//     tienDien = Math.round((1678 * 50 + 50 * 1734 + 100 * 2014 + 100 * 2536 + (kwh - 300) * 2834) * 1.1);
// } else {
//     tienDien = Math.round((1678 * 50 + 50 * 1734 + 100 * 2014 + 100 * 2536 + 100 * 2834 + (kwh - 400) * 2927) * 1.1);
// }
// console.log("Tien dien la: " + tienDien);

//Bai 11: Tinh thue thu nhap ca nhan
// let income = +prompt("Nhap thu nhap hang thang cua ban");
// let thue = income - 11;
// let rs;
// if (income >= 11) {
//     if (thue <= 5) {
//         rs = thue * 0.05;
//     } else if (thue <= 10) {
//         rs = thue * 0.1 - 0.25;
//     } else if (thue <= 18) {
//         rs = thue * 0.15 - 0.75;
//     } else if (thue <= 32) {
//         rs = thue * 0.2 - 1.65;
//     } else if (thue <= 52) {
//         rs = thue * 0.25 - 3.25;
//     } else if (thue <= 80) {
//         rs = thue * 0.3 - 5.85;
//     } else {
//         rs = thue * 0.35 - 9.85;
//     }
// } else {
//     alert("Khong can dong thue TNCN");
// } alert(`Thue TNCN can phai dong hang thang la: ${rs} trieu dong`);

//Bài 12: Viết chương trình tính lãi ngân hàng (lãi mẹ đẻ lãi con) khi biết số tiền ban đầu, 
// số tháng cho vay và lãi suất hàng tháng.
// A = P x(1 + r) ^ n
// let p = +prompt("Nhap vao so tien ban muon vay ngan hang");
// let n = +prompt("Nhap vao so thang ban muon vay");
// const R = 0.1;
// let a = Math.round(p * Math.pow((1 + R / 12), n));
// console.log("Lai suat ngan hang phai tra la: " + a);

