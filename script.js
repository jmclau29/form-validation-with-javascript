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


function validatePassword() {
  let password = document.getElementById('password').value;
  let errors = [];

  if (password.length < 8) {
    errors.push("Your password must be at least 8 characters.");
  }
  if (password.search(/[A-Z]/) < 0) {
    errors.push("Your password must contain at least one uppercase letter.");
  }
  if (password.search(/[a-z]/) < 0) {
    errors.push("Your password must contain at least one lowercase letter.");
  }
  if (password.search(/[0-9]/) < 0) {
    errors.push("Your password must contain at least one number.");
  }
  if (password.search(/[@.#$!%^&*.?]/) < 0) {
    errors.push("Your password must contain at least one special character.");
  }
  if (errors.length > 0) {
    while (passwordError.firstChild) {
      passwordError.removeChild(passwordError.firstChild);
    }
    for (let i = 0; i < errors.length; i++) {
      let errorMessage = document.createElement('p');
      errorMessage.textContent = errors[i];
      passwordError.appendChild(errorMessage);
    }
    passwordError.className = "error active";
    password.className = "error";
    return false;
  }
  while (passwordError.firstChild) {
    passwordError.removeChild(passwordError.firstChild);
  }
  password.className = "";
  return true;
}

password.addEventListener('input', validatePassword);

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

