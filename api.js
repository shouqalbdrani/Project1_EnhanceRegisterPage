export async function fetchCompanies() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users"); // Use an actual companies API endpoint here
        return await response.json();
    } catch (error) {
        throw new Error("Failed to fetch");
    }
}


