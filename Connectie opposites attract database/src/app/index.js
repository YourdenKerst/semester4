import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ChatPage from "./Pages/ChatPage";
import LoginScreen from "./Pages/LoginScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ChatPage" component={ChatPage} options={{ headerShown: false }} />
      </Stack.Navigator>
  );
}
