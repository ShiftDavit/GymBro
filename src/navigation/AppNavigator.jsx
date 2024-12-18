import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import MainTabs from "./MainTabs";

export default AppNavigator = () => {
    const {isLoggedIn} = useContext(AuthContext);

    return (
        <NavigationContainer>
            {isLoggedIn?<MainTabs />:<AuthStack />}
        </NavigationContainer>
    )
};