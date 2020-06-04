'use strict';

let commentBtn = document.getElementsByClassName('comment_btn')[0];
let userComment = document.getElementsByTagName('textarea')[0];
let commentForm = document.getElementsByClassName('comment_form')[0];

// 댓글 입력시 게시 버튼 색 변화
userComment.addEventListener('keyup', function () {
  commentBtn.style.opacity = userComment.value ? 1 : 0.3;
  commentBtn.style.cursor = userComment.value ? 'pointer' : 'Default';
  commentBtn.disabled = userComment.value ? true : false;
});

// function uploadComment() {
//   if (userComment.value.length > 1) {
//   }
// }

// submicommentBtntBtn.addEventListener('click', uploadComment);
