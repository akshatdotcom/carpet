import React from 'react';
import {StyleSheet, ScrollView, View, Text, Button, TouchableOpacity} from 'react-native';

import StandardCard from './StandardCard';

const BGColor = "#74AB9D"

export default function Booked() {
    return (
      <ScrollView style={{backgroundColor: BGColor}}>

        <Text style={styles.firstText}>
            Cosmetic
        </Text>
        <StandardCard></StandardCard>
        <StandardCard></StandardCard>

      </ScrollView>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 0.2,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
  },
  firstText: {
    color: "#F5F5F5",
    fontFamily: "Lexend",
    fontWeight: 800,
    fontSize: 30,
    textAlign: 'center',
    marginTop: 80,
    marginBottom: 50,
},
    secondText: {
        color: "#52796F",
        fontFamily: "Lehend",
        fontWeight: 700,
        fontSize: 24,
        paddingLeft: 20,
        textAlign: 'left',
        marginTop: 10,
        marginBottom: 10,
    },
    thirdText: {
        color: "black",
        fontFamily: "Lehend",
        fontWeight: 200,
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 60,
    }
  });