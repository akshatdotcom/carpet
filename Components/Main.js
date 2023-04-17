import React, { useState } from 'react';
import {StyleSheet, ScrollView, View, Text, Button, TouchableOpacity} from 'react-native';
import { services } from './utils.js';
import { Card } from './Card.js';
import BookingCard  from './BookingCard.js';

const BGColor = "#74AB9D"

export default function Main() {
    return (
        <View style={{backgroundColor: BGColor}}>
            <Text style={styles.firstText}>
                Popular Services
            </Text>
            <ScrollView 
            horizontal={true}
            showHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}> 
            {services.map(item => (
                <Card key={item.id}
                      title={item.title}
                      url={item.url}
                />              
            ))}
            </ScrollView>
            <View
            style={styles.horizontalBar}
            />
            <Text style={styles.text}>
                Based off your interests
            </Text>
            <ScrollView 
            horizontal={true}> 
            <BookingCard></BookingCard>
            </ScrollView>
            <View
            style={styles.horizontalBar}
            />
            <Text style={styles.text}>
                Recently Viewed Services
            </Text>
            <ScrollView horizontal={true}> 
                {services.map(item => (
                    item.id < 3 ? (
                    <Card key={item.id}
                          title={item.title}
                          url={item.url}
                    />
                    ) : null
                ))}
            </ScrollView>
            <View
            style={styles.horizontalBar}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    firstText: {
        color: "#F5F5F5",
        fontFamily: "Lexend",
        fontWeight: 600,
        fontSize: 30,
        marginLeft: 20,
        marginTop: 50,
        marginBottom: 15,
    },
    text: {
        color: "#F5F5F5",
        fontFamily: "Lexend",
        fontWeight: 600,
        fontSize: 25,
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 15,
    },
    horizontalBar: {
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        margin: 10,
    },
 });