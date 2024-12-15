import { TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../../../constants/colors.json"

export default AuthButton = ({onPress, text}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.Black,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        height: 64,
    },

    text: {
        color: "white",
        fontSize: 24,
        fontWeight: 700
    }
})