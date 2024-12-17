import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from "./styles";
import CustomInput from './components/CustomInput';
import Switch from './components/Switch';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthButton from './components/AuthButton';
import handleLogin from '../../helper/handleLogin';
import {AuthContext} from "../../contexts/AuthContext";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {login} = useContext(AuthContext)

  async function handle () {
    const {success} = await handleLogin(username, password)
    if (success) {login()};
    console.log(success);
  }

  return (
    <SafeAreaView style={styles.root}>

          <Text style={styles.title}>GymBro</Text>

          <Switch
            states={["Login", "Sign Up"]}
          />

          <View style={{height:20}}/>

          <CustomInput 
          placeholder="Username"
          onChange={setUsername}
          />

          <CustomInput 
          secure = {true}
          placeholder="Password"
          onChange={setPassword}
          />

          <AuthButton 
          text={"Login"} 
          onPress={
            ()=>{
              handle();
          }} />


    </SafeAreaView>
  );
}