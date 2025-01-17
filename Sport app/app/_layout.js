import { Stack } from "expo-router";

import 'react-native-gesture-handler';
import "./global.css";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }}/>
      <Stack.Screen name="notification" options={{ headerShown: false }} />
      <Stack.Screen name="drawer" options={{ headerShown: false }} />
      <Stack.Screen name="favorites" options={{ headerShown: false }} />
      <Stack.Screen name="envi/[id]" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
