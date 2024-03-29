import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, 
  Platform, TouchableOpacity, Keyboard} from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems]
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>

      {/*Today's Tasks*/}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text> 

        <View style={styles.items}>
          {/* Tasks will go here */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              )
            })
          }
        </View>

      </View>

      {/*Write a task*/}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} value={task}
          onChangeText={text => setTask(text)}
        />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 165,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
items: {
  marginTop: 30,
},
writeTaskWrapper: {
  position: 'absolute',
  top: 80,
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
},
input: {
  paddingVertical: 15,
  paddingHorizontal: 15,
  borderColor: '#C0C0C0',
  backgroundColor: '#FFF',
  borderRadius: 60,
  borderWidth: 1,
  width: 250,
},
addWrapper: {
  width: 60,
  height: 60,
  backgroundColor: '#FFF',
  borderRadius: 60,
  justifyContent: 'center',
  alignItems: 'center',
},
addText: {},
});
