import { View, SafeAreaView, Text, StyleSheet } from "react-native";
import CustomInput from "./components/CustomInput";
import AuthButton from "./components/AuthButton";
import styles from './styles'
import { StatusBar } from 'expo-status-bar';

export default LoginScreen = () => {
    return (
        <>
            <SafeAreaView style={styles.container.safeContainer}>
              <Text style={[styles.text.title, {borderBottomColor:'red', borderBottomWidth: 2}]}>Login</Text>
              <StatusBar style='auto'/>
            </SafeAreaView>
            
            <View style={styles.container.inputContainer}>
            
                <CustomInput 
                    title={'Username'}
                    secure={false}
                    placeholder={'ex: JohnDoe'}
                />

                <View style={{borderWidth: StyleSheet.hairlineWidth,
                        backgroundColor: 'black',
                        height: 0.0001,
                        width: '90%'
                }}/>
                
                <CustomInput 
                    title={'Password'}
                    secure={true}
                    placeholder={'ex: 12345'}
                    
                />
            </View>

            <SafeAreaView style={[styles.container.safeContainer, {backgroundColor:'orange'}]}>
                <AuthButton />
            </SafeAreaView>
        </>
    );    
};