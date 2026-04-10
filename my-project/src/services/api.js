const API_BASE = "https://api.example.com";

export async function get(path) {
    const response = await fetch(`${API_BASE}${path}`);
    if (!response.ok) {
        throw new Error("API request failed");
    }
    return response.json();
}