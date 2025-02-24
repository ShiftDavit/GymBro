import DashboardScreen from "../screens/DashboardScreen";
import { SafeAreaView, Image, StyleSheet, Text, View, Pressable, Modal } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "../screens/SettingsScreen";
import homeimg from "../assets/home.png";
import settingsimg from "../assets/gear.png";
import logimg from "../assets/plus.png";
import React from "react";
import { LogModalContext, LogModalContextProvider } from "../contexts/LogModalContext";
import LogModal from "../components/LogModal";

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

// After applying wrappers
export default Final = () => (
    <LogModalContextProvider>
        <MainBottomTab />
    </LogModalContextProvider>

)

// Main content
const MainBottomTab = () => {
    
    const {setLogModalVisible} = React.useContext(LogModalContext);

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
                        setLogModalVisible(true);
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
        
        <LogModal/>

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