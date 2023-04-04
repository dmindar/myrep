const form = document.getElementById('form');
const login = document.getElementById('login');
const username = document.getElementById('username');
const phone = document.getElementById('number');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const checkbox = document.getElementById("clickCheckBox");
const label = document.getElementById("cb__label");
const iconPass = document.getElementById("pass-icon");
const iconConf = document.getElementById("confirm-pass-icon");


iconPass.addEventListener("click", () => {
    if (password.getAttribute("type") ===
        "password") {
        password.setAttribute("type", "text");
    } else {
        password.setAttribute("type",
            "password");
    }
});

iconConf.addEventListener("click", () => {
    if (password2.getAttribute("type") ===
        "password") {
        password2.setAttribute("type", "text");
    } else {
        password2.setAttribute("type",
            "password");
    }
})


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});


const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validateName = username => {
    const re = /[A-Z][a-z]/;
    return re.test(String(username));
}


const validateLogin = login => {
    const re = /^[A-Za-z][A-Za-z0-9_]{4,14}$/;
    return re.test(String(login));
}

const validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const isValidPhone = phone => {
    const re = /^[0-9\-\+]{9,15}$/;
    return re.test(String(phone));
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const loginValue = login.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        setError(username, 'Username is required');
    } else if (!validateName(usernameValue)) {
        setError(username, 'Provide a real name  (The name must begin with a capital. Latin letters only.)');
    } else {
        setSuccess(username);
    }

    if (loginValue === '') {
        setError(login, 'Login is required');
    } else if (!validateLogin(loginValue)) {
        setError(login, 'Provide a valid login(The number of characters is from 5 to 15. Latin letters only. The first character of the string must be alphabetic.');
    } else {
        setSuccess(login);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!validateEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if (phoneValue === '') {
        setError(phone, 'Number is required');
    } else if (!isValidPhone(phoneValue)) {
        setError(phone, 'Provide a valid phone number (The number must contain only numbers and the country code.)');
    } else {
        setSuccess(phone);
    }

    if (passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8) {
        setError(password, 'The password must contain at least 8 characters. Contain at least 1 number. The password must contain at least 1 upper case character (AZ).')
    } else {
        setSuccess(password);
    }

    if (password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");

    } else {
        setSuccess(password2);
    }

    if (!checkbox.checked) {
        label.classList.add('error');
    } else if ((!validateName(usernameValue)),
        (!validateLogin(loginValue)),
        (!validateEmail(emailValue)),
        (!validateEmail(emailValue)),
        (!isValidPhone(phoneValue)),
        (password2Value === passwordValue)) {} else {
        label.classList.remove('error');
        label.classList.add('done');
        swal("Поздравляю", "Вы успешно создали аккаунт");
        console.log("Name:" + usernameValue);
        console.log("Login:" + loginValue);
        console.log("Email:" + emailValue);
        console.log("Phone Number:" + phoneValue);
        console.log("Password:" + passwordValue);

    }
};