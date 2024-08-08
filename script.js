document.addEventListener('DOMContentLoaded', function() {

    // Seleziona gli elementi del DOM una sola volta per evitare duplicazioni
    const signupForm = document.getElementById('signupForm');
    const passwordInput = document.getElementById('signupPassword');
    const passwordError = document.getElementById('passwordError');
    const strengthText = document.getElementById('strengthText');
    const strengthBar = document.getElementById('strengthBar');

    // Gestione della sottomissione del modulo di registrazione
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const password = passwordInput.value;

        if (password.length <= 4) {
            passwordError.style.display = 'block';
        } else {
            passwordError.style.display = 'none';

            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('signupEmail').value;
            const termsAccepted = document.getElementById('terms').checked;

            if (!termsAccepted) {
                alert('You must accept the terms and conditions to register.');
                return;
            }

            // Aggiungi qui la logica per la registrazione
            alert(`Signing up with email: ${email}`);
        }
    });

    // Funzione per controllare la forza della password
    passwordInput.addEventListener('input', function() {
        const password = passwordInput.value;

        if (password.length === 0) {
            strengthText.style.display = 'none';
            strengthBar.style.display = 'none';
            return;
        }

        strengthText.style.display = 'block';
        strengthBar.style.display = 'block';

        let strength = 0;

        if (password.length > 4) strength++;
        if (password.length > 8) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^A-Za-z0-9]/.test(password)) strength++;

        // Aggiornamento della barra di forza e del testo
        updateStrengthBar(strength);
    });

    // Funzione per aggiornare la barra di forza della password
    function updateStrengthBar(strength) {
        switch (strength) {
            case 1:
                strengthBar.style.width = '20%';
                strengthBar.style.backgroundColor = 'red';
                strengthText.textContent = 'Too easy my friend';
                break;
            case 2:
                strengthBar.style.width = '40%';
                strengthBar.style.backgroundColor = 'orange';
                strengthText.textContent = 'Weak';
                break;
            case 3:
                strengthBar.style.width = '60%';
                strengthBar.style.backgroundColor = 'yellow';
                strengthText.textContent = 'Medium';
                break;
            case 4:
                strengthBar.style.width = '80%';
                strengthBar.style.backgroundColor = 'blue';
                strengthText.textContent = 'Strong';
                break;
            case 5:
                strengthBar.style.width = '100%';
                strengthBar.style.backgroundColor = 'green';
                strengthText.textContent = 'Very strong';
                break;
            default:
                strengthBar.style.width = '5%';
                strengthBar.style.backgroundColor = 'red';
                strengthText.textContent = 'Too easy my friend';
                break;
        }
    }
});
