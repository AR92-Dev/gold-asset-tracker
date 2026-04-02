const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const email    = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value;

        const users = JSON.parse(localStorage.getItem("users") || "[]");
        //string to obj to array

        const user = users.find(u => u.email === email && u.password === password); //get user if exists

        if (user) {
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("currentUser", email);
            window.location.href = "my_assests.html";
        } else {
            alert("Invalid email or password");
        }

    });
}
