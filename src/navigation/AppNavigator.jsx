import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import { AuthContext, AuthProvider} from "../contexts/AuthContext";
import { useContext, useEffect } from "react";
import DashboardScreen from "../screens/DashboardScreen";

export default AppNavigator = () => {
    const {isLoggedIn} = useContext(AuthContext);

    return (
        <NavigationContainer>
            {isLoggedIn?<DashboardScreen />:<AuthStack />}
        </NavigationContainer>
    )
};