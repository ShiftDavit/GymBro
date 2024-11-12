import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../screens/LoginScreen";
import DashboardScreen from "../screens/DashboardScreen";

const Stack = createStackNavigator();

export default AuthStack = () => (
    <Stack.Navigator>    
        <Stack.Screen 
            name="Login"
            component={LoginScreen}
            options={{
                headerShown: false,
              }}/>
        <Stack.Screen name="Dashboard" component={DashboardScreen}/>
    </Stack.Navigator>
);