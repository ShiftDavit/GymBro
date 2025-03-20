import { useEffect, useState } from "react";
import { Text, FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default DashboardScreen = () => {
    const [exerciseLog, setExerciseLog] = useState([]);
    
    useEffect(()=>{
        const fetchedExercises = [
            {
                "name": "Squat",
                "sets": 5,
                "reps": 12
            },
            {
                "name": "Bench",
                "sets": 4,
                "reps": 10
            },
        ]; //fetch using getLoggedExercisesAsync

        setExerciseLog(fetchedExercises);

        
    }, [])

    return(
        <SafeAreaView>
            <FlatList
                    data={exerciseLog}
                    style={{height:"100%"}}
                    renderItem={({ item }) => (
                      <View
                        style={{
                            flex:1,
                            padding: 15,
                            marginVertical: 5,
                            borderRadius: 10,
                            backgroundColor: "red"
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
