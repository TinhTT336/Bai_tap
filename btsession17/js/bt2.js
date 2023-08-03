// Viết một lớp các đối tượng mô tả loại dữ liệu nhiệt độ lấy tên là Temperature.
// Các thông số mô tả cho nhiệt độ gồm:
// Trị số tính theo đơn vị độ C(giá trị nhỏ nhất - 273 độ)

// Có tính năng chuyển đổi từ độ C sang độ F.

// Có tính năng chuyển đổi từ độ C sang độ Kenvin.

// Sử dụng lớp vừa định nghĩa để xây dựng một chương trình JavaScript với kịch bản như sau:
// Khởi tạo một đối tượng Temperature.

// Gán giá trị độ C cho đối tượng ở nhiệt độ 25 độ.

// Hiển thị ra màn hình nhiệt độ F và độ Kenvin tương ứng.

class Temperature {
    // celsius = -273;
    constructor(celsius) {
        this.celsius = celsius;
        this.changeF = () => {
            if (celsius >= -273) {
                return (celsius * 1.8) + 32;
            }
        }
        this.changeK = () => {
            if (celsius >= -273) {
                return celsius + 273.15;
            }
        }
    }
}
let temperature1 = new Temperature(37);
console.log(temperature1.changeF());
console.log(temperature1.changeK());