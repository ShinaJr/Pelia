import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Petrona_400Regular,
  Petrona_500Medium,
  Petrona_600SemiBold,
  Petrona_700Bold,
} from "@expo-google-fonts/petrona";

export default function App() {
  let [fontsLoaded] = useFonts({
    Petrona_400Regular,
    Petrona_500Medium,
    Petrona_600SemiBold,
    Petrona_700Bold,
  });

  if (!fontsLoaded) {
    return;
  } else {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <HomeScreen />
          <StatusBar style="auto" />
        </View>
      </SafeAreaProvider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
});
