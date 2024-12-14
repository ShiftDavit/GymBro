import { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import handleLogin from '../../helpers/handleLogin';
import styles from './styles';

const LoginPage = () => {
  const [username, setUser] = useState('');
  const [password, setPassword] = useState('');
  const {isLoggedIn, setLoggedIn} = useContext(authContext);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome Back!</Text>
      <Text style={styles.subHeader}>Login to your account</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#aaa"
        value={username}
        onChangeText={setUser}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity 
      style={styles.loginButton} 
      onPress={
        ()=>{
          console.log(handleLogin(username, password));
        }}>

        <Text style={styles.loginButtonText}>Login</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.signupLink}>
        <Text style={styles.signupText}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginPage;
