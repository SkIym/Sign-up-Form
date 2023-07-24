const pass = document.getElementById("password");
const confirm_pass = document.getElementById("confirm");

function verifyPassword() {
    let newPass = pass.value;
    let confirmPass = confirm_pass.value;

    console.log(newPass, confirmPass)
    if (newPass === confirmPass && newPass.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])([A-Za-z\d]{8,})$/)) {
        pass.style.borderBottom = "1px solid green";
        confirm_pass.style.borderBottom = "1px solid green";
    }
    else {
        pass.style.borderBottom = "1px solid red";
        confirm_pass.style.borderBottom = "1px solid red";
    }

}

pass.addEventListener("input", verifyPassword);
confirm_pass.addEventListener("input", verifyPassword);
