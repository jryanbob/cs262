import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { globalStyles } from '../styles/global';

export default function AboutScreen({ route, navigation }) {

    return (
        <View style={{ flex: 1, padding: 20}}>
            The application access information on monopoly players.
        </View>
    );
}