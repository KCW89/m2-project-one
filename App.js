import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Notifications from 'expo-notifications';
import './tasks/geofenceTask'; // loading this file defines the background task for the OS
import MapScreen from './screens/MapScreen';
import DetailScreen from './screens/DetailScreen';
import FavouritesScreen from './screens/FavouritesScreen';

// Provided: show an arrival alert even if the app happens to be open.
Notifications.setNotificationHandler({
  handleNotification: async () => ({ shouldShowBanner: true, shouldShowList: true, shouldPlaySound: false, shouldSetBadge: false }),
});

const Stack = createStackNavigator();

// Provided: three screens. Map is the home screen; Detail and Favourites open on top of it.
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Map">
        <Stack.Screen name="Map" component={MapScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Library' }} />
        <Stack.Screen name="Favourites" component={FavouritesScreen} options={{ title: 'Saved libraries' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
