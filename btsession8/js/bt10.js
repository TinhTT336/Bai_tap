let date = +prompt("Nhap vao ngay sinh");
let month = +prompt("Nhap vao thang sinh");
switch (month) {
    case 1:
        if (date < 20) {
            document.write("Cung Ma Ket");
        } else {
            document.write("Cung Bao Binh");
        }
        break;
    case 2:
        if (date < 19) {
            document.write("Cung Bao Binh");
        } else {
            document.write("Cung Song Ngu");
        }
        break;
    case 3:
        if (date < 21) {
            document.write("Cung Song Ngu");
        } else {
            document.write("Cung Bach Duong");
        }
        break;
    case 4:
        if (date < 20) {
            document.write("Cung Bach Duong");
        } else {
            document.write("Cung Kim Nguu");
        }
        break;
    case 5:
        if (date < 21) {
            document.write("Cung Kim Nguu");
        } else {
            document.write("Cung Song Tu");
        }
        break;
    case 6:
        if (date < 22) {
            document.write("Cung Song Tu");
        } else {
            document.write("Cung Cu Giai");
        }
        break;
    case 7:
        if (date < 23) {
            document.write("Cung Cu Giai");
        } else {
            document.write("Cung Su Tu");
        }
        break;
    case 8:
        if (date < 23) {
            document.write("Cung Su Tu");
        } else {
            document.write("Cung Xu Nu");
        }
        break;
    case 9:
        if (date < 23) {
            document.write("Cung Xu Nu");
        } else {
            document.write("Cung Thien Binh");
        }
        break;
    case 10:
        if (date < 24) {
            document.write("Cung Thien Binh");
        } else {
            document.write("Cung Ho Cap");
        }
        break;
    case 11:
        if (date < 22) {
            document.write("Cung Ho Cap");
        } else {
            document.write("Cung Nhan Ma");
        }
        break;
    case 12:
        if (date < 22) {
            document.write("Cung Nhan Ma");
        } else {
            document.write("Cung Ma Ket");
        }
        break;
    // default:
    //     document.write("Nhap sai ngay thang");
}
