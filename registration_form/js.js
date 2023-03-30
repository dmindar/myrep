let input = document.querySelector("#phone");
window.intlTelInput(input, {});

const inputPass = document.
getElementById("form-pass");

const iconPass = document.
getElementById("pass-icon");

iconPass.addEventListener("click", () => {
    if (inputPass.getAttribute("type") ===
        "password") {
        inputPass.setAttribute("type", "text");
    } else {
        inputPass.setAttribute("type",
            "password");
    }
});

const inputConf = document.
getElementById("conf-pass");
const iconConf = document.
getElementById("confirm-pass-icon");

iconConf.addEventListener("click", () => {
    if (inputConf.getAttribute("type") ===
        "password") {
        inputConf.setAttribute("type", "text");
    } else {
        inputConf.setAttribute("type",
            "password");
    }
})




let form = document.getElementById("form"),
    formInputs = document.querySelectorAll(".js-input"),
    inputName = document.getElementById("username"),
    inputLogin = document.getElementById("login"),
    inputEmail = document.getElementById("email"),
    inputPhone = document.getElementById("phone"),
    inputCheckbox = document.getElementById("clickCheckBox");
inputPassword = document.getElementById("form-pass");
inputConfPass = document.getElementById("conf-pass");





function validateName(name) {
    let re = /[A-Z][a-z]/;
    return re.test(String(name));
}

function validateLogin(login) {
    let re = /^[A-Za-z][A-Za-z0-9_]{4,14}$/;
    return re.test(String(login));

}

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    let re = /^[0-9\-\+]{9,15}$/;
    return re.test(String(phone));
}


function validatePass(pass) {
    let re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    return re.test(String(pass));
}


form.onsubmit = function () {
    let nameVal = inputName.value,
        loginVal = inputLogin.value,
        passVal = inputPassword.value,
        emailVal = inputEmail.value,
        phoneVal = inputPhone.value,
        emptyInput = Array.from(formInputs).filter(input => input.value === '')


    formInputs.forEach(function (input) {
        if (input.value === "") {
            input.classList.add('error');

        } else {
            input.classList.remove('error');
        }
    })



    if (emptyInput.length !== 0) {
        console.log('inputs not filled');
        return false;
    }
    let massages = []
    if (!validateName(nameVal)) {
        inputName.classList.add('error');
        console.log('name not valid');
        swal(" Ошибка имени", "Имя должно начинаться с заглавной и содержать только латинские буквы.", "warning");
        return false;
    } else {
        inputName.classList.remove('error');
        inputName.classList.add('done');
    }

    if (!validateLogin(loginVal)) {
        console.log('login is not valid');
        inputLogin.classList.add('error');
        swal(" Ошибка создания логина ", 'Количество символов должно быть от 5 до 15. Строка должна содержать только латинские буквы и цифровые символы и/или символы подчеркивания (_). Первый символ строки должен быть буквенным.', "warning");
        return false;
    } else {
        inputLogin.classList.remove('error');
        inputLogin.classList.add('done');
    }

    if (!validateEmail(emailVal)) {
        console.log('email not valid');
        inputEmail.classList.add('error');
        swal("Пожалуйста, введите коректный email адрес");
        return false;
    } else {
        inputEmail.classList.remove('error');
        inputEmail.classList.add('done');
    }

    if (!validatePhone(phoneVal)) {
        console.log('number phone not valid');
        inputPhone.classList.add('error');
        swal("Номер должен содержать только цифры и код страны.");
        return false;
    } else {
        inputPhone.classList.remove('error');
        inputPhone.classList.add('done');
    }


    if (!inputCheckbox.checked) {
        console.log('cheackbox not checked');
        inputCheckbox.classList.add('error');
        swal("Пожалуйста прочтите и приймите политику конфиденциальности");
        return false;
    } else {
        inputCheckbox.classList.remove('error');
        inputCheckbox.classList.add('done')

    }

    if (!validatePass(passVal)) {
        console.log('pass is not correct');
        inputPassword.classList.add('error');
        swal(" Ошибка создания пароля", "Пароль должен содержать не менее 8 символов. Cодержать не менее 1 числа. Cодержать хотя бы 1 символ нижнего регистра (az). Cодержать хотя бы 1 символ верхнего регистра (AZ).", "warning");
        return false;
    } else {
        inputPassword.classList.remove('error');
    }



    if (document.getElementById("form-pass").value == document.getElementById("conf-pass").value) {
        inputConfPass.classList.add('done');
        inputPassword.classList.add('done');
        console.log("Name:" + nameVal);
        console.log("Login:" + loginVal);
        console.log("Email:" + emailVal);
        console.log("Phone Number:" + phoneVal);
        console.log("Password:" + passVal);
        swal("Поздравляю", "Вы успешно создали аккаунт");

    } else {
        console.log('Passwords dont match');
        inputPassword.classList.add('error');
        inputConfPass.classList.add('error');
        swal(" Ошибка подтверждения пароля", "Пароли не совпадают. Пожалуйста подтвердите пароль.", "warning");

        return false;


    }


    return false;
}
