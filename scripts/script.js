const userName = document.getElementById("userName");
const userPass = document.getElementById("userPass");
const signInButton = document.getElementById("sign-in-button");
const exitInButton = document.getElementById("exit-button");

function userValidated() {
  if (typeof userName.value === "number") {
    return true;
  } else {
    alert("ingrese su numero de documento");
  }
}

function passValidated() {
  if (userPass.value.lenght >= 4) {
    return true;
  } else {
    alert("ingrese al menos 4 caracteres");
  }
}

signInButton.addEventListener("click", function () {
  if (userValidated() && passValidated()) {
    window.location.replace("../home.html");
  } else {
    alert("ingresa una contraseña y usuario valido");
    event.preventDefault();
  }
});

exitInButton.addEventListener("click", function () {
  window.location.replace("../index.html");
});
