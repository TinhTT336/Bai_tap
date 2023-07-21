//Bài 1: Nhập vào hai số a và b, và kiểm tra xem a có chia hết cho b hay không
// let a = +prompt("Nhap a");
// let b = +prompt("Nhap b");
// let result = a % b;
// if (result == 0) {
//     console.log(`${a} chia het cho ${b}`);
// } else {
//     console.log(`${a} khong chia het cho ${b}`);
// }

//Bài 2: Nhập tuổi và in ra kết quả nếu tuổi học sinh đó không đủ điều kiện vào học lớp 10.
// let age = +prompt("Nhap tuoi");
// if (age >= 15) {
//     console.log("Du dieu kien hoc lop 10");
// } else {
//     console.log("Khong du dieu kien hoc lop 10");

// }

//Bài 3: Nhập một số nguyên bất kỳ và in kết quả ra màn hình để nói cho người dùng biết số đó là lớn hay nhỏ hơn 0
// let number = +prompt("Nhap 1 so bat ki");
// if (number > 0) {
//     console.log(`${number} lon hon 0`);
// } else {
//     console.log(`${number} nho hon 0`);

// }

//Bài 4: Nhập 3 số nguyên và tìm giá trị lớn nhất của ba số nguyên đó

// let a1 = +prompt("Nhap so a1 bat ky");
// let a2 = +prompt("Nhap so a2 bat ky");
// let a3 = +prompt("Nhap so a3 bat ky");
// max = a1;
// if (a1 > a2 && a1 > a3) {
//     console.log(`Max la ${a1}`);
// } else {
//     if (a2 > a3) {
//         console.log(`Max la ${a2}`);
//     } else {
//         console.log(`Max la ${a3}`);

//     }
// }

//Bài 5: Xếp hạng học lực của học sinh dựa trên các điểm bài kiểm tra, điểm thi giữa kỳ, điểm thi cuối kỳ
// let test = +prompt("Nhap diem kiem tra");
// let mid = +prompt("Nhap diem thi giua ky");
// let end = +prompt("Nhap diem thi cuoi ky");
// let avg = (test + mid + end) / 3;
// if (8.0 <= avg <= 10) {
//     console.log("Gioi");
// } else if (avg >= 6.5) {
//     console.log("Kha");
// } else if (avg >= 5.0) {
//     console.log("Trung binh");
// } else {
//     console.log("Yeu");
// }

//Bài 6: Tính hoa hồng nhận được tuỳ theo mức doanh số bán hàng
// Ví dụ: Công ty quy định mức hoa hồng theo cấp như sau:
// - Doanh thu từ 0 đến 10.000.000đ nhận 3 %
// - Doanh thu từ 10.000.000đ đến 50.000.000 nhận 5 %
// - Doanh thu trên 50.000.000đ nhận 7 %
// Tháng 08 / 2022, nhân viên A bán được hàng và mang lại doanh thu 15.000.000đ, tổng hoa hồng A nhận được là: (10.000.000 x 3 %) + (5.000.000 x 5 %) = 550.000đ
// let revenue = +prompt("Nhap doanh thu dat duoc");
// let commission;
// if (revenue > 0 && revenue < 10000000) {
//     commission = 0.03 * revenue;
//     console.log("Hoa hong nhan duoc la: " + Math.round(commission));
// } else if (revenue < 50000000) {
//     commission = 0.03 * 10000000 + 0.05 * (revenue - 10000000);
//     console.log("Hoa hong nhan duoc la: " + Math.round(commission));
// } else {
//     commission = 0.03 * 10000000 + 0.05 * 40000000 + 0.07 * (revenue - 50000000);
//     console.log("Hoa hong nhan duoc la: " + Math.round(commission));
// }

//Bài 7: Tính cước điện thoại cho một hộ gia đình với các thông số đã cho
// Phí thuê bao bắt buộc là 25 nghìn.
// 600 đồng cho mỗi gọi của 50 phút đầu tiên.
// 400 đồng cho mỗi phút gọi của 150 phút tiếp theo.
// 200 đồng cho bất kỳ mỗi phút nào sau 200 phút đầu tiên.
const FEE = 25000;
let minutes = +prompt("Nhap so phut goi dien thoai cua gia dinh");
let cuocDT;
if (0 < minutes <= 50) {
    cuocDT = FEE + minutes * 600;
    console.log("Cuoc dien thoai la: " + cuocDT);
} else if (minutes <= 200) {
    cuocDT = FEE + 50 * 600 + (minutes - 50) * 400;
    console.log("Cuoc dien thoai la: " + cuocDT);
} else {
    cuocDT = FEE + 50 * 600 + 150 * 400 + (minutes - 200) * 200;
    console.log("Cuoc dien thoai la: " + cuocDT);
}