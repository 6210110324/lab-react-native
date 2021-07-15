import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Constants from 'expo-constants';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ZipCodeScreen from './sceen/ZipCodeScreen';

const Stack = createStackNavigator()

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ZipCodeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
 }
