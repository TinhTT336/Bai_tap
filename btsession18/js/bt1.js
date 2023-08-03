// Bài 2: Viết chương trình tạo đối tượng student có cặp key và value tương ứng như dưới đây,
//     sau đó khởi tạo đối tượng newStudent có các thuộc tính tương tự(value tự điền).
//     Sau đó tạo mảng “students” để chứa chúng.
// Cuối cùng truy xuất các thuộc tính của đối tượng “newStudent” sau khi thêm vào mảng “students”
let student = {
    id: 1,
    name: "Nguyen Van A",
    gender: "nam",
    age: 18,
    mark: 8,
}
let newStudent = {
    id: 2,
    name: "Nguyen Van B",
    gender: "nam",
    age: 18,
    mark: 9,
}
let students = [];
students.push(student);
students.push(newStudent);
console.log(students);

console.log(students[1].age);
console.log(students[1].id);
console.log(students[1].name);
console.log(students[1].gender);
console.log(students[1].mark);



// Bài 3: Với dữ liệu từ bài 2 hãy tìm ra học sinh có điểm trung bình cao hơn và
//     in ra toàn bộ thông tin của học sinh đó


// console.log(students[1].mark);
if (students[0].mark > students[1].mark) {
    console.log(students[0]);
} else {
    console.log(students[1]);
}
let maxOfMark = Math.max(student.mark, newStudent.mark);



// Bài 4: Tạo thêm đối tượng “newStudent2” với các thuộc tính tương tự như đối tượng “newStudent” với value bất kỳ.
// Sau đó thêm vào mảng “students” (ở bài 2). Tính điểm trung bình của các học sinh trong mảng students trên.
// Nếu trên 7.5 thì đánh giá lớp khá, từ 5 đến 7.5 thì đánh giá lớp trung bình, dưới 5 là lớp yếu
let newStudent2 = {
    id: 3,
    name: "Ho Thi C",
    gender: "nu",
    age: 18,
    mark: 7,
}
students.push(newStudent2);
console.log(students);
let sum = 0
for (let i = 0; i < students.length; i++) {
    sum += students[i].mark;
}
let average = sum / students.length;
// console.log(average);
if (average >= 7.5) {
    console.log("Lop kha");
} else if (average > 5) {
    console.log("Lop trung binh");
} else {
    console.log("Lop yeu");
}
