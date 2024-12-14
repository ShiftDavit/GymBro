import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import DashTab from "./MainTab";
import { SafeAreaProvider } from "react-native-safe-area-context";
import authContext from "../contexts/authContext";
import { useContext } from "react";


export default AppNavigator = () => {
   const {isLoggedIn} = useContext(authContext);
   
   return (
   <SafeAreaProvider>
        <NavigationContainer>
            {
            isLoggedIn
            ?<DashTab />
            :<AuthStack />
            }
        </NavigationContainer>
    </SafeAreaProvider>
   )
};
