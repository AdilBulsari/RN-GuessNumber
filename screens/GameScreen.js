import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Title from "../components/UI/Title";
import NumberContainer from "../components/Game/NumberContainer";
import PrimaryButton from "../components/UI/PrimaryButton";

const generateNumberBetween = (min, max, exclude) => {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);

  if (randomNumber === exclude) {
    return generateNumberBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
};

let minBoundary = 1;
let maxBoundary = 100;
const GameScreen = ({ userNumber, setGameOver }) => {
  const intitialGuess = generateNumberBetween(1, 100, userNumber);

  const [currentGuess, setCurrentGuess] = useState(intitialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      setGameOver(true);
    }
  }, [currentGuess, userNumber, setGameOver]);

  function nextGuessHanler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("This is wrong", "You know this is wrong", [
        {
          text: "Sorry !",
          style: "cancel",
        },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRandomNumber = generateNumberBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Text></Text>
      <View>
        <Text>Higher or Lower ?</Text>
        <View style={styles.conatiner}>
          <PrimaryButton onPress={() => nextGuessHanler("greater")}>
            +
          </PrimaryButton>
          <PrimaryButton onPress={() => nextGuessHanler("lower")}>
            -
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
