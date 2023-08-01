// 1. Khai báo mảng một chiều có tên arrayInt
let arr = [1, 2, 3, 4, 5];
const a = 5;
// a.Nhập 5 giá trị số nguyên cho mảng từ bàn phím
// for (let i = 0; i < arr.length; i++){
//     n = +prompt(`Nhap phan tu thu ${i + 1}/${a} cua mang`);
//     arr.push(n);
// }
// b.Hiển thị giá trị các phần tử của mảng
console.log(arr);
arr.forEach((value, index) => {
    console.log(`Gia tri cua phan tu ${index + 1} la ${value}`);
})
// c.In các phần tử có giá trị chẵn và tính tổng
let arrSumOfEvenNumber = arr.reduce((sum, value) => {
    if (value % 2 == 0) {
        console.log(value);
        return sum + value;
    }
    return sum;
    // return value % 2 == 0 ? sum + value : sum;
})
console.log(arrSumOfEvenNumber);
// // d.In các phần tử có chỉ số lẻ và tính tổng
let arrSumOfOddNumber = arr.reduce((sum, value) => {
    if (value % 2 !== 0) {
        console.log(value);
        return sum + value;
    }
    return sum;
    // return value % 2 !== 0 ? sum + value : sum;
})
console.log(arrSumOfEvenNumber);
// e.In giá trị các phần tử trong mảng là số nguyên tố
function isNguyenTo(so) {
    for (i = 2; i <= Math.sqrt(so); i++) {
        if (so % i === 0) {
            return false;
        }
    }
    return true;
}

for (const value of arr) {
    if (isNguyenTo(value)) {
        console.log(value, " la so nguyen to");
    }
}

// f.In các phần tử có giá trị là max hoặc min
// let max = min = arrInt[0];
// for (const i in arrInt) {
//     if (arrInt[i] >= max) {
//         max = arrInt[i]
//     } else {
//         min = arrInt[i]
//     }
// }
// console.log(`Max: ${max}; Min: ${min}`);

// g.Sắp xếp mảng giảm dần và in giá trị các phần tử mảng sau khi sắp
// xếp(không và có sử dụng hàm sort)
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        let temp = arr[j];
        if (arr[j] < arr[j + 1]) {
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log(arr);

// co su dung sort
console.log(arr.sort((a, b) => b - a));

// h.Nhập vào một số nguyên và thống kê có bao nhiêu phần tử có giá 
// trị như vậy
let n = 4;
let arr1 = [];
for (let i = 0; i < arr.length; i++) {
    if (n == arr[i]) {
        arr1.push(n);
    }
}
console.log(arr1.length);

//cach 2:
// let n = Number(prompt("Nhap vao so nguyen"))
// let count = 0
// for (const value of arrInt) {
//     if (value == n) {
//         count++;
//     }
// }
// console.log(`${n} xuat hien ${count} lan`);


// let arr1 = arr.filter((value) => {
//     return value.includes('5');
// })
// console.log(arr1);

// 2. Khai báo mảng 2 chiều số nguyên arrInt
let arrInt = [];
// // a.Nhập giá trị các phần tử của mảng từ bàn phím
// let x = 4//+prompt("Nhap so phan tu cua mang");
// let y = 3//+prompt("Nhap so phan tu cua mang con")
// for (let i = 0; i < x; i++) {
//     arrInt[i] = [];
//     for (let j = 0; j < y; j++) {
//         arrInt[i][j] = +prompt(`Nhap phan tu thu ${j + 1}/${y} cua mang con ${i + 1}/${x}`)
//     }
// }
// console.log(arrInt);

// // b.In giá trị các phần tử của mảng
// for (let i in arrInt) {
//     console.log("row " + i);
//     for (let j in arrInt) {
//         console.log(arrInt[i][j]);
//     }
// }
// // c.In giá trị các phần tử nằm trên đường biên(Coi mảng 2 chiều là ma 
// // trận)
// for (let i = 0; i < x; i++) {
//     console.log(arrInt[0][i]);
//     console.log(arrInt[x-1][i]);
// }
// // console.log(arrInt.length);
// for (let j = 0; j < y; j++) {
//     console.log(arrInt[j][0]);
//     console.log(arrInt[j][y-1]);
// }
// d.In giá trị các phần tử nằm trên đường chéo chính và phụ
//duong cheo chinh
// function matrix(num) {
//     const n = num.length;
// console.log("Duong cheo chinh ");
//     for (let i = 0; i < arrInt.length; i++) {
//         console.log(arrInt[i][i]);
//     }
// console.log("Duong cheo phu ");
//     for (let i = 0; i < arrInt.length; i++) {
//         console.log(arrInt[i][n - 1 - i]);
//     }
// }
// const matrixNum = [
//     [1, 2, 3],
//     [2, 3, 4],
//     [3, 4, 5],
//     [4, 5, 6]
// ]
// matrix(matrixNum);
// //duong cheo phu

// // e.Sắp xếp mảng tăng dần theo dòng(không và có sử dụng hàm sort)

// function tangDan(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].sort((a, b) => a - b)
//     }
//     return arr
// }
// console.log(tangDan(matrixNum));


// 3. Tạo mảng có tên là styles có giá trị các phần tử là “Jazz”, “Blues”
let styles = ['Jazz', 'Blues'];
// a.Thêm phần tử “Rock - n - Roll” vào cuối mảng
styles.push('Rock - n - Roll');
console.log(styles);
// b.Thay thế phần tử nằm chính giữa mảng bằng “Classics” nếu mảng 
// có tổng số phần tử là lẻ
if (styles.length % 2 != 0) {
    styles.splice(1, 1, "Classics");
}
console.log(styles);
// c.Xóa phần tử đầu tiên của mảng và hiển thị mảng
styles.shift();
console.log(styles);
// d.Thêm phần tử “Rap” và “Reggae” vào đầu mảng và hiển thị
styles.unshift("Rap", "Reggae");
console.log(styles);

// 4. Khai báo mảng một chiều
// a.Cho phép người dùng nhập các giá trị của mảng bằng hàm prompt 
// và lưu trữ giá trị trong mảng cho đến khi người dùng nhập một giá
// trị không phải là số, một chuỗi trống hoặc nhấn “Cancel”
let arr2 = [];
while (true) {
    let n = Number(prompt("Nhap mot so"));
    if (n || n == 0) {
        arrInt.push(n);
    } else {
        break
    }
}

// b.Tính tổng các giá trị của mảng, in ra phần tử có giá trị max - min
//     (không và có sử dụng hàm Math.max và Math.min)
let sum = 0;
let min = max = arr2[0];
for (const value of arr2) {
    if (value > max) {
        max = value;
    }
    if (value < min) {
        min = value;
    }
    sum += value;
}
console.log(`Mang da nhap ${arr}`);
console.log(`Min: ${min}; Max: ${max}; Sum: ${sum}`);


// 5. Khai báo và khởi tạo mảng 1 chiều số nguyên.Nhập vào 2 số nguyên a,
//     b.Khởi tạo mảng gồm các phần tử của mảng số nguyên mà giá trị nằm 
// giữa a và b
let arr3 = [];
let b = 3;
let c = 7;
for (let i = b + 1; i < c; i++) {
    arr3.push(i);
}
console.log(arr3);