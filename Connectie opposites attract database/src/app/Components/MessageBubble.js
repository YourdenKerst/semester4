import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MessageBubble({ text, sender, isCurrentUser }) {
  return (
    <View
      style={[
        styles.bubble,
        sender === "left" ? styles.bubbleLeft : styles.bubbleRight,
      ]}
    >
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    maxWidth: "70%",
    padding: 12,
    marginVertical: 5,
    borderRadius: 20,
  },
  bubbleLeft: {
    backgroundColor: "#6A1B9A", // Paars
    alignSelf: "flex-start",
  },
  bubbleRight: {
    backgroundColor: "#FF9800", // Oranje
    alignSelf: "flex-end",
  },
  text: {
    color: "#fff",
    fontSize: 16,
  },
});
