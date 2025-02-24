import { Modal, View, Text, Pressable, FlatList } from "react-native";
import { useContext } from "react";
import { LogModalContext } from "../contexts/LogModalContext";

export default function LogModal(){

    const {logModalVisible, setLogModalVisible} = useContext(LogModalContext);

    return (
        <>  
            {logModalVisible && <Pressable 
                style={{ 
                        position: "absolute",
                        height:"100%",
                        width:"100%",
                        justifyContent: 'center',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                    }}
                  
                onPress={()=>setLogModalVisible(false)}
                    />}

            

            <Modal
                animationType="slide"
                transparent={true}
                visible={logModalVisible}
                onRequestClose={()=>{setLogModalVisible(false)}}
            >
                <View style={{ 
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "flex-end",
                    justifyContent: "center"
                }}>

                    <View style={{
                        backgroundColor: 'white',
                        padding: 20,
                        borderRadius: 10,
                        marginHorizontal: 20,
                        alignItems: 'center',
                        width: "80%",
                    }}>

                        <Text>This is a modal overlay</Text>

                        <Pressable onPress={()=>setLogModalVisible(false)}>
                        
                        <Text >Close Modal</Text>
                        
                        </Pressable>
                    </View>

                </View>

            </Modal>
        </>
    ) 
}