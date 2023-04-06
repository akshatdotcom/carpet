import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import SplashScreen from './Pages/SplashScreen';
import Setup from './Pages/Setup'
import Login from './Pages/Login'
import AccountInfo from './Pages/AccountInfo';
import VerificationDone from './Pages/VerificationDone';
import Preferences from './Pages/Preferences';
import Home from './Pages/Home';


export default function App() {
  return (
    
      <SafeAreaProvider>
        <Preferences></Preferences>
      </SafeAreaProvider>
    
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