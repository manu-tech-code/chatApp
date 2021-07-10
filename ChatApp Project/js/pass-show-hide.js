const showPass = document.querySelector(".form input[type='password']");
const hidePass = document.querySelector(".form .show-pass")
const togglebtn = document.querySelector(".form .field .show-pass")

togglebtn.onclick = ()=> {
    if (showPass.type == "password") {
        showPass.type = "text";
        hidePass.classList.add("hide-pass")
    }
    else {
        showPass.type = "password";
        hidePass.classList.remove("hide-pass")
    }
}