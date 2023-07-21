let a = +prompt("Moi ban nhap vao so a");
let b = +prompt("Moi ban nhap vao so b");
let calculator = prompt("Nhap vao cac phep tinh + , -, * ,/");
let rs;
switch (calculator) {
    case "+":
        rs = a + b;
        break;
    case "-":
        rs = a - b;
        break;
    case "*":
        rs = a * b;
        break;
    case "/": {
        if (b != 0) {
            rs = a / b
        } else {
            alert("Khong thuc hien duoc phep tinh");
        }
    } break;
} alert(`ket qua cua phep tinh tren: a ${calculator} b = ${rs}`);