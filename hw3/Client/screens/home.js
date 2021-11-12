import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Button, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { globalStyles } from '../styles/global';

export default function HomeScreen({ navigation }) {

const [isLoading, setLoading] = useState(true);
const [data, setData] = useState([]);

useEffect(() => {
    fetch('https://cs262-monopoly.herokuapp.com/playerScores')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
}, []);



    /* Hardcode a "database"/list of movies. */
    // const [reviews, setReviews] = useState([
    //     { title: {item.name}, rating: 7.9, key: '1',
    //         description: 'A man is picked up by a fishing boat, bullet-riddled and suffering from amnesia, before racing to elude assassins and attempting to regain his memory.'},
    //     { title: "The Bourne Supremacy", rating: 7.7, key: '2',
    //         description: 'When Jason Bourne is framed for a CIA operation gone awry, he is forced to resume his former life as a trained assassin to survive.'},
    //     { title: "The Bourne Ultimatum", rating: 8.0, key: '3',
    //         description: 'Jason Bourne dodges a ruthless C.I.A. official and his Agents from a new assassination program while searching for the origins of his life as a trained killer.'},
    // ]);

    return (
        <View style= {globalStyles.container}>
            {/* Get rid of that ugly button and, instead, display our list of movies. */}
            {isLoading ? <ActivityIndicator/> : (
            <FlatList 
            data={data} 
            keyExtractor={({ id }, index) => id.toString()}
            renderItem={({ item })=> (
                <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
                    <Text style= {globalStyles.title}>{ item.name }</Text>
                </TouchableOpacity>
            )} /> )}
        </View>
    );
}






