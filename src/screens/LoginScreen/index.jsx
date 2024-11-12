import { View, SafeAreaView, Text } from "react-native";
import CustomInput from "./components/CustomInput";
import AuthButton from "./components/AuthButton";
import styles from './styles'

export default LoginScreen = () => {
    return (
        <>
            <SafeAreaView style={styles.container.safeContainer}>
    
              <Text style={styles.title}>Gym Bro</Text>

            </SafeAreaView>

            <View style={styles.container.mainContainer}>

                <View style={styles.container.interactionContainer}>
                    
                    <View style={[styles.container.inputContainer, {marginVertical: 30}]}>
                    
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

                        <AuthButton />
                    </View>

                </View>

            </View>
        </>
    );    
};