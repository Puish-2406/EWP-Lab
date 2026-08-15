// ========================================
// THE BITE BAR
// Week 4 - Registration Form Validation
// ========================================

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {

    // Prevent form from submitting immediately
    event.preventDefault();

    // Get form values
    const fullName = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword =
        document.getElementById("confirmPassword").value;
    const terms = document.getElementById("terms").checked;

    // Email pattern
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Phone pattern - exactly 10 digits
    const phonePattern =
        /^[0-9]{10}$/;


    // 1. Full Name Validation
    if (fullName === "") {
        alert("Please enter your full name.");
        return;
    }


    // 2. Email Validation
    if (email === "") {
        alert("Please enter your email address.");
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }


    // 3. Phone Validation
    if (phone === "") {
        alert("Please enter your phone number.");
        return;
    }

    if (!phonePattern.test(phone)) {
        alert("Phone number must contain exactly 10 digits.");
        return;
    }


    // 4. Password Validation
    if (password === "") {
        alert("Please enter a password.");
        return;
    }

    if (password.length < 8) {
        alert("Password must contain at least 8 characters.");
        return;
    }


    // 5. Confirm Password Validation
    if (confirmPassword === "") {
        alert("Please confirm your password.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }


    // 6. Terms and Conditions Validation
    if (!terms) {
        alert("Please accept the Terms and Conditions.");
        return;
    }


    // Successful validation
    alert("Registration successful! Welcome to The Bite Bar.");

});