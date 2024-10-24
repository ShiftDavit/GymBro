import { StatusBar } from 'expo-status-bar';
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
  <>
    <SafeAreaView style={styles.safeContainer}>
    
        <Text style={styles.title}>Gym Bro</Text>

    </SafeAreaView>
    
    <View style={styles.container}>

      <View style={styles.interactionContainer}>
        
        <View style={[styles.inputContainer, {marginVertical: 30}]}>
          
          <CustomInput 
            title={'Username'}
            secure={false}
            placeholder={'ex: JohnDoe'}  
          />

          <CustomInput 
            title={'Password'}
            secure={true}
            placeholder={'ex: 12345'}
          />
        </View>
        
        <Pressable style={styles.btn}>
          <Text style={{textAlign: 'center', fontWeight: 800, color: 'white', fontSize: 20}}>Log In</Text>
        </Pressable>

      </View>

    </View>
  </>  
  );
}

export const CustomInput = (props) => (
  <View style={styles.inputContainer}>
    <Text style={styles.inputLabel}>{props.title}</Text>

    <TextInput 
      style={styles.input}
      secureTextEntry = {props.secure}
      placeholder={props.placeholder}
    />
  </View>
)

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    backgroundColor: 'blue',
    alignContent: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    borderRadius: 100
  },

  inputContainer: {
    flex: 3,
    justifyContent: 'center'
  },
  
  inputLabel: {
    fontWeight: 'bold'
  },

  input: {
    height: 80,
    padding: 10, 
    backgroundColor: '#f5f5f5',
    fontSize: 15,
    borderRadius: 20
  },

  safeContainer: {
    flex: 1,
    backgroundColor: '#1456db',
    alignItems: 'center',
  },
  
  container: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },

  title: {
    fontWeight: '800',
    letterSpacing: 1,
    fontSize: 60,
    color: 'white'
  },

  interactionContainer: {
    height: 400,
    width: 350,
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 20,
  }
});
