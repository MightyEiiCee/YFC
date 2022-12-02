
    const loginForm = document.getElementById("login-form");
        const loginButton = document.getElementById("login-form-submit");
        const loginErrorMsg = document.getElementById("login-error-msg");

    loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username == "Aldwin Chester" && password == "admin1234") {
        alert("Hello "+ username);
        window.location.replace("menu.html");   
    } 
    else if (username == "admin2" && password == "admin2") {
        alert("Hello Second Admin!");
        window.location.replace("menu.html");   
    }

    else {
        alert("Wrong username or Password. Try Again!");
        window.location.replace("menu.html"); 
    }
})
