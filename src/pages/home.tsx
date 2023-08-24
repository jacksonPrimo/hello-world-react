import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from '../components/task';
import ButtonAddTask from '../components/buttonAddTask';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed'
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  tasks: {
    flexDirection: 'column'
  },
  buttonAdd: {
    position: 'absolute',
    bottom: 0,
    right: 50
    // right: 0,
    // left: 0,
  }
});


const Home = () => {
  const taskList = [
    {
      title: "Caminhar",
      checked: false
    },
    {
      title: "Tcc",
      checked: false
    },
  ]
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.title}>Today's tasks</Text>
        <View style={styles.tasks}>
          { taskList.map(task => <Task name={task.title}></Task>) }
        </View>
      </View>
      <View style={styles.buttonAdd}>
        <ButtonAddTask></ButtonAddTask>
      </View>
    </View>
  )
};

export default Home