import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, initializeAuth, browserLocalPersistence, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";

// Firebase Configuratie
const firebaseConfig = {
  apiKey: "AIzaSyBso1k8x96oz_lJZkzX1_wHku8-Ot2nZzE",
  authDomain: "oppositesattract-4c477.firebaseapp.com",
  projectId: "oppositesattract-4c477",
  storageBucket: "oppositesattract-4c477.firebasestorage.app",
  messagingSenderId: "543761844984",
  appId: "1:543761844984:web:f4341f40057dd05fec090d",
  measurementId: "G-SEJCNR6ZMW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let auth;

// Controleer of het platform React Native of Web is
if (Platform.OS === "web") {
  auth = getAuth(app);
  auth.setPersistence(browserLocalPersistence); // Gebruik browserLocalPersistence voor web
} else {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage), // Gebruik AsyncStorage voor React Native
  });
}

export const db = getFirestore(app);
export { auth };
export default app;
