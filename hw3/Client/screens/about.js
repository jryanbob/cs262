import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { globalStyles } from '../styles/global';

export default function AboutScreen({ route, navigation }) {
    return (<View>
        <Text style={{padding: 20,}}>This application lists names and scores of players in the monopoly service.</Text>
    </View>)
}