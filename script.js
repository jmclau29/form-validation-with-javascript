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

function countrySelector() {
  console.log(countrySelect.value);
  if (countrySelect.value === "usa") {
    postalCodeField.setAttribute("pattern", "[0-9]{5}");
  }
  if (countrySelect.value === "japan") {
    postalCodeField.setAttribute("pattern", "[0-9]{3}-[0-9]{4}");
  }
};
countrySelector();
countrySelect.addEventListener('change', countrySelector);
countrySelect.addEventListener('change', () => {
  if (!postalCodeField.validity.valueMissing) {
    if (postalCodeField.validity.valid) {
      postalcodeError.textContent = "";
    }
    else {
      showError();
    }
  }
})


function validatePostalCode() {
  console.log(postalCodeField.value);

  if (postalCodeField.validity.valid) {
    postalcodeError.textContent = "";
  }
  else {
    showError();
  }

}

postalCodeField.addEventListener('input', validatePostalCode);

  

const password = document.getElementById('password');
const passwordError = document.getElementById('passwordError');

const passwordConfirm = document.getElementById('passwordConfirm');
const passwordConfirmError = document.getElementById('passwordConfirmError');


function validatePassword() {
  let passwordValue = password.value;
  let errors = [];

  if (passwordValue.length < 8) {
    errors.push("Your password must be at least 8 characters.");
  }
  if (passwordValue.search(/[A-Z]/) < 0) {
    errors.push("Your password must contain at least one uppercase letter.");
  }
  if (passwordValue.search(/[a-z]/) < 0) {
    errors.push("Your password must contain at least one lowercase letter.");
  }
  if (passwordValue.search(/[0-9]/) < 0) {
    errors.push("Your password must contain at least one number.");
  }
  if (passwordValue.search(/[@.#$!%^&*.?]/) < 0) {
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

function confirmPassword() {
  console.log(passwordConfirm.validity);
  if (password.value != passwordConfirm.value) {
    passwordConfirmError.textContent = "Passwords must match!";
    passwordConfirm.setCustomValidity("Passwords must match!");
  } else {
    passwordConfirmError.textContent = "";
    passwordConfirm.setCustomValidity("");
  }

}
password.addEventListener('input', validatePassword);
passwordConfirm.addEventListener('input', confirmPassword);



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
  } else if (countrySelect.value === "japan") {
    postalcodeError.textContent = "Enter a valid Japan postal code, please.";
    postalCodeField.className = "error";
    postalcodeError.className = "error active";
  }
}

