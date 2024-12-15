import { TextInput, View, Text } from "react-native";
import styles from "../styles"
import colors from "../../../constants/colors.json"

export default CustomInput = ({secure, placeholder, onChange}) => (
    <View style={styles.inputField}>  

        <TextInput 
        secureTextEntry = {secure}
        placeholder={placeholder}
        placeholderTextColor= {"grey"}
        onChangeText={onChange}
        />

    </View>
);