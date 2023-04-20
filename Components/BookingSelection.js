import React, { useState } from 'react';
import {StyleSheet, ScrollView, View, Text, Button, TouchableOpacity} from 'react-native';
import { filters } from './utils.js';
import { FilterCards } from './FilterCards.js';
import StandardCard from './StandardCard';

const BGColor = "#74AB9D"

export default function Booked() {
    return (
      <ScrollView style={{backgroundColor: BGColor}}>

        <Text style={styles.firstText}>
            Cosmetic
        </Text>
        <Text style={styles.secondText}>
          Hire a hairstylist, barber, nail tech, {'\n'} makeup artist, and more!
        </Text>
        <ScrollView
            horizontal={true}
            showHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}> 
            {filters.map(item => (
                <FilterCards key={item.id}
                      title={item.title}
                      url={item.url}
                />              
            ))}
            </ScrollView>
        <StandardCard></StandardCard>
        <StandardCard></StandardCard>
        <StandardCard></StandardCard>
        <StandardCard></StandardCard>
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
    color: "white",
    fontFamily: "Lexend",
    fontWeight: 800,
    fontSize: 30,
    textAlign: 'center',
    marginTop: 70,
    marginBottom: 10,
},
    secondText: {
      color: "white",
      fontFamily: "Lexend",
      fontWeight: 400,
      fontSize: 18,
      textAlign: 'center',
      marginTop: 0,
      marginBottom: 5,
    },
  });