import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { globalStyles } from './styles/global';
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import AboutScreen from "./screens/AboutScreen";
import Header from "./shared/header"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} 
        options={({ navigation }) => ({
        headerRight: () => (
        <Header navigation={navigation}/> )})}
        />
        
        <Stack.Screen name="Details" component={DetailsScreen} 
        options={({ navigation }) => ({
        headerRight: () => (
        <Header navigation={navigation}/> )})}
            />/>
        <Stack.Screen name="About" component={AboutScreen} 
        options={({ navigation }) => ({
            headerRight: () => (
            <Header navigation={navigation}/> )})}
            />/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
