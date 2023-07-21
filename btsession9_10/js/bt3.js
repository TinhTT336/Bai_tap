//calculate tip
function calculateTip() {
    let bill = document.getElementById("bill").value;
    let service = document.getElementById("service").value;
    let people = document.getElementById("people").value;
}
if (bill === "" || service == 0) {
    alert("Please enter values");
    return;
}
if (people === "" || people <= 1) {
    people = 1;
    document.getElementById("each").style.display = "none";
} else {
    // document.getElementById("each").style.display = "block";

    //round to two decimal places
    let total = (bill * service) / people;
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    document.getElementById("tip").innerHTML = "Tip: " + total;
    // document.getElementById("calculate").onclick = function () {
    //     calculateTip();
    // }
}


