// 필요한 패키지/파일들을 먼저 import
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // 확장자명이 없으면 자동으로 .js로 인식함
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // ReactDOM.render 함수를 실행
  <React.StrictMode>
    <App />
  </React.StrictMode>, // 첫번째 인자 = App.js => 내가 HTML 구조에 렌더시키고 싶은 아이
  document.getElementById('root') // 두번째 인자 = HTML에서 id가 root인 녀석 => 첫번째 인자가 렌더 될 위치
);

serviceWorker.unregister();
