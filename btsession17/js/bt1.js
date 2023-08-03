// Viết một lớp các đối tượng hình chữ nhật lấy tên là Rectangle,
//  mỗi hình chữ nhật đều có những đặc tính sau:
// Có thông số chiều dài(int).

// Có thông số chiều rộng(int).

// Có tính năng tính diện tích.

// Có tính năng tính chu vi.

class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
        this.getArea = () => {
            return this.length * this.width;
        }
        this.getPerimeter = () => {
            return (this.length + this.width) * 2;
        }
    }
}

let rectangle1 = new Rectangle(10, 8);
console.log(rectangle1);
console.log(rectangle1.getArea());
console.log(rectangle1.getPerimeter());