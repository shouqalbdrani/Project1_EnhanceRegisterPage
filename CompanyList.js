import { fetchCompanies } from '../services/api.js';

export class CompanyList {
    constructor() {
        this.button = document.createElement("button");
        this.button.textContent = "Fetch Companies";
        this.button.addEventListener("click", () => this.loadCompanies());

        this.loading = document.createElement("span");
        this.loading.textContent = "Loading...";
        this.loading.style.display = "none";

        this.list = document.createElement("ul");
    }

    async loadCompanies() {
        this.loading.style.display = "inline";
        try {
            const companies = await fetchCompanies();
            this.list.innerHTML = companies.map(company => 
                `<li class="bg-gray-100 p-4 rounded-lg shadow-md">${company.name} - ${company.registrationNumber}</li>`
            ).join("");
        } catch (error) {
            this.list.innerHTML = "<li>Error fetching</li>"
        } finally {
            this.loading.style.display = "none";
        }
    }

    render(parent) {
        parent.appendChild(this.button);
        parent.appendChild(this.loading);
        parent.appendChild(this.list);
    }
}
