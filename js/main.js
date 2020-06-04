'use strict';

const commentBtn = document.getElementsByClassName('comment_btn')[0];
const inputValue = document.getElementsByTagName('textarea')[0];
const commentUpload = document.getElementsByClassName('comment_form')[0];
const comments = document.getElementsByClassName('comments')[0];

// 댓글 입력시 게시 버튼 색 변화
inputValue.addEventListener('keyup', function () {
  commentBtn.style.opacity = inputValue.value ? 1 : 0.3;
  commentBtn.style.cursor = inputValue.value ? 'pointer' : 'Default';
  commentBtn.disabled = inputValue.value ? false : true;
});

// 댓글 입력시 새 댓글창 추가

commentBtn.addEventListener('click', function () {
  let commentUpload = document.createElement('div');
  let userId = document.createElement('a');
  let commentValue = document.createElement('span');
  let delBtn = document.createElement('button');

  if (inputValue.value) {
    commentUpload.className = 'comment_form';
    userId.className = 'comment_id';
    commentValue.className = 'comment_style';
    delBtn.className = 'js-delBtn';

    userId.innerHTML = 'Wecoder';
    delBtn.innerHTML = '삭제';
    commentValue.innerHTML = inputValue.value;

    comments.appendChild(commentUpload);
    commentUpload.appendChild(userId);
    commentUpload.appendChild(delBtn);
    commentUpload.appendChild(commentValue);
  }
});
