import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList, Modal, ModalVisible, TextInput, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { globalStyles } from '../styles/global';

export default function homeScreen({ route, navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={globalStyles.centeredView}>

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
    </View>
  )
}
