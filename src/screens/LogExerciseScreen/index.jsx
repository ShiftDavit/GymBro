import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import Slider from "@react-native-community/slider";

const exercises = [
  { id: "1", name: "Squats" },
  { id: "2", name: "Bench Press" },
  { id: "3", name: "Deadlift" },
  { id: "4", name: "Pull-ups" },
  { id: "5", name: "Push-ups" },
];

const ExercisePickerScreen = () => {
  const [selectedExercises, setSelectedExercises] = useState({});

  const toggleExercise = (exercise) => {
    setSelectedExercises((prev) => {
      if (prev[exercise.id]) {
        const updated = { ...prev };
        delete updated[exercise.id];
        return updated;
      } else {
        return { ...prev, [exercise.id]: { ...exercise, sets: 3, reps: 10 } };
      }
    });
  };

  const updateSetsReps = (id, type, value) => {
    setSelectedExercises((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [type]: Math.round(value),
      },
    }));
  };

  return (
    <>
    <SafeAreaView style={{ flex: 1, marginTop: 50, marginBottom: 100 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        Select Exercises
      </Text>
      <FlatList
        data={exercises}
        style={{flex:2}}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => toggleExercise(item)}
            style={{
              padding: 15,
              marginVertical: 5,
              backgroundColor: selectedExercises[item.id] ? "#4CAF50" : "#ddd",
              borderRadius: 10,
            }}
          >
            <Text style={{ fontSize: 18 }}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      {Object.values(selectedExercises).length > 0 && (
        <ScrollView style={{ flex:1, borderColor:"black", borderWidth:3 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Adjust Sets & Reps</Text>
          {Object.values(selectedExercises).map((exercise) => (
            <View key={exercise.id} style={{ marginVertical: 10 }}>
              <Text style={{ fontSize: 16 }}>{exercise.name}</Text>
              <Text>Sets: {exercise.sets}</Text>
              <Slider
                minimumValue={1}
                maximumValue={10}
                step={1}
                value={exercise.sets}
                onValueChange={(value) => updateSetsReps(exercise.id, "sets", value)}
              />
              <Text>Reps: {exercise.reps}</Text>
              <Slider
                minimumValue={1}
                maximumValue={20}
                step={1}
                value={exercise.reps}
                onValueChange={(value) => updateSetsReps(exercise.id, "reps", value)}
              />

              <TouchableOpacity
              onPress={() => toggleExercise(exercise)}
                style={{
                  padding: 15,
                  marginVertical: 5,
                  backgroundColor: "blue",
                  borderRadius: 10,
                  width: 100,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text style={{ fontSize: 18, color:"white" }}>Log</Text>
              </TouchableOpacity> 
            </View>
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
    </>
  );
};

export default ExercisePickerScreen;
