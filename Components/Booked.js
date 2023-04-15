import React from 'react';
import {StyleSheet, View, Text, Image, Button, TouchableOpacity} from 'react-native';

const BGColor = "#74AB9D"

export default function Booked() {
    return (
      <View style={styles.container}>
        <Text style={styles.firstText}>
            You're booked!
        </Text>
        <Text style={styles.secondText}>
            Please notify Jeff at least 24 hours  {'\n'}
            in advance if you would like to modify {'\n'}
            or cancel your booking.
        </Text>
        <Image style={styles.image}
               source={require('../assets/Calendar.png')} 
               />
        <Text style={styles.thirdText}>
            Save the date! {'\n'}
            04/26/2023, 6:00PM-10:00PM {'\n'}
            with Jeff D {'\n'}
            Haircut and Beard Trim {'\n'}
        </Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
        backgroundColor: BGColor,
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
    thirdText: {
        color: "black",
        fontFamily: "Lehend",
        fontWeight: 200,
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 60,
    }
  });