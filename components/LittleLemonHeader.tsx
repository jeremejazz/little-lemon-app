import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LittleLemonHeader() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text
          style={styles.text}
        >
          Little Lemon
        </Text>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ec9973",
  },
  text: {
    fontSize: 30,
    color: "black",
    textAlign: "center",
  },
});
