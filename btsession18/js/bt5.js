// Phát triển một game đơn giản trong đó có một nhân vật di chuyển.
function Hero(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function () {
        return `<img width="${this.size}"
        height="${this.size}"
        src="${this.image}"
    style="top:${this.top}px;left:${this.left}px;position:absolute;">`
    }
    this.moveRight = () => {
        this.left += 40;
        console.log("move: " + this.left);
    }
}
let hero = new Hero("https://img3.thuthuatphanmem.vn/uploads/2019/10/10/hinh-anh-doraemon-chong-chong-tre_033147175.png", 20, 30, 200);

function start() {
    if (hero.left < window.innerWidth - hero.size) {
        hero.moveRight();
    }
    document.getElementById("game").innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}

start();