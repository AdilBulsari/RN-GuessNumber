import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../utility/colors";

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          !pressed
            ? styles.buttonInnerContainer
            : [styles.buttonInnerContainer, styles.pressed]
        }
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: colors.primaryDark,
    paddingVertical: 8,
    paddingHorizontal: 6,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
  pressed: {
    opacity: 0.75,
  },
});
