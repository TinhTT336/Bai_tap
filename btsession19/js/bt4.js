let imageThumbs = document.getElementById("image-thumbs");
let thumb;
let images = [];
for (let i = 1; i <= 6; i++) {
    thumb = document.createElement("img");
    thumb.src = "image/anh" + i + ".jpg";
    thumb.alt = "anh " + i;
    thumb.classList.add("thumb");
    imageThumbs.appendChild(thumb);
    images.push(thumb)
    let currentImage = document.getElementById("current-image");
    thumb.addEventListener("click", function () {
        currentImage.src = this.src;
        currentImage.alt = this.alt;
    });
}
console.log(images);


// Tạo ra một Album ảnh theo ý thích:
// Cho phép xem ảnh tiếp theo
// Cho phép xem ảnh trước đó
// Cho phép phóng ảnh lên trang giữa
// Tự động đổi ảnh sau mỗi 30 giây


// let previousSlide = document.querySelector("#image-thumbs::before ");
// let nextSlide = document.querySelector("#image-thumbs::after ");
// let num = 0;
// function next() {
//     let slider = document.getElementById("thumb");
//     num++;
//     if (num >= images.length) {
//         num = 0;
//     }
//     slider.src = images[num];
// }

// function prev() {
//     let slider = document.getElementById("thumb");
//     num--;
//     if (num < 0) {
//         num = images.length - 1;
//     }
//     slider.src = images[num];
// }
// previousSlide.addEventListener("click", () => {
//     prev();
// })


