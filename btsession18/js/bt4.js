// Viết chương trình thể hiện sự tương tác giữa hai đối tượng: công tắc và bóng đèn

class ElectricLamp {
    // status = false;
    constructor() {
        this.turnOff = () => {
            this.status = false;
            console.log("Den da tat");
        }
        this.turnOn = () => {
            this.status = true;
            console.log("Den dang sang");
        }
    }
}

class SwitchButton {
    // status = false;
    electricLamp;
    constructor(status) {
        this.status = status;
        // this.lamp = electricLamp;
        this.switchButton = () => {
            if (status) {
                console.log("Cong tac: Bat");
            } else {
                console.log("Cong tac: Tat");
            }
        }
        this.connectToLamp = (electricLamp) => {
            this.electricLamp = electricLamp;
            console.log(`Den da ket noi voi cong tac`);
        }
        this.switchOff = () => {
            this.electricLamp.turnOff()
        }
        this.switchOn = () => {
            this.electricLamp.turnOn()
        }
    }
}


let newElectricLamp = new ElectricLamp();
let newSwitchButton = new SwitchButton(true);
newSwitchButton.switchButton();
newSwitchButton.connectToLamp(newElectricLamp);
newSwitchButton.switchOn();
newElectricLamp.turnOn();
newSwitchButton.switchOff();
newElectricLamp.turnOff();



function turnOnOff() {
    if (document.getElementById("imgOff").src.endsWith("https://i.postimg.cc/FRFMwKr0/off.jpg")) {
        document.getElementById("imgOff").src = ("https://i.postimg.cc/qvT4j43x/on.jpg");
    } else {
        document.getElementById("imgOff").src = ("https://i.postimg.cc/FRFMwKr0/off.jpg");
        document.getElementById("btn").innerText = "Tat den";
    }
}



