import { TextInput, View, Text } from "react-native";
import styles from "../styles"

export default CustomInput = (props) => (
    <View>  
        <Text style={styles.textbox.inputLabel}>{props.title}</Text>

        <TextInput 
        style={styles.textbox.input}
        secureTextEntry = {props.secure}
        placeholder={props.placeholder}
        />
    </View>
);