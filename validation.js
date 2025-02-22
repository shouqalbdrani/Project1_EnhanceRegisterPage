const weakPasswords = ["password", "123456", "qwerty", "abc123", "letmein", "welcome"];

export function validateForm(companyName, registrationNumber, email, phoneNumber, password, confirmPassword, terms) {
    let errors = {};

    if (!companyName) {
        errors.companyName = "Company name is required.";
    }

    if (!registrationNumber) {
        errors.registrationNumber = "Registration number is required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errors.email = "Invalid email format.";
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
        errors.phoneNumber = "Phone number must be 10 digits.";
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!passwordRegex.test(password)) {
        errors.password = "Password must contain uppercase, lowercase, number, and special character.";
    } else if (weakPasswords.includes(password.toLowerCase())) {
        errors.password = "This password is too common.";
    }

    if (password !== confirmPassword) {
        errors.confirmPassword = "Passwords do not match.";
    }

    if (!terms) {
        errors.terms = "You must agree to the terms and conditions.";
    }

    return errors;
}
