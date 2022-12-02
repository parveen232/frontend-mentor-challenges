const form = document.querySelector('form');
const email = document.querySelector('#email-input');
const emailError = document.querySelector(".error");

email.addEventListener('invalid', (e) => {
    e.preventDefault();
    emailError.style.visibility = 'visible';
})

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (email.value == "") {
        emailError.style.visibility = 'visible';
    }
    else {
        document.body.innerHTML = `<div style="display:flex; justify-content:center;"><h1>Thank you!</h1></div>`;
    }
})