import { useContext, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { createContext } from "react";
import colors from "../../../constants/colors.json"

const SelectionContext = createContext("Login");

const SwitchElement = ({state, onPress}) => {
    const currState = useContext(SelectionContext);

    return(
        
        <TouchableOpacity onPress={onPress} style={(currState===state)?styles.switchElementOn : styles.switchElementOff}>
            
            <Text style={(currState===state)?styles.switchTextOn : styles.switchTextOff}>
                {state}
            </Text>
            
        </TouchableOpacity>
    )
}

export default function Switch({states=["One","Two"]}) {
    const [currState, setState] = useState(states[0]);

    return(
        <SelectionContext.Provider value={currState}>
            <View style = {styles.switchRoot}>
                {states.map((element, index)=>(
                    <SwitchElement key={index} onPress={()=>{setState(element)}} state={element} />
                ))}
            </View>
        </SelectionContext.Provider>
    );
}

const styles = StyleSheet.create({
    switchRoot: {
    flexDirection: "row",
    borderRadius:100,
    width:"100%",
    height: 40,
    backgroundColor:"white"
},

switchElementOn: {
    flex:1,
    backgroundColor:colors.Black,
    color:"white",
    borderRadius:100,
    alignItems:"center",
    justifyContent:"center",

},

switchElementOff: {
    flex:1,
    backgroundVisibility:false,
    color:colors.Black,
    borderRadius:100,
    alignItems:"center",
    justifyContent:"center"
},

switchTextOn: {
    fontSize: 20,
    fontWeight:"bold",
    color:"white"
}, 

switchTextOff: {
    fontSize: 20,
    fontWeight:"bold",
    color:colors.Black
}

})