import React from 'react';
import {StyleSheet, View, Text, ScrollView, TextInput, Image} from 'react-native';

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
        <Image source=
        {require('/assets/checkmark.png')} />
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
        flex: 0.85,
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
    }
  });