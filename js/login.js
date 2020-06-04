'use strict';

let loginButton = document.getElementsByClassName('login_button')[0];
let inputId = document.getElementsByClassName('login_input')[0];
let inputPw = document.getElementsByClassName('login_input')[1];
let facebookLogin = document.getElementsByTagName('a')[0];
let forgotPw = document.getElementsByTagName('a')[1];

document.addEventListener('keyup', function () {
  loginButton.style.opacity = inputId.value && inputPw.value ? 1 : 0.3;
  loginButton.style.cursor = inputId.value && inputPw.value ? 'pointer' : 'Default';
  loginButton.disabled = inputId.value && inputPw.value ? true : false;
});

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
