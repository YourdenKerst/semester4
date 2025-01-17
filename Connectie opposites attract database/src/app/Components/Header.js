import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../Services/firebaseConfig"; // Zorg dat auth correct is geïmporteerd
import { useNavigation } from "@react-navigation/native";
import { deleteAllMessages } from "../Services/chatService"; // Functie om chats te verwijderen

export default function Header({ title, status }) {
  const navigation = useNavigation();

  // Functie om uit te loggen
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("Succesvol uitgelogd");
      navigation.replace("LoginScreen"); // Navigeer terug naar het loginscherm
    } catch (error) {
      console.error("Fout bij uitloggen:", error.message);
      alert("Er is een fout opgetreden bij het uitloggen.");
    }
  };

  // Functie om chats te verwijderen
  const handleDeleteChats = async () => {
    try {
      await deleteAllMessages();
      alert("Alle chats zijn verwijderd!");
    } catch (error) {
      console.error("Fout bij verwijderen:", error.message);
      alert("Er is een fout opgetreden bij het verwijderen van de chats.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Titel en status */}
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.status}>{status}</Text>
      </View>

      {/* Knoppen */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={handleDeleteChats} style={styles.button}>
          <Text style={styles.buttonText}>Verwijder Chats</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6A1B9A",
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  status: {
    color: "#EEE",
    fontSize: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 10,
  },
  button: {
    backgroundColor: "#FF3B30",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  logoutButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});
