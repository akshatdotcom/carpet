import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import {StatusBar} from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import SplashScreen from './Components/SplashScreen';
import Login from './Components/Login';
import Setup from './Components/Setup';
import AccountInfo from './Components/AccountInfo';
import VerificationDone from './Components/VerificationDone';
import Home from './Components/Home';
import Booked from './Components/Booked';
import Preferences from './Components/Preferences';
import SearchPage from './Components/SearchPage';
import BookingsOrders from './Components/BookingsOrders';
import BookingCard from './Components/BookingCard';
import BookingSelection from './Components/BookingSelection';
import TestFlexbox from './Components/TestFlexbox';
import ChoosingService from './Components/ChoosingService';
import Main from './Components/Main';
import Tabs from './Components/Tabs';
import BookingDetails from './Components/BookingDetails';
import Inbox from './Components/Inbox';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications



const Stack = createNativeStackNavigator();


export default function App() {
  return (
  // <Setup></Setup>

  // <SafeAreaProvider style={styles.container}>
  //    <BookingsOrders></BookingsOrders>
  // </SafeAreaProvider>

  // // <SafeAreaProvider style={styles.container}>
  //   <VerificationDone></VerificationDone>
  // // </SafeAreaProvider>

// //  <Preferences></Preferences>
      
//  <BookingsOrders></BookingsOrders>

 <NavigationContainer style = {styles.container}>
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    style={styles.navigator}
  >
    <Stack.Screen
      name="SplashScreen"
      component={SplashScreen}
    />

    <Stack.Screen
      name="Preferences"
      component={Preferences}
    />

    <Stack.Screen
      name="Main"
      component={Main}
    />

    <Stack.Screen
      name="Tabs"
      component={Tabs}
    />

    <Stack.Screen
      name="BookingSelection"
      component={BookingSelection}
    />

    <Stack.Screen
      name="BookingDetails"
      component={BookingDetails}
    />

    <Stack.Screen
      name="ChoosingService"
      component={ChoosingService}
    />

    
  </Stack.Navigator>
 </NavigationContainer> 

//  <SafeAreaProvider style={styles.container}>
//   <ChoosingServices></ChoosingServices>
//  </SafeAreaProvider> 

//  <BookingSelection></BookingSelection>

  // <SafeAreaProvider style={styles.container}>
  //   <BookingsOrders></BookingsOrders>
  // </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#74AB9D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigator: {
    backgroundColor: '#74AB9D',
  },
});