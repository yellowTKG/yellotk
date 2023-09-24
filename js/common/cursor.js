'use strict';

const tkCursor = document.getElementById("tk-cursor")

document.addEventListener('mousemove', function (e) {
    tkCursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});