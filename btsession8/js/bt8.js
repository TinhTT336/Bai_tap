let a = +prompt("Nhap a");
let b = +prompt("Nhap b");
let calculator = prompt("Nhap vao cac phep tinh + , -, * ,/");
switch (calculator) {
    case (calculator = "+"):
        alert(a + b);
        break;
    case (calculator = "-"):
        alert(a - b);
        break;
    case (calculator = "*"):
        alert(a * b);
        break;
    case (calculator = "/"):
        alert(a / b);
        break;
    default:
        alert("khong co phep tinh nay");
}