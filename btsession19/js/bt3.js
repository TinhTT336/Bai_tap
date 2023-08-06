// Bai 1: Tạo ra một đồng hồ số hiển thị thời gian: Giờ - Phút - Giây
// Yêu cầu đồng hồ chạy với thời gian thực
// Sau mỗi 5 phút sẽ bật một bài hát
// Sau mỗi 10 phút sẽ đổi ảnh nền

let hour = document.querySelector("#hour :first-child")
let minutes = document.querySelector("#minutes :first-child")
let seconds = document.querySelector("#seconds :first-child")
let time;
console.log(time);
// let idClock = setInterval(() => {
//     time = new Date();
//     hour.innerHTML = time.getHours();
//     minutes.innerHTML = time.getMinutes();
//     seconds.innerHTML = time.getSeconds();
// }, 1000)

// let iframe = document.querySelector("iframe");
// setInterval(() => {
//     iframe.style.visibility = "visible";
// }, 5000)

let clock = document.getElementById("clock")
let color = Math.floor(Math.random() * 999);
console.log(color);
setInterval(() => {
    clock.style.backgroundcolor = `linear-gradient(to right,#${color}), #${color}`;
}, 3000)

// Bai 2: Tạo ra một đồng hồ số hiển thị thời gian: Giờ - Phút - Giây
// Đồng hồ đếm ngược trong 10 phút
// Sau mỗi 10 giây sẽ xuất hiện 1 con gà trên màn hình(kích thước to hoặc nhỏ)
// Nếu hover vào con gà sẽ xuất hiện viền xanh
// Nếu click vào con gà sẽ được 10 điểm
let hour2 = document.querySelector("#hour2 :last-child")
let minutes2 = document.querySelector("#minutes2 :last-child")
let seconds2 = document.querySelector("#seconds2 :last-child")
let initialHours = 0;
let initialMinutes = 1;
let initialSeconds = 0;
hour2.innerHTML = initialHours;
minutes2.innerHTML = initialMinutes;
seconds2.innerHTML = initialSeconds;

let id = setInterval(() => {

    if (initialSeconds == 0) {
        initialSeconds = 59;
        initialMinutes--;
    } else {
        initialSeconds--;
    }
    if (hour2 == 0 && minutes2 == 0 && seconds2 == 0) {
        clearInterval(id);
    }
    hour2.innerHTML = initialHours;
    minutes2.innerHTML = initialMinutes;
    seconds2.innerHTML = initialSeconds;
}, 1000)

let chicken = document.querySelector("img");
let size = Math.floor(Math.random() * 199);
setInterval(() => {
    chicken.style.display = `block`;
    chicken.style.height = `${size}px`;
    chicken.style.width = `${size}px`;
}, 3000)
chicken.addEventListener("mouseover", () => {
    chicken.style.border = `2px solid green`;
})
chicken.addEventListener("mouseout", () => {
    chicken.style.border = `none`;
})

let initialGrade = 0;
chicken.addEventListener("click", () => {
    initialGrade += 10;
    document.getElementById("grade").innerHTML = initialGrade;
    chicken.style.display = `none`;
})


