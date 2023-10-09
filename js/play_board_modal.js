const buttonOpen = document.getElementById('modalOpen');
const modal = document.getElementById('easyModal');
const buttonClose = document.getElementsByClassName('modalClose')[0];

// ボタンがクリックされた時
buttonOpen.addEventListener('click', modalOpen);
function modalOpen() {
  modal.style.display = 'grid';
  modal.style.zIndex = '999';
}

// バツ印がクリックされた時
buttonClose.addEventListener('click', modalClose);
function modalClose() {
  modal.style.display = 'none';
  modal.style.zIndex = '1';
}

// モーダルコンテンツ以外がクリックされた時
addEventListener('click', outsideClose);
function outsideClose(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
    modal.style.zIndex = '1';
  }
}