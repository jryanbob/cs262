import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, KeyboardAvoidingView, TextInput } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { globalStyles } from './styles/global';
import homeScreen from "./screens/homeScreen";
import patientFormScreen from "./screens/patientFormScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Online Patient Uploading Software (OPUS)" component={homeScreen}   //home page
      />

      <Stack.Screen name="Patient Form Input" component={patientFormScreen}      //patient information input page
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;