import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    safeContainer: {
      flex: 1,
      backgroundColor: '#1456db',
      alignItems: 'center',
    },

    mainContainer: {
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%'
    },

    interactionContainer: {
      height: 400,
      width: 350,
      backgroundColor: 'white',
      borderRadius: 30,
      padding: 20,
    },

    inputContainer: {
      flex: 3,
      justifyContent: 'center'
    }
});