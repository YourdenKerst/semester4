import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db, app } from "../Services/firebaseConfig";

const USER_ONE = { email: "user1@example.com", password: "password1" };
const USER_TWO = { email: "user2@example.com", password: "password2" };

export default function LoginScreen({ navigation }) {
  // Login als User1
  const handleLoginUser1 = async () => {
    try {
      await signInWithEmailAndPassword(auth, USER_ONE.email, USER_ONE.password);
      console.log("Ingelogd als User1");
      navigation.replace("ChatPage");
    } catch (error) {
      console.error("Fout bij inloggen als User1:", error.message);
    }
  };

  // Login als User2
  const handleLoginUser2 = async () => {
    try {
      await signInWithEmailAndPassword(auth, USER_TWO.email, USER_TWO.password);
      console.log("Ingelogd als User2");
      navigation.replace("ChatPage");
    } catch (error) {
      console.error("Fout bij inloggen als User2:", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kies een account:</Text>
      <Button title="Login als User1" onPress={handleLoginUser1} />
      <Button title="Login als User2" onPress={handleLoginUser2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 16 },
  title: { fontSize: 20, textAlign: "center", marginBottom: 20 },
});
