document.addEventListener('DOMContentLoaded', function() {

    const loginForm = document.getElementById('loginForm');
   
   // Login form submission
    loginForm.addEventListener('submit', function(e) {
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        const hashedPassword = hashPassword(password);
        const users = JSON.parse(localStorage.getItem('users')) || {};

        if (users[email] && users[email].password === hashedPassword) {
            alert('Login effettuato con successo!');
        } else {
            alert('Email o password errati!');
        }
    });

    function hashPassword(password) {
        return btoa(password); // Base64 encoding, non sicuro ma solo per scopi dimostrativi
    }

});

