// Biểu mẫu đăng nhập gồm có: Email, Password.
// Kiểm tra sự hợp lệ thông tin người dùng nhập vào: Email không được bỏ trống, Email & Password trùng khớp.

// Có nút mắt xem để xem lại mật khẩu dưới dạng Text.

// Có lựa chọn ghi nhớ tài khoản trong 24 giờ.

// Chuyển trang chủ sau khi đăng nhập thành công.

// const rEmail = document.getElementById("email");
// const rPassword = document.getElementById("password");
// const errMess = document.getElementById("errMess");

// document.getElementById("login-form").addEventListener("submit", function (e) {
//     e.preventDefault();
//     const email = rEmail.value;
//     const password = rPassword.value;
//     const users = JSON.parse(localStorage.getItem("dataUser"));
//     console.log(dataUser);
//     const index = users.findIndex(user => user.rEmail == email);
//     if (index != 1) {
//         if (password != users.rPassword) {
//             errMess.innerHTML = "Mat khau khong dung";
//         } else {
//             errMess.innerHTML = "Dang nhap thanh cong";
//         }
//     } else {
//         errMess.innerHTML = "Khong ton tai email nay"
//     }
//     this.reset()

// })

const inputEmail = document.getElementById("email")
const inputPassword = document.getElementById("password")
const inputConfirmPassword = document.getElementById("confirmPassword")
const errMess = document.getElementById("errMess")

//
document.getElementById("register").addEventListener("submit", function (e) {
    e.preventDefault() //

    const email = inputEmail.value
    const password = inputPassword.value
    const confirmPassword = inputConfirmPassword.value

    if (password != confirmPassword) {
        errMess.innerHTML = "Xac nhan lai mat khau !"
        return
    } else {
        errMess.innerHTML = ""
    }

    // keo data ve
    const users = JSON.parse(localStorage.getItem("bt3_users"))
    // kiem tra xem trong cac user thi co ai trung email voi ng dang dang ky hay ko
    const index = users.findIndex(user => user.email == email)

    if (index != -1) {
        errMess.innerHTML = "Da co tk nay"
    } else {
        const user = {
            email, password
        }
        users.push(user)
        localStorage.setItem("bt3_users", JSON.stringify(users))
        errMess.innerHTML = "Dang Ky Thanh Cong !"
    }
    this.reset()
})



// Lấy các phần tử cần xử lý
// const loginForm = document.getElementById('login-form');
// const passwordInput = document.getElementById('password');
// const passwordToggle = document.getElementById('password-toggle');

// // Xử lý sự kiện khi form được gửi đi
// loginForm.addEventListener('submit', function (event) {
//     event.preventDefault(); // Ngăn chặn form gửi đi

//     const emailInput = document.getElementById('email');
//     const rememberMeCheckbox = document.getElementById('remember-me');

//     const email = emailInput.value;
//     const password = passwordInput.value;
//     const rememberMe = rememberMeCheckbox.checked;

//     // Kiểm tra sự hợp lệ của thông tin người dùng
//     if (!isValidEmail(email)) {
//         alert('Email không hợp lệ!');
//         return;
//     }

//     if (!isValidPassword(password)) {
//         alert('Mật khẩu không hợp lệ!');
//         return;
//     }

//     // Kiểm tra đăng nhập thành công và chuyển trang chủ
//     if (loginSuccessful(email, password)) {
//         if (rememberMe) {
//             // Lưu thông tin đăng nhập trong 24 giờ
//             setLoginCookie(email);
//         }
//         window.location.href = 'home.html';
//     } else {
//         alert('Đăng nhập không thành công!');
//     }
// });

// // Xử lý sự kiện khi nút mắt xem được nhấn
// passwordToggle.addEventListener('click', function () {
//     if (passwordInput.type === 'password') {
//         passwordInput.type = 'text';
//         passwordToggle.textContent = 'Ẩn mật khẩu';
//     } else {
//         passwordInput.type = 'password';
//         passwordToggle.textContent = 'Hiện mật khẩu';
//     }
// });

// // Hàm kiểm tra sự hợp lệ của email
// function isValidEmail(email) {
//     // Sử dụng biểu thức chính quy để kiểm tra định dạng email
//     const emailRegex = /^\S+@\S+\.\S+$/;
//     return emailRegex.test(email);
// }

// // Hàm kiểm tra sự hợp lệ của mật khẩu
// function isValidPassword(password) {
//     // Kiểm tra mật khẩu không được bỏ trống
//     return password !== '';
// }

// // Hàm kiểm tra đăng nhập thành công
// function loginSuccessful(email, password) {
//     // Thực hiện xác thực tài khoản với thông tin cần thiết
//     // Trong ví dụ này, mật khẩu cho email 'abc@example.com' là 'password'
//     if (email === 'abc@example.com' && password === 'password') {
//         return true;
//     }
//     return false;
// }

// // Hàm lưu thông tin đăng nhập vào cookie trong 24 giờ
// function setLoginCookie(email) {
//     // Code để lưu thông tin đăng nhập vào cookie
// }
