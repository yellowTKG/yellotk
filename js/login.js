"use strict";

const loginId = document.getElementById("loginId")
const loginPassword = document.getElementById("loginPassword")
const loginBtn = document.getElementById("loginBtn")

loginBtn.addEventListener("click", () => {
    if (loginId.value === "dummy" && loginPassword.value === "dummy") {
        // 認証 OK
        document.cookie = "login=true" // cookie を保存
        location.href = "./home.html" // home に遷移
    } else {
        loginId.classList.add("error-input")
        loginPassword.classList.add("error-input")
    }
})

