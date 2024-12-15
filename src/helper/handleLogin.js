import url from "../api/url.json"

export default async function handleLogin(usr, pswd) {
    try {
        console.log("hello")

        const response = await fetch(url.AUTH_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: usr, password: pswd }),
        });

        console.log("bye")
        if (!response.ok) {
            throw new Error(`Login failed with status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error during login:", error.message);
        throw error;
    }
}