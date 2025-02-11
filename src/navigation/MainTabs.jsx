import DashboardScreen from "../screens/DashboardScreen";
import { SafeAreaView, Image, StyleSheet, Text, View, Pressable, Modal } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "../screens/SettingsScreen";
import homeimg from "../assets/home.png";
import settingsimg from "../assets/gear.png";
import logimg from "../assets/plus.png";
import React from "react";

const BottomTab = createBottomTabNavigator();

const EmptyScreen = ({navigation})=>{
    return null;
};

function LogButton({children, onPress}){
    

    return <Pressable
    style={{
        top: -30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 10,
      }}
      
    onPress={onPress}>
        <View
            style={{
                width: 60,
                height: 60,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >{children}</View>
    </Pressable>
}

export default MainBottomTab = () => {
    
    const [logModalVisible, setLogModalVisible] = React.useState(false);

    function handleLogModal(s){
        setLogModalVisible(s);
    }

    return(
    <>
        <BottomTab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar
            }}
        >    
            <BottomTab.Screen 
                name="Dashboard"
                component={DashboardScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <View style={{alignItems: 'center'}}>
                            <Image source={homeimg} style={{tintColor: color, width: focused?30:25, height: focused?30:25}} />
                            <Text style={{fontSize:10}}>HOME</Text>
                        </View>
                    )
                }}/>

            <BottomTab.Screen 
                name = "Add"
                component={EmptyScreen}
                listeners={({ navigation }) => ({
                    tabPress: (e) => {
                        e.preventDefault(); // Prevents default tab navigation
                        // Add any additional logic you need when clicking the button
                        handleLogModal(true);
                        console.log("Plus button clicked!");
                    }})}
                options= {{
                    tabBarIcon: ({ focused, color, size }) => (

                        <Image source={logimg} style={{width: 60, height: 60}} />
                    ),

                    tabBarButton: (props)=>
                    (<LogButton {...props} />)
                }}
            />      
            
            <BottomTab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    headerShown: true,
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image source={settingsimg} style={{tintColor: color, width: focused?30:25, height: focused?30:25}} />
                    )
                }}
                
                
                />
        </BottomTab.Navigator>

        <Modal
            animationType="slide"
            transparent={true}
            visible={logModalVisible}
            onRequestClose={()=>{handleLogModal(false)}}
        >
            <View style={{ 
                flex: 1,
                justifyContent: 'center',
                backgroundColor: 'rgba(0,0,0,0.5)',
            }}>

            <View style={{
                backgroundColor: 'white',
                padding: 20,
                borderRadius: 10,
                marginHorizontal: 20,
                alignItems: 'center',
            }}>

                <Text>This is a modal overlay</Text>

                <Pressable onPress={()=>{handleLogModal(false)}}>
                
                <Text >Close Modal</Text>
                
                </Pressable>
            </View>
            </View>
        </Modal>
    </>

)};

const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        margin: 20,
        bottom: 25,
        paddingTop: 15,
        alignItems: 'space-between',
        justifyContent: 'center',
        borderRadius: 20
    }
});