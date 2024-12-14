import { Alert } from 'react-native';
import { useContext } from 'react';
import authContext from '../contexts/authContext';

export default async function handleLogin(username, password){

    if (username === '' || password === '') {
        Alert.alert('Validation', 'Please fill in both fields');
        return
    }

    try {
        const res = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        body: {
            username: username,
            password: password
        }})

        return res.json();
        // if (res.ok){
        //     return true;
        // }else{
        //     return false
        // }
    }catch(err){
        console.log(err);
    }
}