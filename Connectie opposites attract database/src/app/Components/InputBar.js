import React from "react";
import { View, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function InputBar({ value, onChangeText, onSend }) {
  return (
    <View style={styles.container}>
      <Image source={require("../Img/smiley.png")} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Type your message"
        placeholderTextColor="#999"
        value={value}
        onChangeText={onChangeText}
      />
      <TouchableOpacity onPress={onSend} style={styles.sendButton}>
        <Image source={require("../Img/logo.png")} style={styles.sendIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  input: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 40,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  sendButton: {
    marginLeft: 10,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  sendIcon: {
    width: 24,
    height: 24,
  },
});
