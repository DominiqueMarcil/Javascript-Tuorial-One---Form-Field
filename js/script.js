const users = [
    { username: "Armaan", password: "Allidina" },
    { username: "Hans", password: "Bachman" },
    { username: "Christine", password: "Clark" },
    { username: "Tanis", password: "Crosschild" },
    { username: "Mick", password: "Jacobs" },
    { username: "Maxene", password: "Jubane" },
    { username: "Cyrus", password: "Lomibao" },
    { username: "Dominique", password: "Marcil" },
    { username: "Chris", password: "Perlette" },
    { username: "Aliasgar", password: "Rajgara" },
    { username: "Arya", password: "Rod" },
    { username: "Tristan", password: "Scott" },
    { username: "Madisson", password: "Whelpley" },
];

const loginForm = document.getElementById("loginForm");
const loginButton = document.getElementById("loginFormSubmit");
const loginErrorMsg = document.getElementById("loginErrorMsgPrompt");
const passwordField = document.getElementById("passwordField");
const showPasswordCheckbox = document.getElementById("showPassword");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    const foundUser = users.find(user => user.username === username && user.password === password);

    if (foundUser) {
        console.log("You have successfully logged in.");
        window.location.href = "home.html"; // Redirecting to other page.
    } else {
        loginErrorMsg.style.opacity = 1; // Corrected the ID
    }
});

showPasswordCheckbox.addEventListener("change", () => {
    const passwordFieldType = showPasswordCheckbox.checked ? "text" : "password";
    passwordField.type = passwordFieldType;
});
