import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList, Modal, ModalVisible, TextInput, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { globalStyles } from '../styles/global';
import { patientFormScreen } from '../screens/patientFormScreen';

export default function homeScreen({ route, navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={globalStyles.centeredView}>

      <Pressable
        style={[globalStyles.buttonAdd]}
        onPress={() => navigation.push('Patient Form Input')}    //pushes a patient form input page onto the navagation stack       ( used: https://reactnavigation.org/docs/params )
      >
        <Text style={globalStyles.textStyle}>+</Text>
      </Pressable>
    </View>
  )
}
