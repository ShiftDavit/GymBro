import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "/src/screens/LoginScreen";
import DashboardScreen from "/src/screens/DashboardScreen";

const Stack = createStackNavigator();

export default StackNavigator = () => (
    <Stack.Navigator>    
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Dashboard" component={DashboardScreen}/>
    </Stack.Navigator>
);