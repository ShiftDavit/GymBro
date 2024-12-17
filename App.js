import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "./src/navigation/AppNavigator";
import { AuthProvider } from "./src/contexts/AuthContext";

export default App = () => {
  return (
    <AuthProvider>
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
    </AuthProvider>
  );
}