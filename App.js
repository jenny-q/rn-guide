import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMore, setIsAddMode] = useState([]);

  const addGoalBtn = goalTitle => {
    setCourseGoals(currentGoals => [...currentGoals,
      {id: Math.random().toString(), value: goalTitle}
    ]);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput 
      visible = { isAddMore}
      onAddGoal = {addGoalBtn} />
      <FlatList 
      data={courseGoals} 
      renderItem={ itemData => (
        <GoalItem
        id = {itemData.item.id} 
        onDelete = {removeGoalHandler}
        title={itemData.item.value}></GoalItem>
      )} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  screen: {
    padding: 30,
  }
});
