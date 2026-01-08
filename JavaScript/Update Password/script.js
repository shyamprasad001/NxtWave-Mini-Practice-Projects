let updatePasswordFormEl = document.getElementById("updatePasswordForm");
let newPasswordEl = document.getElementById("newPassword");
let confirmPasswordEl = document.getElementById("confirmPassword");
let updateBtnEl = document.getElementById("updateBtn");
let newPasswordErrMsgEl = document.getElementById("newPasswordErrMsg");
let confirmPasswordErrMsgEl = document.getElementById("confirmPasswordErrMsg");

newPasswordEl.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    newPasswordErrMsgEl.textContent = "Required*";
  } else {
    newPasswordErrMsgEl.textContent = "";
  }
});
confirmPasswordEl.addEventListener("blur", function (event) {
  const newUserPassword = newPasswordEl.value;
  if (event.target.value !== newUserPassword) {
    confirmPasswordErrMsgEl.textContent = "Passwords must be same";
  } else {
    confirmPasswordErrMsgEl.textContent = "";
  }
});

updateBtnEl.addEventListener("click", function (event) {
  if (newPasswordEl.value === "") {
    newPasswordErrMsgEl.textContent = "Required*";
  } else {
    newPasswordErrMsgEl.textContent = "";
  }

  if (confirmPasswordEl.value === "") {
    confirmPasswordErrMsgEl.textContent = "Passwords must be same";
  } else {
    confirmPasswordErrMsgEl.textContent = "";
  }

  event.preventDefault();
});
