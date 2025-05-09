import DashboardScreen from "../screens/DashboardScreen";
import { SafeAreaView, Image, StyleSheet, Text, View, Pressable, Modal } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "../screens/SettingsScreen";
import LogExerciseScreen from "../screens/LogExerciseScreen"
import homeimg from "../assets/home.png";
import settingsimg from "../assets/gear.png";
import logimg from "../assets/plus.png";
import React from "react";
import { LogModalContext, LogModalContextProvider } from "../contexts/LogModalContext";
import LogModal from "../components/LogModal";
import { useNavigation } from '@react-navigation/native';
import TabBar from "../components/TabBar"

const BottomTab = createBottomTabNavigator();

const EmptyScreen = ({navigation})=>{
    return null;
};

function LogButton({children, onPress}){
    

    return <Pressable
    style={styles.logButton}
      
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
const MainBottomTab = ({navigation}) => {
    
    const {setLogModalVisible} = React.useContext(LogModalContext);

    return(
    <>
        <BottomTab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar
            }}

            tabBar={props=>(<TabBar {...props}/>)}
        >    
            <BottomTab.Screen 
                name="Dashboard"
                component={DashboardScreen}
                // options={{
                //    
                // }}
                />

            <BottomTab.Screen 
                name = "Add"
                component={EmptyScreen}
                listeners={({ navigation }) => ({
                    tabPress: (e) => {
                        e.preventDefault(); // Prevents default tab navigation
                        // Add any additional logic you need when clicking the button
                        // setLogModalVisible(true);
                        navigation.navigate("LogExerciseScreen")
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
                    
                }}
                
                
                />
        </BottomTab.Navigator>
        
        <LogModal navigation = {navigation}/>

    </>

)};

const styles = StyleSheet.create({
    tabBar: {
        flexDirection: "row"
    },

    logButton: {
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 0,
      }
});