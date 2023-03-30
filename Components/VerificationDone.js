import React from 'react';
import {StyleSheet, View, Text, Image, Button, TouchableOpacity} from 'react-native';

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

export const VerificationDone = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.firstText}>
            Your student status has been successfully verified!
        </Text>
        <Text style={styles.secondText}>
            Your account is ready! {'\n'}
            Now for a few questions...
        </Text>
        <Image style={styles.image}
               source={require('../assets/checkmark.png')} 
        />
        <AppButton title="Continue" />
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
        flex: 0.9,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    firstText: {
        color: "black",
        fontFamily: "Lehend",
        fontWeight: 600,
        fontSize: 30,
        textAlign: 'center',
        margin: 20,
    },
    secondText: {
        color: "black",
        fontFamily: "Lehend",
        fontWeight: 200,
        fontSize: 16,
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
      paddingHorizontal: 12
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
  });