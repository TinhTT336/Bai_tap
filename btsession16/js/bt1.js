// Bài 1: Viết chương trình tạo hàm tính tổng 2 số
function calculateTotal(a, b) {
    return a + b;
}
console.log(calculateTotal(2, 3));

// Bài 2: Viết chương trình tạo hàm tính diện tích và chu vi hình tròn
function calculateAreaAndPerimeterOfACircle(radius) {
    let area = Math.PI * radius * radius;
    let perimeter = Math.PI * 2 * radius;
    return [area, perimeter];
}
console.log(calculateAreaAndPerimeterOfACircle(20));

// Bài 3: Viết chương trình tạo hàm kiểm tra xem ký tự nhập vào có phải ký tự số hay không ?
function isANumber(n) {
    if (n < 0 || n >= 0) {
        return `${n} la ky tu so`;
    } else {
        return false;
    }
}
console.log(isANumber("abc"));

// Bài 4: Viết chương trình cho người dùng nhập vào một số, kiểm tra xem số đưa vào có phải nguyên dương không ? Nếu đung trả vè true, sai trả về false
function isInteger(number) {
    if (number > 0 && number % 1 == 0 && typeof number == "number") {
        return `${number} la so nguyen duong`;
    } else {
        return `${number} khong la so nguyen duong`;
    }
}
console.log(isInteger(1.2));

// Bài 5: Viết hàm truyền vào 2 số nguyên bất kì, thực hiện đổi chỗ 2 số nguyên đó
// function reverseArr(arr) {
//     return arr.reverse();
// }
// let arr = [1, 2];
// console.log(reverseArr(arr));

//cach 2:
function reverseArr(arr) {
    let arr1 = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        arr1 += arr[i];
    } arr = arr1.split("");
    return arr;
}
let arr = [1, 2];
console.log(reverseArr(arr));