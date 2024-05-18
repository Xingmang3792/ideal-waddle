// script.js
function validatePassword() {
    var inputPassword = document.getElementById("passwordInput").value;
    var correctPassword = "101231"; // 将此处替换为你的密码

    if (inputPassword === correctPassword) {
        document.getElementById("realContent").style.display = "block";
    } else {
        alert("密码错误，请重试。");
    }
}
