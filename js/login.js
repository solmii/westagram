'use strict';

const loginButton = document.getElementsByClassName('login_button')[0];
let inputId = document.getElementsByClassName('login_input')[0];
let inputPw = document.getElementsByClassName('login_input')[1];
const facebookLogin = document.getElementsByTagName('a')[0];
const forgotPw = document.getElementsByTagName('a')[1];

function btnColorChange(event) {
  if (inputId.value.length < 1 || inputPw.value.length < 1) {
    loginButton.style.opacity = 0.3;
    loginButton.style.cursor = 'Default';
    loginButton.disabled = true;
  } else {
    loginButton.style.opacity = 1;
    loginButton.style.cursor = 'pointer';
    loginButton.disabled = false;
  }
}

//click event

inputId.addEventListener('keyup', btnColorChange);
inputPw.addEventListener('keyup', btnColorChange);

facebookLogin.addEventListener('mousedown', function () {
  facebookLogin.style.opacity = 0.7;
});

facebookLogin.addEventListener('mouseleave', function () {
  facebookLogin.style.opacity = 1;
});

forgotPw.addEventListener('mousedown', function () {
  forgotPw.style.opacity = 0.7;
});

forgotPw.addEventListener('mouseleave', function () {
  forgotPw.style.opacity = 1;
});
