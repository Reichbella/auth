const tabLogin = document.getElementById("login");
const tabRegister = document.getElementById("register");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const switchToRegister = document.getElementById("switch-to-register");
const switchToLogin = document.getElementById("switch-to-login");
const passwordField = registerForm.querySelector(
  'input[placeholder="Mot de passe"]'
);
const confirmPasswordField = document.getElementById("confirm-password");
const errorMsg = document.getElementById("password-error");

tabLogin.addEventListener("click", () => {
  tabLogin.classList.add("active");
  tabRegister.classList.remove("active");
  loginForm.classList.add("active");
  registerForm.classList.remove("active");
});

tabRegister.addEventListener("click", () => {
  tabRegister.classList.add("active");
  tabLogin.classList.remove("active");
  registerForm.classList.add("active");
  loginForm.classList.remove("active");
});

// Lien dans le texte pour passer à l'inscription
switchToRegister.addEventListener("click", () => {
  tabRegister.click();
});

// Lien dans le texte pour passer à la connexion
switchToLogin.addEventListener("click", () => {
  tabLogin.click();
});

// Validation des mots de passe
function checkPasswordMatch() {
  if (
    confirmPasswordField.value !== "" &&
    passwordField.value !== confirmPasswordField.value
  ) {
    confirmPasswordField.parentElement.classList.add("error");
    errorMsg.textContent = "Les mots de passe ne correspondent pas.";
    errorMsg.style.display = "block";
  } else {
    confirmPasswordField.parentElement.classList.remove("error");
    errorMsg.textContent = "";
    errorMsg.style.display = "none";
  }
}

passwordField.addEventListener("input", checkPasswordMatch);
confirmPasswordField.addEventListener("input", checkPasswordMatch);
