import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from './Components/SplashScreen';
import Login from './Components/Login';
import Setup from './Components/Setup';
import AccountInfo from './Components/AccountInfo';
import VerificationDone from './Components/VerificationDone';
import Home from './Components/Home';
import Booked from './Components/Booked';

export default function App() {
  return (

  //  <VerificationDone></VerificationDone>
   <SafeAreaProvider>
    <SplashScreen/>
   </SafeAreaProvider>
  //  <Setup></Setup>
    // <AccountInfo></AccountInfo>
    // <Login></Login>
    //  <Booked></Booked>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});