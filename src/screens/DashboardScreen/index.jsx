import { useEffect, useState } from "react";
import { Text, FlatList, View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import getLoggedExercisesAsync from "../../helper/getLoggedExercisesAsync"
import colors from "../../constants/colors.json"
import { StatusBar } from "expo-status-bar";


const ExerciseListItem = ({item}) => {
    if (!item) return null;
    
    return <View
    style={{
        flex:1,
        padding: 15,
        margin: 5,
        borderRadius: 10,
        backgroundColor: colors.Grey
    }}
  >
    <View style={{flex:1, alignItems:"center", justifyContent:"center", marginBottom: 10}}>
        <Text style={{ fontSize: 24, fontWeight:800, color: "white" }}>{item.name}</Text>
    </View>

    <View style={{flex:1, flexDirection:"row", justifyContent:"center"}}>
        <View style={{flex:1, alignItems:"center"}}>
            <Text style={{ fontSize: 20, fontWeight:700, color: "white", marginBottom:10 }}>Sets</Text>
            <Text style={{ fontSize: 18, fontWeight:600, color: "white"  }}>{item.sets || "N/A"}</Text>
        </View>

        <View style={{backgroundColor:"white", flex:0.01}} />

        <View style={{flex:1, alignItems:"center"}}>
            <Text style={{ fontSize: 20, fontWeight:700, color: "white", marginBottom:10 }}>Weight</Text>
            <Text style={{ fontSize: 18, fontWeight:600, color: "white"  }}>{item.weight || "N/A"}</Text>
        </View>

        <View style={{backgroundColor:"white", flex:0.01}} />

        <View style={{flex:1, alignItems:"center"}}>
            <Text style={{ fontSize: 20, fontWeight:700, color: "white", marginBottom:10 }}>Reps</Text>
            <Text style={{ fontSize: 18, fontWeight:600, color: "white"  }}>{item.reps || "N/A"}</Text>
        </View>
    </View>
    
  </View>
}

const Card = ({title, children, contentStyle}) => (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={[styles.content, contentStyle]}>
        {children}
      </View>
    </View>
)

export default DashboardScreen = () => {
    const [exerciseLog, setExerciseLog] = useState([]);
    
    useEffect(()=>{
        const fetchedExercises = [
            {
                "name": "Squat",
                "sets": 5,
                "reps": 12,
                "weight": 315
            },
            {
                "name": "Bench",
                "sets": 4,
                "reps": 10,
                "weight": 225
            },
            {
                "name": "Deadlift",
                "sets": 5,
                "reps": 3, 
                // "weight": 405
            },
            {
                "name": "Deadlift",
                "sets": 5,
                "reps": 3, 
                // "weight": 405
            },
        ]; //default list, fetch using getLoggedExercisesAsync

        //fetchedExercises = getLoggedExercisesAsync()

        setExerciseLog(fetchedExercises);

    }, [])

    return(
        <SafeAreaView style={{backgroundColor: "gainsboro", padding:10}}>
            <StatusBar style="light" />
            
            <ScrollView
                style={{height: "100%"}}            
            >
                <Card title="Exercise History">
                    <FlatList
                        data={exerciseLog || []}
                        horizontal
                        keyExtractor={(item, index) => item.id?.toString() || index.toString()}
                        renderItem={({ item }) => (
                        <ExerciseListItem item={item} />
                        )}
                        style={{ flex: 1 }}
                        contentContainerStyle={{ paddingHorizontal: 16 }}
                        showsHorizontalScrollIndicator={false}
                    />
                </Card>

                <Card title="Exercise History">
                    <FlatList
                        data={exerciseLog || []}
                        horizontal
                        keyExtractor={(item, index) => item.id?.toString() || index.toString()}
                        renderItem={({ item }) => (
                        <ExerciseListItem item={item} />
                        )}
                        style={{ flex: 1 }}
                        contentContainerStyle={{ paddingHorizontal: 16 }}
                        showsHorizontalScrollIndicator={false}
                    />
                </Card>
            </ScrollView>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    card: {
        flex:1,
      borderRadius: 8,
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 6,
      shadowOffset: { width: 0, height: 2 },
      elevation: 3,
      margin: 8,
      marginVertical: 8,
      overflow: 'hidden',
    },
    header: {
      padding: 16,
      backgroundColor: '#f9f9f9',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    content: {
      padding: 16,
    },
  });