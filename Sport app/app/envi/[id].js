import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Accelerometer } from "expo-sensors";
import { exercises } from "../../data/exercises";

const ExerciseDetails = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const [exerciseData, setExerciseData] = useState({
    repsCompleted: 0, // Bijgehouden herhalingen
  });
  const [isTracking, setIsTracking] = useState(false);
  const [accelerometerData, setAccelerometerData] = useState({ x: 0, y: 0, z: 0 });
  const [thresholdReached, setThresholdReached] = useState(false);

  const exercise = exercises.find((e) => e.id === parseInt(id, 10));

  const getExerciseImage = (id) => {
    const images = {
      1: require("../../assets/jump_squats.png"),
      2: require("../../assets/high_knees.png"),
      3: require("../../assets/box_jumps.png"),
      4: require("../../assets/burpees.png"),
      5: require("../../assets/lunges.png"),
    };
    return images[id] || require("../../assets/default.png");
  };

  if (!exercise) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-primary">
        <Text className="text-white text-lg">Oefening niet gevonden.</Text>
        <TouchableOpacity onPress={() => router.back()}>
          <Text className="text-blue-500 mt-4">Ga terug</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  const startTracking = () => {
    setIsTracking(true);
    Accelerometer.setUpdateInterval(100); // Update elke 100ms

    Accelerometer.addListener((data) => {
      setAccelerometerData(data);

      // Detecteer een sprong of sterke beweging op de Z-as
      if (data.z > 1.5 && !thresholdReached) {
        setThresholdReached(true);
        setExerciseData((prev) => ({
          repsCompleted: prev.repsCompleted + 1,
        }));
      } else if (data.z < 1) {
        setThresholdReached(false);
      }
    });
  };

  const stopTracking = () => {
    setIsTracking(false);
    Accelerometer.removeAllListeners();
  };

  useEffect(() => {
    return () => Accelerometer.removeAllListeners();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-primary">
      {/* Header with Back Arrow */}
      <View className="absolute top-0 left-0 flex-row items-center p-6">
        <TouchableOpacity onPress={() => router.back()} className="mr-6">
          <Text className="text-white text-4xl">&#8592;</Text>
        </TouchableOpacity>
      </View>

      {/* Exercise Content */}
      <View className="flex-1 mt-40 items-center px-8">
        <Image
          source={getExerciseImage(exercise.id)}
          style={{ width: 200, height: 200, borderRadius: 16, marginBottom: 16 }}
        />
        <Text className="text-2xl font-bold text-white text-center mb-4">{exercise.name}</Text>
        <Text className="text-lg text-white text-center mb-6">{exercise.description}</Text>

        <Text className="text-lg text-white text-center mb-6">
          Herhalingen voltooid: {exerciseData.repsCompleted}
        </Text>

        {isTracking ? (
          <TouchableOpacity
            onPress={stopTracking}
            className="mt-4 p-4 bg-red-500 rounded-lg w-full"
          >
            <Text className="text-white text-center">Stop Tracking</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={startTracking}
            className="mt-4 p-4 bg-green-500 rounded-lg w-full"
          >
            <Text className="text-white text-center">Start Tracking</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ExerciseDetails;
