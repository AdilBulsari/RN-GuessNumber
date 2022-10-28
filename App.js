import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import StartScreen from "./screens/StartScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import colors from "./utility/colors";
import GameEnd from "./screens/GameEnd";
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(true);

  function pickedNumberHandler(num) {
    setUserNumber(num);
    setGameOver(false);
  }

  let screen = <StartScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen setGameOver={setGameOver} userNumber={userNumber} />;
  }

  if (gameOver && userNumber) {
    screen = <GameEnd />;
  }

  return (
    <LinearGradient
      colors={[colors.primary600, colors.accent500]}
      style={styles.rootBackground}
    >
      <ImageBackground
        resizeMode="cover"
        source={require("./assets/image.png")}
        style={styles.rootBackground}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootBackground}>{screen}</SafeAreaView>
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
