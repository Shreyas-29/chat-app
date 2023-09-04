import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeNav from "./app/navigation/HomeNav";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <HomeNav />
      </NavigationContainer>
    </View>
  );
}

{
  /* <StatusBar style="auto" /> */
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
