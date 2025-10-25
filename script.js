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

const countrySelect = document.getElementById("countries");
const postalCodeField = document.getElementById("postalcode");
const postalcodeError = document.getElementById("postalcodeError");

function checkPostalCode() {
    const constraints = {
        usa: [
            "^\\b\\d{5}\\b(?:[- ]{1}\\d{4})?$",
            "US Postal codes must have 5 numbers.",
        ],
        canada: [
            "^(?=[^DdFfIiOoQqUu\\d\\s])[A-Za-z]\\d(?=[^DdFfIiOoQqUu\\d\\s])[A-Za-z]\\s{0,1}\\d(?=[^DdFfIiOoQqUu\\d\\s])[A-Za-z]\\d$",
            "Canadian postal codes are crazy.",
        ],
        uk: [
            "^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z])))) [0-9][A-Za-z]{2})$",
            "UK Postcodes must be like this.",
        ],
    }

    const country = countrySelect.value;


    const constraint = new RegExp(constraints[country][0], "");
    console.log(constraint);

    if (constraint.test(postalCodeField.value)) {
        postalCodeField.className = "";
        postalcodeError.textContent = "";
        postalcodeError.className = "error";
    } else {
        showError();
    }
}

countrySelect.addEventListener("change", checkPostalCode);
postalCodeField.addEventListener("input", checkPostalCode);

function showError() {
    if (email.validity.typeMismatch) {
        emailError.textContent = "Please enter an email address!";
    }
    email.className = "error";
    emailError.className = "error active";

    if (postalCodeField.validity.typeMismatch) {
        switch (countrySelect.value) {
            case us:
                postalcodeError.textContent = "US Postal codes must have 5 numbers.";
                break;
            case uk:
                postalcodeError.textContent = "UK Postcodes must be like this.";
                break;
            case canada:
                postalcodeError.textContent = "Canadian postal codes are crazy.";
                break;
        }
    }
    postalCodeField.className = "error";
    postalcodeError.className = "error active";
}