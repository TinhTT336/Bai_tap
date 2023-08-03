// Viết một lớp mô tả đối tượng chuột lấy tên là Rat, với những đặc điểm được mô tả như sau:
// Có thuộc tính tên.
// Có thuộc tính khối lượng.
// Có thuộc tính tốc độ.
// Có thuộc tính mô tả trạng thái: sống, chết.
// Có khả năng thực hiện hành vi kêu(ví dụ “chít, chít”)
// Viết một lớp mô tả đối tượng mèo lấy tên là Cat với những đặc điểm được mô tả như sau:
// Có thuộc tính tên.
// Có thuộc tính khối lượng.
// Có thuộc tính tốc độ di chuyển tối đa.
// Có khả năng thực hiện hành vi kêu(ví dụ: “meo meo”).
// Có khả năng bắt chuột, mỗi lần chỉ bắt được một con.Chỉ bắt được chuột khi tốc độ của mèo lớn hơn tốc độ của chuột.
// Có khả năng ăn thịt chuột.Chỉ ăn chuột còn sống.Khi ăn, khối lượng của mèo tăng lên tương ứng.
// Viết một đoạn chương trình mô phỏng lại quá trình mèo bắt chuột và ăn chuột dựa trên các lớp vừa mô tả trên.
class Rat {
    ratAlive = true;
    constructor(name, weight, speed) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.squealChit = () => {
            console.log(`Chuot ${this.name} keu chit chit`);
        }
    }
}
class Cat {
    constructor(name, weight, speed) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.meaw = () => {
            console.log(`Meo ${this.name} keu meo meo`);
        }
        this.catchRat = (rat) => {
            if (this.speed > rat.speed) {
                console.log(`Meo ${this.name} bat duoc chuot ${rat.name}`);
            } else {
                console.log(`Meo ${this.name} khong bat duoc chuot ${rat.name}`);
            }
        }
        this.eatRat = (rat) => {
            if (rat.ratAlive) {
                console.log(`Meo ${this.name} an duoc chuot ${rat.name}`);
                this.weight += rat.weight;
                console.log(`Can nang cua meo ${this.name} sau khi an chuot ${rat.name} la ${this.weight} kg`);
            } else {
                console.log(`Meo ${this.name}  khong an duoc chuot ${rat.name}`);

            }
        }
    }
}
let newRat = new Rat('Annie', 1, 20);
let newCat = new Cat('Kitty', 5, 30);
newCat.catchRat(newRat);
newCat.eatRat(newRat);