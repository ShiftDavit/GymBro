import DashboardScreen from "../screens/DashboardScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "../screens/SettingsScreen";

const BottomTab = createBottomTabNavigator();

export default MainBottomTab = () => (
    <BottomTab.Navigator>    
        <BottomTab.Screen 
            name="Dashboard"
            component={DashboardScreen}
            options={{
                headerShown: false,
              }}/>
              
        <BottomTab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
                headerShown: false
            }}/>
    </BottomTab.Navigator>
);