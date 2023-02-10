import { LogBox } from "react-native";
import { Navigation } from "./navigation/Navigation";
import { AuthProvider } from "./providers/AuthPrivider";

export default function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}

LogBox.ignoreAllLogs();
