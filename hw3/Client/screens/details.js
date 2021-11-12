import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { globalStyles } from '../styles/global';

export default function DetailsScreen({ route, navigation }) {

    return (
        <View style= {globalStyles.container}>
            {/* Display the fields of the received movie object. */}
            <Text style= {globalStyles.title}>{ route.params.name }</Text>
            <Text>Score: { route.params.score }</Text>
            {/*<Text>Alias: { route.params.name }</Text>*/}
        </View>
    );
}