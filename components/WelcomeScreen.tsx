import * as React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function WelcomeScreen() {
  return (
    <ScrollView style={{ flex: 1 }} indicatorStyle="white">
      <Text
        style={styles.title}
      >
        Welcome to Little Lemon
      </Text>
      <Text style={styles.text}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title:{
          padding: 40,
          fontSize: 50,
          color: "#EDEFEE",
          textAlign: "center",
        },
  text: {
    fontSize: 38,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
});
