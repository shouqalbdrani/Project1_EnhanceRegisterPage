import { validateForm } from '../utils/validation.js';

export class Form {
    constructor() {
        this.form = document.createElement("form");
        this.form.innerHTML = `
<div style="display: flex; align-items: center; justify-content: center; min-height: 100vh; background-color: #f3f4f6;">
    <div style="background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); width: 100%; max-width: 400px;">
        <h2 style="text-align: center; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">Register Your Company</h2>
        <form id="registrationForm" style="display: flex; flex-direction: column; gap: 1rem;">
            <div>
                <label style="color: #374151;">Company Name</label>
                <input type="text" id="companyName" required style="width: 100%; padding: 0.5rem; border: 1px solid #d1d5db; border-radius: 4px; margin-top: 4px;">
                <span style="color: red; font-size: 0.875rem;" id="companyNameError"></span>
            </div>
            
            <div>
                <label style="color: #374151;">Commercial Registration Number</label>
                <input type="text" id="registrationNumber" required style="width: 100%; padding: 0.5rem; border: 1px solid #d1d5db; border-radius: 4px; margin-top: 4px;">
                <span style="color: red; font-size: 0.875rem;" id="registrationNumberError"></span>
            </div>
            
            <div>
                <label style="color: #374151;">Email</label>
                <input type="email" id="email" required style="width: 100%; padding: 0.5rem; border: 1px solid #d1d5db; border-radius: 4px; margin-top: 4px;">
                <span style="color: red; font-size: 0.875rem;" id="emailError"></span>
            </div>
            
            <div>
                <label style="color: #374151;">Phone Number</label>
                <input type="text" id="phoneNumber" required style="width: 100%; padding: 0.5rem; border: 1px solid #d1d5db; border-radius: 4px; margin-top: 4px;">
                <span style="color: red; font-size: 0.875rem;" id="phoneNumberError"></span>
            </div>
            
            <div>
                <label style="color: #374151;">City</label>
                <input type="text" id="city" required style="width: 100%; padding: 0.5rem; border: 1px solid #d1d5db; border-radius: 4px; margin-top: 4px;">
            </div>
            
            <div>
                <label style="color: #374151;">Region</label>
                <input type="text" id="region" required style="width: 100%; padding: 0.5rem; border: 1px solid #d1d5db; border-radius: 4px; margin-top: 4px;">
            </div>
            
            <div>
                <label style="color: #374151;">Zip Code</label>
                <input type="text" id="zipCode" required style="width: 100%; padding: 0.5rem; border: 1px solid #d1d5db; border-radius: 4px; margin-top: 4px;">
            </div>
            
            <div>
                <label style="color: #374151;">Password</label>
                <input type="password" id="password" required style="width: 100%; padding: 0.5rem; border: 1px solid #d1d5db; border-radius: 4px; margin-top: 4px;">
                <span style="color: red; font-size: 0.875rem;" id="passwordError"></span>
            </div>
            
            <div>
                <label style="color: #374151;">Confirm Password</label>
                <input type="password" id="confirmPassword" required style="width: 100%; padding: 0.5rem; border: 1px solid #d1d5db; border-radius: 4px; margin-top: 4px;">
                <span style="color: red; font-size: 0.875rem;" id="confirmPasswordError"></span>
            </div>
            
            <div>
                <label style="color: #374151;">Business Type</label>
                <select id="businessType" required style="width: 100%; padding: 0.5rem; border: 1px solid #d1d5db; border-radius: 4px; margin-top: 4px;">
                    <option value="tech">Tech</option>
                    <option value="retail">Retail</option>
                    <option value="finance">Finance</option>
                </select>
            </div>
            
            <div style="display: flex; align-items: center;">
                <input type="checkbox" id="terms" required style="margin-right: 8px;">
                <label for="terms" style="color: #374151;">I agree to the terms and conditions</label>
            </div>
            
            <button type="submit" style="width: 100%; background: #3b82f6; color: white; padding: 0.75rem; border-radius: 4px; font-weight: bold; transition: background 0.3s;">Register</button>
        </form>
    </div>
</div>


        `;
        this.form.addEventListener("submit", this.handleSubmit.bind(this));
    }

    handleSubmit(event) {
        event.preventDefault();

        const companyName = document.getElementById("companyName").value.trim();
        const registrationNumber = document.getElementById("registrationNumber").value.trim();
        const email = document.getElementById("email").value.trim();
        const phoneNumber = document.getElementById("phoneNumber").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const businessType = document.getElementById("businessType").value;
        const terms = document.getElementById("terms").checked;

        const errors = validateForm(companyName, registrationNumber, email, phoneNumber, password, confirmPassword, terms);

        document.getElementById("companyNameError").textContent = errors.companyName || "";
        document.getElementById("registrationNumberError").textContent = errors.registrationNumber || "";
        document.getElementById("emailError").textContent = errors.email || "";
        document.getElementById("phoneNumberError").textContent = errors.phoneNumber || "";
        document.getElementById("passwordError").textContent = errors.password || "";
        document.getElementById("confirmPasswordError").textContent = errors.confirmPassword || "";

        if (!errors.companyName && !errors.registrationNumber && !errors.email && !errors.phoneNumber && !errors.password && !errors.confirmPassword && !errors.businessType && !errors.terms) {
            alert("Registration successful!.");
        }
    }

    render(parent) {
        parent.appendChild(this.form);
    }
}
