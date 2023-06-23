import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Linking, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from '../containers/MapScreen/Mapview';
import ResultScreen from '../containers/ResultsScreen/results';
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as RF,
} from 'react-native-responsive-dimensions';
//import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigationRef } from '../utils/NavigationService';

const Stack = createStackNavigator();


const Navigator = (props) => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false, gestureEnabled: false }}
          name="MapScreen"
          component={MapScreen}
        />
        <Stack.Screen
          options={{ headerShown: false, gestureEnabled: false }}
          name="ResultScreen"
          component={ResultScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default Navigator;
