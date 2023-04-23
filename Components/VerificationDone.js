import React from 'react';
import {StyleSheet, View, Text, Image, Button, TouchableOpacity} from 'react-native';
import GenericButton from './GenericButton';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';


const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const BGColor = "#74AB9D";

export default function VerificationDone() {
    const navigation  = useNavigation();
    return (
      <SafeAreaProvider style = {styles.safeContainer}>
        <View style={styles.container}>
          <Text style={styles.firstText}>
              Your student status has {'\n'}
              been successfully {'\n'}
              verified!
          </Text>
          <Image style={styles.image}
                 source={require('../assets/Clipboard.png')} 
          />
           <Text style={styles.secondText}>
              Your account is ready! {'\n'}
              Now for a few questions...
          </Text>
          <GenericButton 
            text={ "Continue" }
            onPress={() => navigation.navigate("VerificationDone")}
          />
        </View>
      </SafeAreaProvider>
    );
  };

  const styles = StyleSheet.create({
    safeContainer: {
      flex: 1,
      backgroundColor: '#74AB9D',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container: {
        flex: 0.9,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: BGColor,
    },
    firstText: {
        color: "white",
        fontFamily: "Lehend",
        fontWeight: 600,
        fontSize: 30,
        textAlign: 'center',
        margin: 20,
        marginTop: 0
    },
    secondText: {
        color: "white",
        fontFamily: "Lehend",
        fontWeight: 500,
        fontSize: 26,
        textAlign: 'center',
        marginBottom: 60,
    },
    image: {
      marginBottom: 60,
    },
    appButtonContainer: {
      elevation: 8,
      backgroundColor: "#000000",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      // marginTop: 50
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
  });