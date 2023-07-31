
// Bài 1: Viết hàm tính bình phương của một số bất kỳ được đưa vào.Gọi hàm vừa xây dựng được.
// function square(number) {
//     return number * number;
// }
// console.log(square(10));

// Bài 2: Viết hàm tính diện tích, hàm tính chu vi hình tròn.Gọi hàm vừa xây dựng được.
// function calculateAreaAndPerimeterOfCircle(radius) {
//     let area = Math.PI * radius * radius;
//     let perimeter = Math.PI * radius * 2;
//     return [area, perimeter];
// }
// console.log(calculateAreaAndPerimeterOfCircle(10));

// Bài 3: Viết hàm tính giai thừa của một số nguyên bất kỳ được đưa vào.Gọi hàm vừa xây dựng được.
// function factorial(number) {
//     let multi = 1;
//     if (number > 0) {
//         for (let i = 1; i <= number; i++) {
//             multi = multi * i;
//         }
//         return multi;
//     }
// }
// console.log(factorial(3));

// Bài 4: Viết hàm kiểm tra xem ký tự nhập vào có phải là ký tự số không.Nếu là ký tự số hàm trả về true, ngược lại trả về false.
// function isNumber(a) {
//     if (a < 0 || a >= 0) {
//         return `${a} la ky tu so`;
//     } else {
//         return `${a} khong phai ky tu so`;
//     }
// }
// console.log(isNumber("2"));

// Bài 5: Viết hàm nhận vào 3 số nguyên bất kỳ, trả về số nguyên có giá trị nhỏ nhất.
// function minOfThree(a, b, c) {
//     let min = a;
//     if (b < min) {
//         min = b;
//     }
//     if (c < min) {
//         min = c;
//     }
//     return min;
// }
// console.log(minOfThree(1, 2, 3));

// Bài 6: Viết hàm nhận vào một số, kiểm tra xem nếu số đưa vào có phải là nguyên dương không.Nếu là nguyên dương trả về true, ngược lại trả về false.
// function isInteger(number) {
//     if (typeof number == Number && number > 0 && number % 1 == 0) {
//         return `${number} la so nguyen duong`;
//     } else {
//         return `${number} khong la so nguyen duong`;
//     }
// }
// console.log(isInteger(-1));

// Bài 7: Viết hàm truyền vào 2 số nguyên bất kì, thực hiện đổi chỗ hai số nguyên đó.
// function swap(a, b) {
//     let c = a;
//     a = b;
//     b = c;
//     return [a, b];
// }
// console.log(swap(2, 4));

// Bài 8: Viết hàm truyền vào mảng số nguyên bất kỳ, sau đó đảo ngược mảng số nguyên đó.
// function reverseArr(arr) {
//     return arr.reverse();
// }
// let arr = [1, 2, 3];
// console.log(reverseArr(arr));

//cach 2:
// function reverseArr(arr) {
//     let arr1 = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         arr1 += arr[i];
//     } arr = arr1.split("");
//     return arr;
// }
// let arr = [1, 2, 3];
// console.log(reverseArr(arr));

// Bài 9: Viết hàm truyền vào một mảng ký tự, và một ký tự bất kỳ, kiểm tra xem ký tự bất kỳ đó có nằm trong mảng không.Nếu có trả về số lần xuất hiện của ký tự đó, nếu không trả về - 1.

function isBelongToArrayAndCountCharacter(n) {
    // let n = +prompt("Nhap vao so luong phan tu cua mang muon tao");
    // for (let i = 0; i < arr.length; i++) {
    //     let n1 = +prompt(`Nhap vao phan tu thu ${i + 1}/${n} cua mang`);
    //     arr.push(n1);
    // }
    let flag = false;
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
        if (n == arr[j]) {
            flag = true;
            count++;
        }
    }
    if (flag) {
        console.log(`Ky tu ${n} xuat hien ${count} lan trong mang`);
    } else {
        return -1;
    }
}
let arr = [1, 2, 3, 4, 5, 65, 4, 3, 12341, 345, 132, 1, 2, 3, 2, 1];
console.log(isBelongToArrayAndCountCharacter("2"));
