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

})
