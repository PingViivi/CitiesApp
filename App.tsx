import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screen } from 'react-native-screens';
import Cities from './components/Cities';
import AddCity from './components/AddCity';
import Locations from './components/Locations';
import AddLocation from './components/AddLocation';
import Info from './components/Info';
import { testData } from './components/TestData';
import { colors } from './components/Colors';
import CitiesProvider from './Context/CitiesProvider';

export interface Location {
  name: string,
  info: string,
  id: string,
}
export interface City {
  name: string,
  country: string,
  locations: Location[],
  id: string,
}

type RootStackParamList = {
  Home: {cities: City[], setCities: (cities: City[]) => void};
  AddCity: undefined;
  Locations: {locations: Location[], setLocations: (locations: Location[]) => void};
  AddLocation: {city: City, location?: Location[]};
  Info: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {

  return (
    <NavigationContainer>
      <CitiesProvider>
        <Stack.Navigator 
        initialRouteName='Home'
        screenOptions={{
          headerStyle: {
            backgroundColor: "fff",
          },
          headerTintColor: colors.black,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }}
        >
          <Stack.Screen name="Home" component={Cities}></Stack.Screen>
          <Stack.Screen name="AddCity" component={AddCity}></Stack.Screen>
          <Stack.Screen name="Locations" component={Locations}></Stack.Screen>
          <Stack.Screen name="AddLocation" component={AddLocation}></Stack.Screen>
          <Stack.Screen name="Info" component={Info}></Stack.Screen>
        </Stack.Navigator>
      </CitiesProvider>
    </NavigationContainer>
  );
}

export default App;