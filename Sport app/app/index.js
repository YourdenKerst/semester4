import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import TopBar from "../components/TopBar";
import { exercises } from "../data/exercises"; // Zorg dat je het juiste pad naar exercises.js gebruikt

const Home = () => {
  const router = useRouter();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Haal favorieten op bij laden
    const fetchFavorites = async () => {
      const storedFavorites = await AsyncStorage.getItem("favorites");
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    };
    fetchFavorites();
  }, []);

  const getExerciseImage = (id) => {
    const images = {
      1: require("../assets/jump_squats.png"),
      2: require("../assets/high_knees.png"),
      3: require("../assets/box_jumps.png"),
      4: require("../assets/burpees.png"),
      5: require("../assets/lunges.png"),
    };
    return images[id] || require("../assets/default.png"); // Standaardafbeelding als er geen specifieke is
  };

  const addToFavorites = async (id) => {
    const updatedFavorites = [...favorites, id];
    setFavorites(updatedFavorites);
    await AsyncStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const removeFromFavorites = async (id) => {
    const updatedFavorites = favorites.filter((favId) => favId !== id);
    setFavorites(updatedFavorites);
    await AsyncStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const isFavorite = (id) => favorites.includes(id);

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <View className="flex-1 px-16">
        <TopBar />

        {/* Lijst met oefeningen */}
        <FlatList
          data={exercises}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ marginTop: 16 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              className="p-4 mb-4 border border-white rounded-lg shadow flex-row items-center bg-transparent"
              onPress={() => router.push(`/envi/${item.id}`)}
              style={{ overflow: "hidden", padding: 16 }}
            >
              <Image
                source={getExerciseImage(item.id)}
                style={{
                  width: 60,
                  height: 60,
                  marginRight: 16,
                  borderRadius: 8,
                }}
              />
              <View style={{ flex: 1 }}>
                <Text
                  className="text-lg font-semibold text-white"
                  numberOfLines={1}
                  style={{ flexWrap: "wrap" }}
                >
                  {item.name}
                </Text>
                <Text
                  className="text-sm text-accent"
                  numberOfLines={2}
                  style={{ flexWrap: "wrap" }}
                >
                  {item.description}
                </Text>
              </View>
              <TouchableOpacity
                className="ml-4 p-1 bg-white items-center justify-center"
                onPress={() =>
                  isFavorite(item.id)
                    ? removeFromFavorites(item.id)
                    : addToFavorites(item.id)
                }
                style={{ width: 30, height: 30 }}
              >
                <Text className="text-primary text-lg">
                  {isFavorite(item.id) ? "✓" : "+"}
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
