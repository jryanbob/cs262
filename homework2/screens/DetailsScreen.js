import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { globalStyles } from '../styles/global';

export default function DetailsScreen({ route, navigation }) {

    return (
        <View style={{ flex: 1, padding: 20}}>
            {/* Display the fields of the received movie object. */}
            <Text style={globalStyles.title}>{ route.params.email }</Text>
            <Text style={globalStyles.detailsPageText}> id: { route.params.id }</Text>
            <Text style={globalStyles.detailsPageText}> AKA: { route.params.name }</Text>
        </View>
    );
}
