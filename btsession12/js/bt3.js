//kiểm tra 1 số có phải số nguyên tố không
//số nguyên tố là số chỉ có 2 ước là 1 và chính nó;
//in ra 20 số nguyên tố đầu tiên
let count = 0;
let number = 2;
while (true) {
    if (count == 20) {
        break;
    }
    let flag = true;//gia su flag =true la so nguyen to
    for (i = 2; i < number; i++) {//kiem tra trong khoang tu 2 den nho hon number co ton tai 1 uoc nao khong
        if (number % i == 0) {//ton tai 1 uoc
            flag = false;
            break;
        }
    }
    if (flag) {
        console.log(number);
        count++;
    }
    number++;
}