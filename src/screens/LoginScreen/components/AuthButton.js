import { Pressable } from "react-native";
import styles from "../styles";

export default AuthButton = () => {
    return (
        <Pressable style={styles.button.authButton}>
            <Text style={{textAlign: 'center', fontWeight: 800, color: 'white', fontSize: 20}}>Log In</Text>
        </Pressable>
    );
};