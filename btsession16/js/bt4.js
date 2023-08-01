// 1. Viết function in ra câu “Xin chào Rikkei Academy”
// function alertMessage() {
//     console.log("Xin chào Rikkei Academy");
// }
// alertMessage();

// 2. Viết function tính bình phương của một số
function squareANumber(num) {
    return Math.pow(num, 2);
}
console.log(squareANumber(10));

// 3. Viết function tính thế kỷ của một năm nhập vào từ bàn phím.Biết thế kỷ 
// thứ nhất tính từ năm 1 đến 100
// let year = +prompt("Nhap nam can kiem tra");
function tinhTheKy(year) {
    if (year % 100 === 0) {
        console.log(`Nam ${year} thuoc the ky ${year / 100}`);
    } else {
        console.log(`Nam ${year} thuoc the ky ${Math.ceil(year / 100)}`);
    }
}
tinhTheKy(2001);
// 4. Cho chuỗi dài hơn 15 ký tự, viết function cắt chuỗi, lấy ra 10 ký tự đầu 
// tiên và thêm vào dấu “…” ở cuối chuỗi
let str = "Hoang hon thang tam ";
function cutString(str) {
    if (str.length < 15) {
        console.log(str);
    } else {
        str = str.slice(0, 9);
        console.log(str + "...");
    }

}
cutString(str);

// 5. Viết function chuẩn hóa một từ - chỉ viết hoa chữ cái đầu tiên.Ví dụ:
// “rIkKEi” sau khi chuẩn hóa thành “Rikkei”
// let chuoi = prompt("Nhap chuoi can chuan hoa")
// function chuanHoa(chuoi) {
//     let chuoiRong = ""
//     for (i = 0; i < chuoi.length; i++) {
//         if (i == 0) {
//             chuoiRong += chuoi[i].toUpperCase()
//         } else if (chuoi[i] == " " && chuoi[i + 1] != " ") {
//             chuoiRong += " "
//             chuoiRong += chuoi[++i].toUpperCase()
//             i++;
//         } else {
//             chuoiRong += chuoi[i].toLowerCase()
//         }
//     }
//     return chuoiRong
// }
// const value = chuanHoa(chuoi)
// console.log(value);

//cach 2:
// let string = "hoang hon thang tam";//+prompt("Nhap chuoi can chuan hoa");
// function capitalizeFirstCharacter(arr) {
//     let array = str.toLowerCase().split(" ");
//     console.log(array);
//     for (let i = 0; i < arr.length; i++) {
//         let word = array[i].split("");
//         console.log(word);
//         word[0] = word[0].toUpperCase();
//         array[i] = word.join("");
//     } return array.join('');
// }
// console.log(capitalizeFirstCharacter(string));

// 6. Viết function trả ra giá trị lớn nhất trong một mảng số
let arr = [3, 6, 9, 34, 67, 45]
console.log(Math.max(...arr));

// 7. Viết function kiểm tra số chẵn - lẻ, nguyên tố, hoàn hảo
function checkNumber(number) {
    if (number % 2 == 0) {
        if (isPrimeNumber(number)) {
            console.log(number + ": so chan va so nguyen to");
        } else if (isPerfectNumber(number)) {
            (isPerfectNumber(6));
            console.log(number + ": so chan va so hoan hao");
        } else {
            console.log(number + ": so chan");
        }
    } else {
        if (isPrimeNumber(number)) {
            console.log(number + ": so le va so nguyen to");
        } else if (isPerfectNumber(number)) {
            (isPerfectNumber(6));
            console.log(number + ": so le va so hoan hao");
        } else {
            console.log(number + ": so le");
        }
    }
}
function isPrimeNumber(number) {
    let check = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    if (check) {
        // console.log(number + ": so nguyen to");
        return true;
    } else {
        // console.log(number + ": khong phai so nguyen to");
        return false;
    }
}

function isPerfectNumber(number) {
    let sum = 0;
    for (let j = 0; j <= number / 2; j++) {
        if (number % j == 0) {
            sum += j;
        }
    }
    if (sum == number) {
        // console.log(number + ": so hoan hao");
        return true
    } else {
        // console.log(number + ": khong phai so hoan hao");
        return false
    }
}

checkNumber(6)
checkNumber(11)
checkNumber(15)
checkNumber(17)


// for (const value of arr) {
//     if (isNguyenTo(value)) {
//         console.log(value, " la so nguyen to");
//     }
// }

// 8. Viết function trả ra trung bình cộng của một mảng số
function averageOfAArray(array) {
    let sum = 0;
    for (const value of array) {
        sum += value;
    } return sum / array.length;
}
let array1 = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(averageOfAArray(array1));
// 9. Nhập vào một vào một số n, in ra n số nguyên tố tăng dần
// let n = 10; //+prompt("Nhap vao 1 so n bat ky");
// function printPrimeNumber(n) {
//     let count = 0;
//     let number = 2
//     while (true) {
//         if (count == n) {
//             break;
//         }
//         let check = true;
//         for (let i = 2; i < number; i++) {
//             if (number % i == 0) {
//                 check = false;
//                 break;
//             }
//         }

//         if (check) {    
//             console.log(number);
//             count++;
//         }
//         number++;
//     }
// }
// printPrimeNumber(10)
