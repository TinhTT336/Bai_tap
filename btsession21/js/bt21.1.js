// // // Kiểm tra sự hợp lệ thông tin người dùng nhập vào:
// // //  Email không được bỏ trống, mật khẩu không được bỏ trống, xác nhận mật khẩu trùng khớp.
// // // Kiểm tra sự tồn tại của email đăng ký.
// // // Lưu tài khoản vừa tạo thành công.

const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const inputConfirmpassword = document.getElementById("confirmpassword");
const errMess = document.getElementById("errMess");

document.getElementById("register").addEventListener("click", function (e) {
    e.preventDefault();
    const rEmail = inputEmail.value;
    const rPassword = inputPassword.value;
    const rConfirmPassword = inputConfirmpassword.value;
    if (rPassword != rConfirmPassword) {
        errMess.innerHTML = "Mat khau khong khop nhau";
        return;
    } else {
        errMess.innerHTML = "";
    }

    const dataUser = JSON.parse(localStorage.getItem("dataUser"));
    console.log(dataUser);
    // let index = dataUser.findIndex(user => user.email == rEmail);
    const index = dataUser.findIndex((user) => { return user.email == rEmail })

    if (index != -1) {
        errMess.innerHTML = "Da co TK nay";
    } else {
        const user = { rEmail, rPassword };
        dataUser.push(user);
        localStorage.setItem("dataUser", JSON.stringify(user));
        errMess.innerHTML = "Dang ky thanh cong"
    }
    this.reset();
})



// // Ví dụ sử dụng

// // const email = 'example@example.com';
// // const password = '123456';
// // const confirmPassword = '123456';


// var inputs = document.forms['register'].getElementsByTagName('input');
// var run_onchange = false;
// function valid() {
//     var errors = false;
//     var reg_mail = /^[A-Za-z0-9]+([_\.\-]?[A-Za-z0-9])*@[A-Za-z0-9]+([\.\-]?[A-Za-z0-9]+)*(\.[A-Za-z]+)+$/;
//     for (var i = 0; i < inputs.length; i++) {
//         var value = inputs[i].value;
//         var id = inputs[i].getAttribute('id');

//         // Tạo phần tử span lưu thông tin lỗi
//         var span = document.createElement('span');
//         // Nếu span đã tồn tại thì remove
//         var p = inputs[i].parentNode;
//         if (p.lastChild.nodeName == 'SPAN') { p.removeChild(p.lastChild); }

//         // Kiểm tra rỗng
//         if (value == '') {
//             span.innerHTML = 'Thông tin được yêu cầu';
//         } else {
//             // Kiểm tra các trường hợp khác
//             if (id == 'email') {
//                 if (reg_mail.test(value) == false) { span.innerHTML = 'Email không hợp lệ (ví dụ: abc@gmail.com)'; }
//                 var email = value;
//             }
//             if (id == 'confirm_email' && value != email) { span.innerHTML = 'Email nhập lại chưa đúng'; }
//             // Kiểm tra password
//             if (id == 'password') {
//                 if (value.length < 6) { span.innerHTML = 'Password phải từ 6 ký tự'; }
//                 var pass = value;
//             }
//             // Kiểm tra password nhập lại
//             if (id == 'confirm_pass' && value != pass) { span.innerHTML = 'Password nhập lại chưa đúng'; }
//             // Kiểm tra số điện thoại
//             if (id == 'phone' && isNaN(value) == true) { span.innerHTML = 'Số điện thoại phải là kiểu số'; }
//         }

//         // Nếu có lỗi thì chèn span vào hồ sơ, chạy onchange, submit return false, highlight border
//         if (span.innerHTML != '') {
//             inputs[i].parentNode.appendChild(span);
//             errors = true;
//             run_onchange = true;
//             inputs[i].style.border = '1px solid #c6807b';
//             inputs[i].style.background = '#fffcf9';
//         }
//     }// end for

//     if (errors == false) { alert('Đăng ký thành công'); }
//     return !errors;
// }// end valid()

// // Chạy hàm kiểm tra valid()
// var register = document.getElementById('submit');
// register.onclick = function () {
//     return valid();
// }

// // Kiểm tra lỗi với sự kiện onchange -> gọi lại hàm valid()
// for (var i = 0; i < inputs.length; i++) {
//     var id = inputs[i].getAttribute('id');
//     inputs[i].onchange = function () {
//         if (run_onchange == true) {
//             this.style.border = '1px solid #999';
//             this.style.background = '#fff';
//             valid();
//         }
//     }
// }// end for