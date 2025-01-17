import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from "expo-router";

const Drawer = () => {
  const router = useRouter();

  return (
<SafeAreaView className="flex-1 bg-primary">
      {/* Header with Back Arrow */}
      <View className="absolute top-0 left-0 flex-row items-center p-6">
        <TouchableOpacity onPress={() => router.back()} className="mr-6">
          <Text className="text-white text-4xl">&#8592;</Text>
        </TouchableOpacity>
      </View>

      {/* Menu Items */}
      <View className="flex-1 items-center justify-center">
        <View className="items-center space-y-4">
          <TouchableOpacity
            onPress={() => router.push("/")}
            className="p-4 bg-transparent rounded-md"
          >
            <Text className="text-white text-2xl">Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/favorites")}
            className="p-4 bg-transparent rounded-md"
          >
            <Text className="text-white text-2xl">Favorites</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Drawer;