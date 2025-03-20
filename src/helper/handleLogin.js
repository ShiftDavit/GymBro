import url from "../api/urls.json"
import SecureStore from "expo-secure-store"

export default async function handleLogin(usr, pswd) {
    try {

        const response = await fetch(url.AUTH_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: usr, password: pswd }),
        });

        if (!response.ok) {
            throw new Error(`Login failed with status: ${response.status}`);
        }

        const data = await response.json();
        const token = data.token

        if (token){
            await SecureStore.setItemAsync("jwt", token);
            console.log('Successfully stored jwt.');
        }

        return data;
    } catch (error) {
        console.error("Error during login:", error.message);
        throw error;
    }
}