import React, { useState, useEffect} from 'react';
import { Button, View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { globalStyles } from '../styles/global';

export default function HomeScreen({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);


    const getPlayers = async () => {
        try {
         const response = await fetch('https://cs262-monopoly-service.herokuapp.com/players', {mode: 'no-cors'});
         const json = await response.json();
         setData(json);
       } catch (error) {
         console.error(error);
       } finally {
         setLoading(false);
       }
     }

    useEffect(() => {
        getPlayers();
    }, []);



    return (
        <View style={{ flex: 1, padding: 24 }}>
          {isLoading ? <ActivityIndicator/> : (
            <FlatList
              data={data}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <Text>Hello{ item.email} </Text>
              )}
            />
          )}
        </View>
      );
}
