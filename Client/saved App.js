import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, KeyboardAvoidingView, TextInput } from "react-native";
import { globalStyles } from './styles/global';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={globalStyles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={globalStyles.centeredView}>
          <View style={globalStyles.modalView}>
            <Text style={globalStyles.modalText}>Add a new patient</Text>

            <TextInput style={globalStyles.input, globalStyles.fname} placeholder={'First name'} />
            <TextInput style={globalStyles.input, globalStyles.lname} placeholder={'Last name'} />
            <TextInput style={globalStyles.input, globalStyles.dob} placeholder={'Date of birth'} />


            <Pressable
              style={[globalStyles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={globalStyles.textStyle2}>Add Patient</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable
        style={[globalStyles.buttonAdd]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={globalStyles.textStyle}>+</Text>
      </Pressable>
    </View>
  );
};



export default App;
