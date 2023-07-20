let a = +prompt("Nhap a");
let b = +prompt("Nhap b");
let c = +prompt("Nhap c");

let max = a;
if (a > b && a > c) {
    console.log(`Max la ${a}`);
    if (b > c) {
        console.log(`Min la ${c}`);
    } else {
        console.log(`Min la ${b}`);
    }
} else {
    if (b < c) {
        console.log(`Max la ${c}`);
        if (b < a) {
            console.log(`Min la ${b}`);
        } else {
            console.log(`Min la ${a}`);
        }
    } else {
        console.log(`Max la ${b}`);
        if (a < c) {
            console.log(`Min la ${a}`);
        } else {
            console.log(`Min la ${c}`);
        }
    }
}