// Viết một lớp các đối tượng điện thoại lấy tên là Mobile, 
// mỗi một chiếc mobile phone khi được tạo ra sẽ mang những đặc điểm sau:
// Có một thông số về trạng thái pin tính bằng đơn vị số nguyên(tối đa 100 đv).
// Có một vùng nhớ dùng để lưu tin nhắn đang soạn thảo.
// Có một vùng nhớ dùng để lưu tin nhắn trong hộp thư đến.
// Có một vùng nhớ dùng để lưu tin nhắn đã gửi.
// Có chức năng kiểm tra trạng thái điện thoại bật hay tắt.
// Có chức năng bật và tắt điện thoại.
// Có chức năng xạc pin điện thoại.
// Có chức năng soạn tin nhắn.
// Có chức năng nhận tin nhắn từ một chiếc mobile khác.
// Có chức năng gửi tin nhắn tới một chiếc mobile khác.
// Có chức năng xem tin trong hộp thư đến.
// Có chức năng xem tin đã gửi.
// Sau mỗi lần sử dụng một chức năng, năng lượng pin sẽ giảm đi một đơn vị.
// Các chức năng không thể hoạt động nếu điện thoại chưa bật.
// Khởi tạo các đối tượng điện thoại và thực hiện kịch bản sau:
// Có một chiếc điện thoại nokia và một chiếc iphone
// Chiếc điện thoại nokia soạn tin nhắn với nội dung bất kỳ và gửi cho chiếc iphone Chiếc iphone kiểm tra inbox và hiển thị tin đó.

class Mobile {
    pin;
    typingMessage = "";
    inbox = [];
    outbox = [];
    status;
    constructor(pin, status) {
        if (pin <= 0 || pin > 100) {
            this.pin = 80
        } else {
            this.pin = pin;
        }
        this.status = status;
        this.checkOnOrOff = () => {
            return this.status
        }
        this.onOffMobile = (value) => {
            this.status = value;
        }

        this.chargePin = () => {
            if (this.pin == 100) {
                console.log("Pin da day");
            } else {
                this.pin++;
            }
        }
        this.typingMessages = (value) => {
            if (this.status == false) {
                return;
            }
            this.typingMessage = value;
            this.pin--;
        }
        this.receivingMessage = (value) => {
            if (this.status == false) {
                return;
            }
            this.inbox.push(value);
            this.pin--;
        }
        this.sendingMessage = (phone) => {
            if (this.status == false) {
                return;
            }
            this.outbox.push(this.typingMessage);
            phone.inbox.push(this.typingMessage);
            this.typingMessage = '';
            this.pin--;
        }
        this.seenInbox = () => {
            if (this.status == false) {
                return;
            }
            this.pin--;
            return this.inbox

        }
        this.seenOutbox = (phone) => {
            if (this.status == false) {
                return;
            }
            console.log(this.inbox);
            this.pin--;
        }
    }
}
let nokia = new Mobile(80, true);
let iphone = new Mobile(60, true);

nokia.typingMessages("xin chao")
nokia.sendingMessage(iphone)


// console.log();
console.log(iphone.seenInbox());

