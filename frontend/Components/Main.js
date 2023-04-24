import React, { useState } from 'react';
import {StyleSheet, ScrollView, View, Text, Button, TouchableOpacity} from 'react-native';
import { services } from './utils.js';
import { NavigateCard } from './NavigateCard.js';
import StandardCard  from './StandardCard.js';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { bookings } from './utils';


const BGColor = "#74AB9D"

export default function Main() {
    const navigation  = useNavigation();

    
    return (
    <SafeAreaProvider style = {styles.safeContainer}>
        <ScrollView>
        <View style={{backgroundColor: BGColor}}>
            <Text style={styles.firstText}>
                Popular Services
            </Text>
            <ScrollView 
            horizontal={true}
            showHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false} style={{marginBottom:-27}}> 
            {services.map(item => (
                <NavigateCard key={item.id}
                      title={item.title}
                      url={item.url}
                />              
            ))}
            </ScrollView>
            <View
            style={styles.horizontalBar}
            />
            <Text style={styles.text}>
                Based on Your Interests
            </Text>
            <ScrollView 
            horizontal={true}> 
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
            <View
            style={styles.horizontalBar}
            />
            <Text 
                style={styles.text}>
                Recently Viewed Services
            </Text>
            <ScrollView horizontal={true}> 
                {services.map(item => (
                    item.id < 4 ? (
                    <NavigateCard key={item.id}
                          title={item.title}
                          url={item.url}
                          
                    />
                    ) : null
                ))}
            </ScrollView>
            <View
            style={styles.horizontalBar}/>
        </View>
        </ScrollView>
    </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: '#74AB9D',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        padding: 20
    },
    firstText: {
        color: "#F5F5F5",
        fontWeight: 600,
        fontSize: 28,
        marginLeft: 20,
        marginTop: 50,
        marginBottom: 5,
    },
    firstTextModified: {
        color: "#F5F5F5",
        fontWeight: 600,
        fontSize: 28,
        marginLeft: 20,
        marginTop: 55,
        marginBottom: 5,
    },
    text: {
        color: "#F5F5F5",
        fontWeight: 600,
        fontSize: 27,
        marginLeft: 20,
        marginTop: -20,
        marginBottom: 10,
    },
    horizontalBar: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        margin: 30,
    },
 });