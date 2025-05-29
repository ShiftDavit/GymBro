import { useEffect, useState, useContext } from "react";
import { Text, FlatList, View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import getLoggedExercisesAsync from "../../helper/getLoggedExercisesAsync"
import colors from "../../constants/colors.json"
import { StatusBar } from "expo-status-bar";
import { ExerciseListContext } from "../../contexts/ExerciseListContext";
import { LineChart } from "react-native-gifted-charts";

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
    <View style={{flex:1, alignItems:"center", justifyContent:"center", marginBottom: 5}}>
        <Text style={{ fontSize: 24, fontWeight:800, color: "white" }}>{item.name}</Text>
    </View>

    <View style={{flex:1, backgroundColor: "white"}}/>

    <View style={{flex:1, flexDirection:"row", justifyContent:"center"}}>
        <View style={{flex:1, alignItems:"center"}}>
            <Text style={{ fontSize: 15, fontWeight:700, color: "white", marginBottom:10 }}>Sets: {item.sets || "N/A"} | Reps: {item.reps || "N/A"} | Weight: {item.weight || "N/A"} lbs</Text>
            <Text style={{ fontSize: 15, fontWeight:700, color: "white"}}>
              {
                new Date(item.date).toLocaleDateString()
              }
            </Text>
        </View>
        {/* <View style={{flex:1, alignItems:"center"}}>
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
        </View> */}
    </View>
    
  </View>
}

const selectedExercise = "Bench Press"

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
    const {ExerciseList, updateExerciseList} = useContext(ExerciseListContext);
    const [exerciseData, setExerciseData] = useState([]);
    const [graphData, setGraphData] = useState([]);
    
    const transformData = (workouts) => {

      const finalList = [];

      for (let item of workouts){
        for (let ex of item.exercises){
          finalList.push({...ex, date: item.date})
        }
      }

      return finalList.sort((a,b) => (new Date(b.date).getTime() - new Date(a.date).getTime()))
    };

    const transformToGraphData = (data, exerciseName) => {

      const newData = [...data]

      return newData.sort((a,b) => (-new Date(b.date).getTime() + new Date(a.date).getTime())).map(ex => {
        if (ex.name!==exerciseName)return null
        return {value: ex.sets*ex.reps*ex.weight, label: new Date(ex.date).toLocaleDateString()}
      }).filter(Boolean)
    }

    useEffect(()=>{
        const data = transformData(ExerciseList)
        setExerciseData(data);

        const graphData = transformToGraphData(data, selectedExercise);
        setGraphData(graphData);
  }, [selectedExercise, ExerciseList]);

    return(
        <SafeAreaView style={{backgroundColor: "gainsboro", padding:10}}>
            <StatusBar style="light" />
            
            <ScrollView
                style={{height: "100%"}}            
            >

                <Card title={"Progress Chart"+" "+selectedExercise}>
                    <LineChart
                        data={graphData}
                        width={250}
                        spacing={70}
                        yAxisLabelSuffix=" lbs"
                        xAxisLabelTextStyle={{ marginLeft: 10, fontSize: 10 }}
                        yAxisLabelTextStyle={{fontSize: 10}}
                        yAxisLabelWidth={60}
                        noOfSections={4}
                        xAxis
                        showValuesAsDataPoints
                        thickness={3}
                        color="#007AFF"
                        // isAnimated
                        // animationDuration={500}
                        />
                </Card>

                <Card title="Exercise History">
                    <FlatList
                        data={exerciseData || []}
                        vertical
                        //keyExtractor={(item, index) => item.id?.toString() || Math.floor(Math.random() * 100).toString()}
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
      borderRadius: 10,
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOpacity:0.4,
        elevation: 2,
        shadowRadius: 4,
      margin: 8,
      //marginVertical: 8,
      overflow: 'visible',
    },
    header: {
      padding: 16,
      flex:1
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    content: {
        flex:1,
      padding: 16,
    },
  });