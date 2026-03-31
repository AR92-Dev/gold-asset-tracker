const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(e) {

        e.preventDefault();
        
        const email    = document.getElementById("regEmail").value.trim();
        const password = document.getElementById("regPassword").value;
        const confirm  = document.getElementById("regConfirm").value;
        const phone    = document.getElementById("regPhone").value.trim();

        if (password !== confirm) {
            alert("Password does not match");
            return;
        }

        if (!email || !password || !phone) {
            alert("Please fill in all fields");
            return;
        }

        if(password.length < 5){
            alert("Password must be at least 5 characters long");
            return;
        }

        if(phone.length < 9){
            alert("Phone number must be at least 9 digits long");
            return;
        }



        const users = JSON.parse(localStorage.getItem("users") || "[]");  // [] if no users
        //string to obj to arrey

        const exists = users.find(u => u.email === email); //get user if exists
        if (exists) {
            alert("This email is already registered");
            window.location.href = "login.html";
        }

        users.push({ email, password, phone });//add new user
        localStorage.setItem("users", JSON.stringify(users));//save users obj to string عشان localStorage

        alert("Registration successful! You will be redirected to the login page.");
        window.location.href = "login.html";
    });
}
