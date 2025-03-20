import url from "../api/urls.json"
import SecureStore from 'expo-secure-store';

export default async function getLoggedExercises(usr, pswd) {
    const token = await SecureStore.getItemAsync("jwt");
    if (!token){
        throw new Error("No JWT found.");
        return;
    }
    
    try {

        const response = await fetch(url.AUTH_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ token: token }),
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch data with status: ${response.status}`);
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error("Error during fetching exercise log:", error.message);
        throw error;
    }
}