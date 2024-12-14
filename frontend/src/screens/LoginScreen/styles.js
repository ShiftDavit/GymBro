import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
      padding: 16,
    },
    header: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 10,
    },
    subHeader: {
      fontSize: 16,
      color: '#888',
      marginBottom: 40,
    },
    input: {
      width: '100%',
      padding: 16,
      marginBottom: 15,
      borderRadius: 8,
      backgroundColor: '#fff',
      fontSize: 16,
      borderColor: '#ccc',
      borderWidth: 1,
    },
    loginButton: {
      width: '100%',
      padding: 16,
      backgroundColor: '#1B2A35',
      borderRadius: 8,
      alignItems: 'center',
    },
    loginButtonText: {
      fontSize: 18,
      color: '#fff',
      fontWeight: 'bold',
    },
    signupLink: {
      marginTop: 20,
    },
    signupText: {
      fontSize: 16,
      color: '#007BFF',
    },
  });