"use strict";

window.addEventListener('DOMContentLoaded', () => {
    let cookieStatus = []
    // cookie を取得
    const cookieArray = document.cookie.split(";")
    cookieArray.forEach(data => {
        data = data.split("=")
        cookieStatus[data[0]] = JSON.parse(data[1])
    })

    // ログイン状態をチェック
    const loginStatus = cookieStatus["login"]
    if (loginStatus == false) {
        location.href = "./index.html"
    }

})