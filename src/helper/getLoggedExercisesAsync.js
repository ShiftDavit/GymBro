//import url from "../api/urls.json"

// export default async function getLoggedExercises(usr, pswd) {
//     try {

//         const response = await fetch(url.AUTH_API_URL, {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ username: usr, password: pswd }),
//         });

//         if (!response.ok) {
//             throw new Error(`Login failed with status: ${response.status}`);
//         }

//         const data = await response.json();

//         return data;
//     } catch (error) {
//         console.error("Error during login:", error.message);
//         throw error;
//     }
// }