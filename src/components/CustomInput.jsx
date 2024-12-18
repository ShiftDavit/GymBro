import { TextInput, View, StyleSheet } from "react-native";

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

const styles = StyleSheet.create({
    inputField: {
        marginBottom: 10,
        height: 50,
        width: '100%',
        borderColor:"grey",
        borderWidth:2,
        borderRadius:18,
        justifyContent: 'center',
        padding:10,
        backgroundColor: "white"
    },
})