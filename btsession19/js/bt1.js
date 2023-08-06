let hidebutton = document.getElementById("hide");
let showbutton = document.getElementById("show");
let text = document.getElementById("txt");
hidebutton.onclick = function () {
    text.style.display = "none";
}
showbutton.onclick = function () {
    text.style.display = "block";
}

// Khi click vào nút Open Modal, một hộp chứa dòng text “Some text in the Modal” sẽ được hiển thị ra và màn hình xung quanh phải tối đi
// Khi click vào nút “x” hoặc màn hình tối xung quanh, Modal ở trên phải ẩn đi
let body = document.querySelector("body");
let divtwo = document.getElementById("two");
let btn = document.getElementById("open");
let box = document.getElementById("box");
btn.addEventListener("click", function () {
    // alert("Some text in the Modal..")
    divtwo.style.backgroundColor = "gray";
    box.style.visibility = "visible";
    box.style.backgroundColor = "#fff";

})
let btn1 = document.getElementById("closex");
btn1.addEventListener('click', function () {
    divtwo.style.backgroundColor = "#fff";
    box.style.visibility = "hidden";
})

// 3.Khi hơ chuột đi qua ô vuông nào, background phải đổi màu sắc theo ô vuông đó
let square1 = document.querySelector("#three1 :nth-child(1)");
let square2 = document.querySelector("#three1 :nth-child(2)");
let square3 = document.querySelector("#three1 :nth-child(3)");
let three = document.getElementById("three");
square1.addEventListener("mouseover", function () {
    three.style.backgroundColor = "orange";
})
square1.addEventListener("mouseout", function () {
    three.style.backgroundColor = "#green";
})
square2.addEventListener("mouseover", function () {
    three.style.backgroundColor = "blue";
})
square2.addEventListener("mouseout", function () {
    three.style.backgroundColor = "#green";
})
square3.addEventListener("mouseover", function () {
    three.style.backgroundColor = "pink";
})
square3.addEventListener("mouseout", function () {
    three.style.backgroundColor = "#green";
})

// 4.Khi hơ chuột đi qua dòng text “Hover over me”, một Tooltip sẽ được hiện ra
// Khi hơ chuột ra ngoài dòng text “Hover over me”, Tooltip sẽ bien mat
let p2 = document.getElementById("p2");
let span = document.querySelector("#four span");
p2.addEventListener("mouseover", function () {
    span.style.visibility = "visible";
})
p2.addEventListener("mouseout", function () {
    span.style.visibility = "hidden";
})

// 5.Khi click vào button “Toggle dark mode”, toàn bộ giao diện sẽ được đổi sang chế độ tối(background, text)
// Khi click vào button “Toggle dark mode”, một lần nữa, giao diện tối sẽ bị tắt đi và quay trở lại bình thường
let five = document.getElementById("five");
let btn5 = document.getElementById("btn5");
btn5.addEventListener('click', function () {
    btn5.style.color = "#fff";
    btn5.style.backgroundColor = "#000";
    five.style.color = "#fff";
    five.style.backgroundColor = "#000";
})
btn5.addEventListener('dblclick', function () {
    btn5.style.color = "#000";
    btn5.style.backgroundColor = "#fff";
    five.style.color = "#000";
    five.style.backgroundColor = "#fff";
})