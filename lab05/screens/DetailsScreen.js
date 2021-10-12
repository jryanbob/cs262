import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { globalStyles } from '../styles/global';

export default function DetailsScreen({ route, navigation }) {

    return (
        <View style={{ flex: 1, padding: 20}}>
            {/* Display the fields of the received movie object. */}
            <View style={globalStyles.container}>{ route.params.title }</View>
            <View style={globalStyles.container}> { route.params.rating }</View>
            <View style={globalStyles.container}>{ route.params.description }</View>
        </View>
    );
}
