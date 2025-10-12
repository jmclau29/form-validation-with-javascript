let email = document.getElementById('email');
let emailError = document.getElementById('emailError');

email.addEventListener('input', () => {
    if (email.validity.valid) {
        email.className = "";
        emailError.textContent = "";
        emailError.className = "error";
    } else {
        showError();
    }
})

let countries = document.getElementById('countries')
let postalcode = document.getElementById('postalcode');
let postalcodeError = document.getElementById('postalcodeError');

let usCode = "^\\b\\d{5}\\b(?:[- ]{1}\\d{4})?$";
let ukCode = "^[A-Z]{1,2}[0-9R][0-9A-Z]?\\s*[0-9][A-Z-[CIKMOV]]{2}";
let canCode = "^(?=[^DdFfIiOoQqUu\\d\\s])[A-Za-z]\\d(?=[^DdFfIiOoQqUu\\d\\s])[A-Za-z]\\s{0,1}\\d(?=[^DdFfIiOoQqUu\\d\\s])[A-Za-z]\\d$"

postalcode.addEventListener('input', () => {
    if (countries.value === "usa") {
        if (usCode === postalcode.value) {
            postalcode.className = "";
            postalcodeError.textContent = "";
            postalcodeError.className = "error";
        } else {
            showError();
        }
    }
})


function showError() {
    if (email.validity.typeMismatch) {
        emailError.textContent = "Please enter an email address!";
    }
    email.className = "error";
    emailError.className = "error active";

    if (countries.value === "usa") {
        if (postalcode.value != usCode) {
            postalcodeError.textContent = "Please enter a valid US ZIP code!";
        }
    }
    if (countries.value === "uk") {
        if (postalcode.value != ukCode) {
            postalcodeError.textContent = "Please enter a valid UK postcode!";
        }
    }
    if (countries.value === "canada") {
        if (postalcode.value != canCode) {
            postalcodeError.textContent = "Please enter a valid Canadian postal code!";
        }
    }
    postalcode.className = "error";
    postalcodeError.className = "error active";
    
}