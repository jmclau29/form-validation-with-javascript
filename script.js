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

  if (constraint.test(postalCodeField.value)) {
    postalCodeField.className = "";
    postalcodeError.textContent = "";
    postalcodeError.className = "error";
  } else {
    showError();
  }
}

const password = document.getElementById('password');
const passwordError = document.getElementById('passwordError');
const passwordConfirm = document.getElementById('passwordConfirm');
const passwordConfirmError = document.getElementById('passwordConfirmError');

function checkPassword() {
  if (
    /[A-Z]/.test(password.value) &&
    /[a-z]/.test(password.value) &&
    /[0-9]/.test(password.value) &&
    /[^A-Za-z0-9]/.test(password.value) &&
    password.value.length > 4
  ) {
    password.className = "";
    passwordError.textContent = "";
    passwordError.className = "error";
  }

  if (password.value === passwordConfirm.value) {
    passwordConfirm.className = "";
    passwordConfirmError.textContent = "";
    passwordConfirmError.className = "error";
  }
}

countrySelect.addEventListener("change", checkPostalCode);
postalCodeField.addEventListener("input", checkPostalCode);

function showError() {

  if (email.validity.typeMismatch) {
    emailError.textContent = "Please enter an email address!";
    email.className = "error";
    emailError.className = "error active";
  }

  if (countrySelect.value === "usa") {
    postalcodeError.textContent = "Enter a valid US postal code please."
    postalCodeField.className = "error";
    postalcodeError.className = "error active";
  } else if (countrySelect.value === "uk") {
    postalcodeError.textContent = "Enter a valid UK postcode, please.";
    postalCodeField.className = "error";
    postalcodeError.className = "error active";
  } else if (countrySelect.value === "canada") {
    postalcodeError.textContent = "Enter a valid Canadian postal code, eh?";
    postalCodeField.className = "error";
    postalcodeError.className = "error active";
  }
}