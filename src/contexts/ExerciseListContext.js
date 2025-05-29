import {createContext, useState} from 'react';

export const ExerciseListContext = createContext({
    ExerciseList: {},
    updateExerciseList: ()=>[]
});

export function ExerciseListContextProvider({ children }) {
    const [ExerciseList, updateExerciseList] = useState(
        [
        {
            _id: "664b0fc8abca62bba1e3a9c4",
            date: "2024-05-15T10:20:30.000Z",
            exercises: [
                { name: "Bench Press", sets: 3, reps: 8, weight: 135 },
                { name: "Deadlift", sets: 4, reps: 5, weight: 225 }
            ]
        },
        {
            _id: "664b0fd9abca62bba1e3a9c5",
            date: "2024-05-17T12:00:00.000Z",
            exercises: [
                { name: "Bench Press", sets: 3, reps: 10, weight: 145 },
                { name: "Deadlift", sets: 4, reps: 5, weight: 235 }
            ]
        },
        {
            _id: "664b0fd9abca62bba1e3a9c5",
            date: "2024-06-17T12:00:00.000Z",
            exercises: [
                { name: "Bench Press", sets: 3, reps: 10, weight: 165 },
                { name: "Deadlift", sets: 4, reps: 5, weight: 235 }
            ]
        },
        {
            _id: "664b0fd9abca62bba1e3a9c5",
            date: "2024-07-17T12:00:00.000Z",
            exercises: [
                { name: "Bench Press", sets: 3, reps: 10, weight: 185 },
                { name: "Deadlift", sets: 4, reps: 5, weight: 235 }
            ]
        }
    ]);
    
    return (
    <ExerciseListContext.Provider value={{ ExerciseList, updateExerciseList }}>
        {children}
    </ExerciseListContext.Provider>
  );
}