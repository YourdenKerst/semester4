import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/MaterialIcons";

const TopBar = () => {
  const router = useRouter();

  return (
    <View className="flex-row items-center justify-between py-6 bg-primary">
      {/* Drawer Menu */}
        <TouchableOpacity onPress={() => router.push("/drawer")}>
        <Icon2 name="menu" size={40} color="white" />
        </TouchableOpacity>


      {/* Notifications */}
        <TouchableOpacity onPress={() => router.push("/notification")}>
        <Icon2 name="notifications-none" size={40} color="white" /> {/* Replace with your color */}
        </TouchableOpacity>
    </View>
  );
};

export default TopBar;
