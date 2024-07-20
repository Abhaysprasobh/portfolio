document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS (Animate on Scroll)
    AOS.init();

    // Optional: Show or hide elements based on form input
    const emailInput = document.getElementById('email');
    emailInput.addEventListener('input', () => {
        const email = emailInput.value;
        // Example: Adjust UI based on email input
        if (email.includes('@')) {
            emailInput.style.borderColor = '#28a745'; // Green border if valid
        } else {
            emailInput.style.borderColor = '#dc3545'; // Red border if invalid
        }
    });

    // Form Validation Handling
    const form = document.querySelector('form');

    form.addEventListener('input', () => {
        // Check if form is valid
        if (form.checkValidity()) {
            form.classList.remove('was-validated'); // Remove validation feedback if valid
        } else {
            form.classList.add('was-validated'); // Add validation feedback if invalid
        }
    });
});
