import { StyleSheet } from "react-native"
import colors from "../../constants/colors.json"

export default styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingRight: 20,
        paddingLeft: 20,
        alignItems: "center",
        justifyContent: "center"
    },

    title: {
        fontSize: 90,
        fontWeight:"800",
        marginBottom:50,
        color: colors.Black
    },

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
