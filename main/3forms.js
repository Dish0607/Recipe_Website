document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signup-form");

    if (signupForm) {
        const usernameInput = document.getElementById("signup-username");
        const emailInput = document.getElementById("signup-email");
        const passwordInput = document.getElementById("signup-password");

        const usernameMsg = document.createElement("p");
        const emailMsg = document.createElement("p");
        const passwordMsg = document.createElement("p");

        usernameMsg.style.color = "grey";
        emailMsg.style.color = "grey";
        passwordMsg.style.color = "grey";

        usernameInput.insertAdjacentElement("afterend", usernameMsg);
        emailInput.insertAdjacentElement("afterend", emailMsg);
        passwordInput.insertAdjacentElement("afterend", passwordMsg);

        function clearMessage(inputField, messageElement) {
            inputField.addEventListener("focus", function () {
                messageElement.innerText = "";
            });

            inputField.addEventListener("input", function () {
                if (inputField.value === "") {
                    messageElement.innerText = "";
                }
            });
        }

        usernameInput.addEventListener("input", function () {
            if (usernameInput.value.length < 5) {
                usernameMsg.innerText = "Username must be at least 5 characters.";
            } else {
                usernameMsg.innerText = "";
            }
        });

        emailInput.addEventListener("input", function () {
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(emailInput.value)) {
                emailMsg.innerText = "Enter a valid email address.";
            } else {
                emailMsg.innerText = "";
            }
        });

        passwordInput.addEventListener("input", function () {
            const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%*?&])[A-Za-z\d@$!#%*?&]{8,}$/;
            if (!passwordPattern.test(passwordInput.value)) {
                passwordMsg.innerText = "Password must be at least 8 characters, include uppercase, lowercase, a number, and a special character.";
            } else {
                passwordMsg.innerText = "";
            }
        });

        clearMessage(usernameInput, usernameMsg);
        clearMessage(emailInput, emailMsg);
        clearMessage(passwordInput, passwordMsg);

        signupForm.addEventListener("submit", function (e) {
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%*?&])[A-Za-z\d@$#!%*?&]{8,}$/;

            if (
                usernameInput.value.length < 5 ||
                !emailPattern.test(emailInput.value) ||
                !passwordPattern.test(passwordInput.value)
            ) {
                e.preventDefault();
                alert("Please correct the errors before submitting.");
            }
        });
    }

    // Fix login form validation
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        const users = {
            user1: { username: "Tejhu", password: "Tejhu123#" },
            user2: { username: "Mahii", password: "Mahi123#" },
            user3: { username: "Dishitha", password: "Dish123#" }
        };

        function validateLogin(event) {
            event.preventDefault(); // Prevent form from submitting immediately
            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();

            console.log("Login form submitted"); // Debugging
            console.log("Entered Username:", username);
            console.log("Entered Password:", password);

            for (let key in users) {
                if (users[key].username === username && users[key].password === password) {
                    alert("Login successful!");
                    window.location.href = "main2.html"; // Redirect to home page
                    return;
                }
            }
            alert("Invalid username or password. Please try again.");
        }

        // Attach event listener to login form
        loginForm.addEventListener("submit", validateLogin);
    }
});
