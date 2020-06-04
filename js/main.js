'use strict';

const submitBtn = document.getElementsByClassName('comment_btn')[0];
let userComment = document.getElementsByTagName('textarea')[0];
const commentForm = document.getElementsByClassName('comment_form')[0];

function submitBtnChange() {
  if (userComment.value.length < 1) {
    submitBtn.style.opacity = 0.3;
    submitBtn.style.cursor = 'Default';
    submitBtn.disabled = true;
  } else {
    submitBtn.style.opacity = 1;
    submitBtn.style.cursor = 'pointer';
    submitBtn.disabled = false;
  }
}

userComment.addEventListener('keyup', submitBtnChange);

// function uploadComment() {
//   if (userComment.value.length > 1) {
//   }
// }

// submitBtn.addEventListener('click', uploadComment);
