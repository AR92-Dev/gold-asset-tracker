fetch('./html/Template/header.html')
    .then(response => {
        if (!response.ok) throw new Error("Header not found!");
        return response.text();
    })
    .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
    })
    .catch(error => console.error(error));

fetch('./html/Template/footer.html')
    .then(response => {
        if (!response.ok) throw new Error("Footer not found!");
        return response.text();
    })
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
    })
    .catch(error => console.error(error));
    const login = document.getElementById("login")
    if(sessionStorage.getItem("isLoggedIn") !== "true"){
            login.style.visibility=false
        }
        else{
            login.style.visibility=false

        }