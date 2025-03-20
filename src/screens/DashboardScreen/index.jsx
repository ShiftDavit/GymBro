import { useEffect, useState } from "react";
import { Text, FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default DashboardScreen = () => {
    const [exerciseLog, setExerciseLog] = useState({
        0: {
            "name": "Squat",
            "sets": 5,
            "reps": 12
        },
        1: {
            "name": "Bench",
            "sets": 4,
            "reps": 10
        }

    })
    
    // useEffect(()=>{
    //     const fetchedExercises = [
    //         {
    //             "name": "Squat",
    //             "sets": 5,
    //             "reps": 12
    //         },
    //         {
    //             "name": "Bench",
    //             "sets": 4,
    //             "reps": 10
    //         },
    //     ]; //fetch using getLoggedExercisesAsync

    //     setExerciseLog(fetchedExercises.reduce((obj, element, index) => {
    //         obj[index] = element;
    //         return obj;
    //       }, {}));

        
    // }, [])

    return(
        <SafeAreaView>
            <FlatList
                    data={exerciseLog}
                    style={{flex:1}}
                    renderItem={({ item }) => (
                      <View
                        style={{
                          padding: 15,
                          marginVertical: 5,
                          borderRadius: 10,
                        }}
                      >
                        <Text style={{ fontSize: 18 }}>Name: {item.name}</Text>
                        <Text style={{ fontSize: 18 }}>Sets: {item.sets}</Text>
                        <Text style={{ fontSize: 18 }}>Reps: {item.reps}</Text>
                      </View>
                    )}
                  />
        </SafeAreaView>
    );
};
