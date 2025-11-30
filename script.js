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

const uppercaseError = document.getElementById('uppercase');
const lowercaseError = document.getElementById('lowercase');
const numberError = document.getElementById('number');
const specialError = document.getElementById('special');

const passwordConfirm = document.getElementById('passwordConfirm');
const passwordConfirmError = document.getElementById('passwordConfirmError');

let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;


function checkPassword() {
  console.log(password.value);

  if (regex.test(password.value) === true) {
    console.log("true");
    password.className = "";
    uppercaseError.className = "error";
    lowercaseError.className = "error";
    numberError.className = "error";
    specialError.className = "error";
  } else {
    showError();
  }

  if (password.value === passwordConfirm.value) {
    passwordConfirm.className = "";
    passwordConfirmError.textContent = "";
    passwordConfirmError.className = "error";
  }
}

password.addEventListener('input', checkPassword);

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

  if (!/[A-Z]/.test(password.value)) {
    password.className = "error";
    uppercaseError.className = "error active";
    console.log("Needs an uppercase!");
  }
  if (!/[a-z]/.test(password.value)) {
    password.className = "error";
    lowercaseError.className = "error active";
    console.log("Needs a lowercase!");
  }
  if (!/[0-9]/.test(password.value)) {
    password.className = "error";
    numberError.className = "error active";
    console.log("Needs a number!");
  }
  if (!/[^A-Za-z0-9]/.test(password.value)) {
    password.className = "error";
    specialError.className = "error active";
    console.log("Needs a special character!");
  }
}

