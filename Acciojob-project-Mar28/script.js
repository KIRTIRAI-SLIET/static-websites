document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const emailMsg = document.getElementById("emailMsg");
  const passwordMsg = document.getElementById("passwordMsg");
  const finalMsg = document.getElementById("finalMsg");

  let isEmailValid = false;
  let isPasswordValid = false;

  emailInput.onchange = function () {
    const value = emailInput.value;

    if (value.length > 3 && value.includes("@") && value.includes(".")) {
      emailMsg.textContent = "";
      isEmailValid = true;
    } else {
      emailMsg.textContent = "Make sure email is more than 3 characters and has @ and a.";
      emailMsg.className = "error";
      isEmailValid = false;
    }

    checkAllValid();
  };

  passwordInput.onchange = function () {
    const value = passwordInput.value;

    if (value.length > 8) {
      passwordMsg.textContent = "";
      isPasswordValid = true;
    } else {
      passwordMsg.textContent = "Make sure password is more than 8 characters.";
      passwordMsg.className = "error";
      isPasswordValid = false;
    }

    checkAllValid();
  };

  function checkAllValid() {
    if (isEmailValid && isPasswordValid) {
      finalMsg.textContent = "All good to go!";
      finalMsg.className = "success";
    } else {
      finalMsg.textContent = "";
    }
  }

  document.getElementById("signupForm").onsubmit = function (e) {
    e.preventDefault();

    const confirmAction = confirm("Do you want to submit the form?");

    if (confirmAction) {
      alert("Successful signup!");
    } else {
      emailInput.value = "";
      passwordInput.value = "";

      emailMsg.textContent = "";
      passwordMsg.textContent = "";
      finalMsg.textContent = "";

      isEmailValid = false;
      isPasswordValid = false;
    }
  };
});
