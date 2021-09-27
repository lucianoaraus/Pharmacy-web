var userName = document.getElementById("#input-user-name");
var userPass = document.getElementById("#input-user-pass");
var signInButton = document.getElementById("sign-in-button");

var userValidated = function () {
  if (userName.type == int) {
    return true;
  } else {
    alert("ingrese su numero de documento");
  }
};

var passValidated = function () {
  if (userPass.value.lenght >= 4) {
    return true;
  } else {
    alert("ingrese al menos 4 caracteres");
  }
};

var ingresar = function () {
  if (userValidated && passValidated) {
    window.location.replace("../home.html");
  } else {
    alert("ingresa una contraseña y usuario validos");
  }
};

signInButton.addEventListener("click", ingresar);
