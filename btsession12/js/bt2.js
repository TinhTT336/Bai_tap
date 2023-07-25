// Bai 2: Nhap vao cac so nguyen den khi nhap so 0 thi dung lai.
//Hien thi tong cua cac so vua nhap/ hien thi tong cac so chan vua nhap

// let n = 1;
// let sum = 0;//chua co gia tri nen tong bang 0
// while (n != 0) {
//     n = +prompt("Nhap vao 1 so nguyen");
//     // if (n % 2 != 0) {
//     //     continue;
//     // }
//     sum += n;
// } 
// console.log(sum);//dung vong lap, hien thi tong cac so vua nhap

//Bai 3: Số hoàn hảo (số có tổng các ước nhỏ hơn nó bằng chính nó)
//số 6: 1,2,3,6 => 1+2+3=6 =>6 là số hoàn hảo

//kiểm tra 1 số nhập vào có phải số hoàn hảo không
//b1 nhap vao 1 so
//b2 kiem tra tu 1 den chinh so do, neu la uoc cua so do thuc hien tinh tong cac uoc
//b3 ket thuc vong lap, tien hanh so sanh tong cac uoc thu duoc voi chinh so do va ket luan

// let n = +prompt("Nhap vao 1 so nguyen");
// let sum = 0;
// for (i = 1; i < n; i++) {
//     if (n % i == 0) {
//         sum += i;
//     }
// }
// if (sum == n) {
//     console.log(`${n} la so hoan hao`);
// } else {
//     console.log(`${n} khong phai la so hoan hao`);
// }

//Bai 4: ve tam giac vuong
//hinh 1:
// let j = "";
// for (let i = 1; i <= 5; i++) {
//     j += "*";
//     console.log(j);
// }

//hinh 2: 

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if (i <= j) {//doi dieu kien i>=j/i<=j/i+j=6
            document.write("*");
        } else {
            document.write(" ");
        }
    }
    document.writeln();
}


