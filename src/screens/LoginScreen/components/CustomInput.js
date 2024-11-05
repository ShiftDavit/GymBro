import { StyleSheet, TextInput, View, Text } from "react-native";
import styles from "../styles"

const CustomInput = (props) => (
    <View style={styles.TextboxStyles.inputContainer}>
        <Text style={styles.TextboxStyles.inputLabel}>{props.title}</Text>

        <TextInput 
        style={styles.TextboxStyles.input}
        secureTextEntry = {props.secure}
        placeholder={props.placeholder}
        />
    </View>
);

export default CustomInput;