document.addEventListener('DOMContentLoaded', function() {
    // Login form submission
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        // Add login logic here
        alert(`Logging in with email: ${email}`);
    });

    // Signup form submission
    document.getElementById('signupForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const password = document.getElementById('signupPassword').value;
        if (password.length <= 4) {
            document.getElementById('passwordError').style.display = 'block';
        } else {
            document.getElementById('passwordError').style.display = 'none';
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('signupEmail').value;
            const termsAccepted = document.getElementById('terms').checked;
            // Add signup logic here
            alert(`Signing up with email: ${email}`);
        }
    });

    // Password strength checker
    document.getElementById('signupPassword').addEventListener('input', function() {
        const password = document.getElementById('signupPassword').value;
        const strengthBar = document.getElementById('strengthBar');
        const strengthText = document.getElementById('strengthText');
        
        let strength = 0;
        
        if (password.length > 4) strength++;
        if (password.length > 8) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^A-Za-z0-9]/.test(password)) strength++;

        switch (strength) {
            case 0:
                strengthBar.style.width = '0%';
                strengthBar.style.backgroundColor = 'red';
                strengthText.textContent = 'too easy my friend';
                break;
            case 1:
                strengthBar.style.width = '20%';
                strengthBar.style.backgroundColor = 'red';
                strengthText.textContent = 'too easy my friend';
                break;
            case 2:
                strengthBar.style.width = '40%';
                strengthBar.style.backgroundColor = 'orange';
                strengthText.textContent = 'weak';
                break;
            case 3:
                strengthBar.style.width = '60%';
                strengthBar.style.backgroundColor = 'yellow';
                strengthText.textContent = 'medium';
                break;
            case 4:
                strengthBar.style.width = '80%';
                strengthBar.style.backgroundColor = 'blue';
                strengthText.textContent = 'strong';
                break;
            case 5:
                strengthBar.style.width = '100%';
                strengthBar.style.backgroundColor = 'green';
                strengthText.textContent = 'very strong';
                break;
        }
    });
});
