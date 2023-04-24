import React, { useState } from 'react';
import {StyleSheet, ScrollView, View, Text, Button, TouchableOpacity} from 'react-native';
import { filters } from './utils.js';
import { FilterCards } from './FilterCards.js';
import StandardCard from './StandardCard';
import { bookings } from './utils';


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
        {bookings.map(item => (
              <StandardCard 
                    id={item.id}
                    name={item.name}
                    // service={item.service}
                    jobDescription={item.jobDescription}
                    date={item.date}
                    time={item.time}
                    location={item.location}
                    image={item.image}
                    stars={item.stars}
                    reviews={item.reviews}
                    cost={item.cost}
              />            
            ))}
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
    fontWeight: 800,
    fontSize: 30,
    textAlign: 'center',
    marginTop: 75,
    marginBottom: 10,
},
    secondText: {
      color: "white",
      fontWeight: 400,
      fontSize: 18,
      textAlign: 'center',
      marginTop: 0,
      marginBottom: 10,
    },
  });