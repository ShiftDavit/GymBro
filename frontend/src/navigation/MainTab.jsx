import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from "../screens/DashboardScreen";

const Tab = createBottomTabNavigator();

export default MainTab = () => (
    <Tab.Navigator>    
        <Tab.Screen 
            name="Dash"
            component={DashboardScreen}
            options={{
                headerShown: false,
              }}/>
    </Tab.Navigator>
);