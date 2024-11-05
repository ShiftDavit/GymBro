import { View } from "react-native";
import CustomInput from "./components/CustomInput";
import styles from './styles'

const Login = () => {
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
                    </View>

                </View>

            </View>
        </>
    );    
};

export default Login;