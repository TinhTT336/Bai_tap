// let gio = document.getElementById("gio");
// let phut = document.getElementById("phut");
// let giay = document.getElementById("giay");

// let thoigian;
// //sau 1 giay thuc hien gan
// let idClock = setInterval(() => {
//     thoigian = new Date();
//     gio.innerHTML = thoigian.getHours();
//     phut.innerHTML = thoigian.getMinutes();
//     giay.innerHTML = thoigian.getSeconds();
// }, 1000)

// let idChao = setInterval(() => {
//     console.log("Xin chao");
// }, 3000)
// let idColor = setInterval(() => {
//     document.getElementById("anhnen1").style.backgroundColor = `#${Math.floor(Math.random() * (999))}`;
// }, 2000)

// function stopClock() {
//     clearInterval(idClock);
// }
// function stopChao() {
//     clearInterval(idChao);
// }
// function stopColor() {
//     clearInterval(idColor);
// }

// let gio2 = document.getElementById("gio2");
// let phut2 = document.getElementById("phut2");
// let giay2 = document.getElementById("giay2");
// let diem = document.getElementById("diem");
// let gioBanDau = 0;
// let phutBanDau = 1;
// let giayBanDau = 0;
// let diemBanDau = 0;

// gio2.innerHTML = gioBanDau;
// phut2.innerHTML = phutBanDau;
// giay2.innerHTML = giayBanDau;

// let id;
// id = setInterval(() => {

//     if (giayBanDau == 0) {
//         giayBanDau = 59;
//         phutBanDau--;
//     } else {
//         giayBanDau--;
//     }
//     if (giayBanDau == 0 & phutBanDau == 0 & gioBanDau == 0) {
//         clearInterval(id);
//     }

//     gio2.innerHTML = gioBanDau;
//     phut2.innerHTML = phutBanDau;
//     giay2.innerHTML = giayBanDau;
// }, 1000)

// let ga = document.getElementById("ga");
// ga.addEventListener("mouseover", function () {
//     ga.style.border = `1px solid blue`;
// })
// ga.addEventListener("mouseout", function () {
//     ga.style.border = `1px solid black`;
// })

// ga.addEventListener("click", function () {
//     diemBanDau += 10;
//     diem.innerHTML = diemBanDau;
//     ga.style.display = "none";
// })

// let kichThuoc;
// setInterval(() => {
//     kichThuoc = Math.floor(Math.random() * 100 + 100);
//     document.getElementById("ga").style.width = `${kichThuoc}px`;
//     document.getElementById("ga").style.height = `${kichThuoc}px`;
// }, 2000)

// ================================
// let gio = document.getElementById("gio2")
// let phut = document.getElementById("phut2")
// let giay = document.getElementById("giay2")
// let diem = document.getElementById("diem")

// let gioBanDau = 0;
// let phutBanDau = 1;
// let giayBanDau = 0;
// let diemBanDau = 0;

// gio.innerHTML = gioBanDau;
// phut.innerHTML = phutBanDau;
// giay.innerHTML = giayBanDau;

// let id

// id = setInterval(() => {

//     if (giayBanDau == 0) {
//         giayBanDau = 59
//         phutBanDau--
//     } else {
//         giayBanDau--
//     }

//     if (giayBanDau == 0 && phutBanDau == 0 && gioBanDau == 0) {
//         clearInterval(id)
//     }

//     gio.innerHTML = gioBanDau;
//     phut.innerHTML = phutBanDau;
//     giay.innerHTML = giayBanDau;
// }, 1000)



// let ga = document.getElementById("ga")

// ga.addEventListener("mouseover", () => {
//     ga.style.border = `1px solid blue`
// })

// ga.addEventListener("mouseout", () => {
//     ga.style.border = `1px solid black`
// })

// ga.addEventListener("click", () => {
//     diemBanDau += 10
//     diem.innerHTML = diemBanDau
//     ga.style.display = "none"
// })

// let kichThuoc
// setInterval(() => {
//     ga.style.display = "block"
// }, 3000)