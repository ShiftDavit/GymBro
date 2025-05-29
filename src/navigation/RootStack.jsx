import { createStackNavigator } from '@react-navigation/stack';
import MainTabs from "./MainTabs";
import LogExerciseScreen from "../screens/LogExerciseScreen"
import { ExerciseListContextProvider } from '../contexts/ExerciseListContext';

const Stack = createStackNavigator();

export default AuthStack = () => (
    <ExerciseListContextProvider>
    <Stack.Navigator>    
        <Stack.Screen 
            name="MainTabs"
            component={MainTabs}
            options={{
                headerShown: false,
              }}/>
        <Stack.Screen name="LogExerciseScreen" component={LogExerciseScreen}/>
    </Stack.Navigator>
    </ExerciseListContextProvider>

);