// Viết một ứng dụng nhỏ mô phỏng câu chuyện Adam và Eva.Adam và Eva là những con người đầu tiên,
// trong vườn địa đàng có một cây táo ra những quả táo chín mọng.Adam và Eva lấy một quả táo và ăn,
// mỗi người ăn một miếng táo cho đến khi hết!
//  Viết một lớp lấy tên là Apple, với mỗi quả táo đều có những đặc điểm sau đây:
// Có khối lượng.
// Khi tạo ra quả táo đã có khối lượng mặc định là 10 đv.
// Các đối tượng khác có thể biết được khối lượng của quả táo, nhưng không thay đổi được giá trị này.
// Viết một lớp có tên là Human, với mỗi một người được tạo ra sẽ mang đầy đủ những đặc tính sau:
// Có tên
// Có giới tính
// Có cân nặng
// Biết nói một chuỗi các từ. (bằng cách in ra màn hình console chuỗi đó)
// Biết ăn táo.Mỗi lần ăn, chỉ ăn một miếng táo(1đv).Khi ăn táo, khối lượng của người đó sẽ tăng lên một đv và khối lượng quả táo sẽ giảm đi một đv.Chỉ ăn táo khi khối lượng của quả táo lớn hơn 0.
// Biết kiểm tra khối lượng của quả táo.
// Các đối tượng khác có thể biết được tên, giới tính và cân nặng của đối tượng người.

class Apple {
    constructor(weight) {
        this.weight = 10;

        this.getWeight = () => {
            return this.weight;
        }
        this.setWeight = () => {
            return this.weight;
        }
    }
}
class Human {
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
        this.speakLanguage = (value) => {
            console.log(value);
        }
        this.eatApple = (apple) => {
            if (apple.weight > 0) {
                ++this.weight;
                --apple.weight;
                return ` ${apple.weight}, ${this.weight} `;
            }
        }
        this.checkWeightOfApple = (apple) => {
            return apple.weight;
        }
        this.getName = () => {
            return this.name;
        }
        this.getWeight = () => {
            return this.weight;
        }
        this.getGender = () => {
            return this.gender;
        }
    }
}
let apple = new Apple();
let human1 = new Human("Adam", "male", 70);
let human2 = new Human("Eva", "female", 48);
console.log(apple.getWeight());
console.log(apple.setWeight());
human1.speakLanguage("Hi, Eva");
human2.speakLanguage("Hi, Adam");
console.log(human1.checkWeightOfApple(apple));
console.log(human1.getName());
console.log(human2.getName());
console.log(human2.getWeight());
console.log(human2.getWeight());
console.log(human1.getGender());
console.log(human2.getGender());
console.log(human1.eatApple(apple));
console.log(human2.eatApple(apple));