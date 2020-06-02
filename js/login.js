'use strict';

let loginButton = document.getElementsByClassName('login_button')[0];
let inputId = document.getElementsByClassName('login_input')[0];
let inputPw = document.getElementsByClassName('login_input')[1];

function btnColorChange(event) {
  if (inputId.value.length === 0 || inputPw.value.length === 0) {
    loginButton.style.opacity = 0.3;
  } else {
    loginButton.style.opacity = 1;
  }
}

inputId.addEventListener('keydown', btnColorChange);
inputPw.addEventListener('keydown', btnColorChange);
