document.getElementById('forgot-password-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;

    // Simulate sending a reset link (replace with real backend logic)
    if (email) {
        document.getElementById('reset-message').textContent = 'A reset link has been sent to your email.';
        document.getElementById('reset-message').style.color = 'green';
    } else {
        document.getElementById('reset-message').textContent = 'Please enter a valid email address.';
        document.getElementById('reset-message').style.color = 'red';
    }
});
