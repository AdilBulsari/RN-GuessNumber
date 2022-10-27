import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
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

const GameScreen = ({ userNumber }) => {
  const intitialGuess = generateNumberBetween(1, 100, parseInt(userNumber));

  const [currentGuess, setCurrentGuess] = useState(intitialGuess);

  function nextGuessHanler(direction) {
    if (direction === "lower") {
      generateNumberBetween();
    }
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Text></Text>
      <View>
        <Text>Higher or Lower ?</Text>
        <View style={styles.conatiner}>
          <PrimaryButton>+</PrimaryButton>
          <PrimaryButton>-</PrimaryButton>
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
