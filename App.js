import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import {StatusBar} from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

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

export default function App() {
  return (
  

  //  <VerificationDone></VerificationDone>
  //  <SafeAreaProvider>
  //   <SplashScreen/>
  //  </SafeAreaProvider>
  //  <Setup></Setup>
  <SafeAreaProvider style={styles.container}>
     <BookingsOrders></BookingsOrders>
  </SafeAreaProvider>
    // <Login></Login>
    //  <Booked></Booked>
    // <Preferences></Preferences>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#74AB9D',
    alignItems: 'center',
    justifyContent: 'center',
  },
});