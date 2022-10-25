import { ImageBackground, StyleSheet } from "react-native";
import StartScreen from "./screens/StartScreen";
import { LinearGradient } from "expo-linear-gradient";
export default function App() {
  return (
    <LinearGradient
      colors={["#4e0329", "#ddb52f"]}
      style={styles.rootBackground}
    >
      <ImageBackground
        resizeMode="cover"
        source={require("./assets/image.png")}
        style={styles.rootBackground}
        imageStyle={styles.backgroundImage}
      >
        <StartScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootBackground: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.3,
  },
});
