const loginForm = document.getElementById("loginForm");
const loginButton = document.getElementById("loginFormSubmit");
const loginErrorMsg = document.getElementById("loginErrorMsgPrompt");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "m" && password === "mm") {
        console.log("You have successfully logged in.");
        window.location.href = "home.html"; // Redirecting to other page.
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})