let month = +prompt("Nhap 1 thang");
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        document.write(`Thang ${month} co 31 ngay`);
        break;
    case 2:
        document.write(`Thang 2 co 28 ngay hoac 29 ngay`);
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        document.write(`Thang ${month} co 30 ngay`);
        break;
    default:
        document.write("Khong co thang nay");
}