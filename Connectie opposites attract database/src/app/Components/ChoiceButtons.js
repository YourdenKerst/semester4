import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function ChoiceButtons({ question }) {
  return (
    <View style={styles.container}>
      <Text style={styles.question}>{`“${question}”`}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={[styles.button, styles.buttonPurple]}>
          <Text style={styles.buttonText}>Zoet</Text>
        </TouchableOpacity>
        <Image
          source={require("../Img/paarse_magneet.png")}
          style={styles.magnet}
        />
        <Image
          source={require("../Img/oranje_magneet.png")}
          style={styles.magnet}
        />
        <TouchableOpacity style={[styles.button, styles.buttonOrange]}>
          <Text style={styles.buttonText}>Zout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 10,
  },
  question: {
    color: "#FF9800",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    padding: 10,
    borderRadius: 20,
  },
  buttonPurple: {
    backgroundColor: "#6A1B9A",
    marginRight: 10,
  },
  buttonOrange: {
    backgroundColor: "#FF9800",
    marginLeft: 10,
  },
  buttonText: {
    color: "#fff",
  },
  magnet: {
    width: 30,
    height: 30,
    marginHorizontal: 5,
  },
});
