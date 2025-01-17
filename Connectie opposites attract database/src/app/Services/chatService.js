import { collection, addDoc, onSnapshot, query, orderBy, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../Services/firebaseConfig";

export const sendMessage = async (text, user) => {
  try {
    await addDoc(collection(db, "messages"), {
      text,
      user,
      createdAt: new Date(),
    });
  } catch (err) {
    console.error("Error saving message:", err);
  }
};

export const fetchMessages = (setMessages) => {
  const q = query(collection(db, "messages"), orderBy("createdAt", "asc"));
  return onSnapshot(q, (snapshot) => {
    const msgs = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setMessages(msgs);
  });
};

export const deleteAllMessages = async () => {
  try {
    const messagesCollection = collection(db, "messages");
    const snapshot = await getDocs(messagesCollection);

    // Loop door alle documenten en verwijder ze
    const deletePromises = snapshot.docs.map((document) =>
      deleteDoc(doc(db, "messages", document.id))
    );

    await Promise.all(deletePromises);
    console.log("Alle berichten zijn verwijderd.");
  } catch (error) {
    console.error("Fout bij het verwijderen van berichten:", error.message);
  }
};

// Default export (een lege placeholder)
export default { sendMessage, fetchMessages };
