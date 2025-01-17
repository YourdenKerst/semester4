import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { sendMessage, fetchMessages } from "../Services/chatService";
import Header from "../Components/Header";
import ChoiceButtons from "../Components/ChoiceButtons";
import MessageBubble from "../Components/MessageBubble";
import InputBar from "../Components/InputBar";
import { auth, db, app } from "../Services/firebaseConfig";
 // Firebase Authentication

// Twee vaste gebruikers
const USER_ONE = "user1@example.com";
const USER_TWO = "user2@example.com";

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const currentUser = auth.currentUser?.email || USER_ONE; // Huidige gebruiker, standaard USER_ONE

  useEffect(() => {
    const unsubscribe = fetchMessages(setMessages);
    return () => unsubscribe();
  }, []);

  const handleSend = () => {
    if (input.trim()) {
      sendMessage(input, currentUser);
      setInput("");
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header title="Mandy" status="Typing..." />

      {/* Stelling met magneten */}
      <ChoiceButtons question="Zoete of zoute popcorn?" />

      {/* Chat berichten */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MessageBubble
            text={item.text}
            sender={item.user === currentUser ? "right" : "left"}
            isCurrentUser={item.user === currentUser} // Nieuw voor styling
          />
        )}
        contentContainerStyle={styles.messageContainer}
      />

      {/* Input bar */}
      <InputBar value={input} onChangeText={setInput} onSend={handleSend} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  messageContainer: {
    flexGrow: 1,
    padding: 16,
    justifyContent: "flex-end",
  },
});
