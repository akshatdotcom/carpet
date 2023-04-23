import React, { useState } from 'react';
import {StyleSheet, ScrollView, View, Text, Button, TouchableOpacity} from 'react-native';
import { services } from './utils.js';
import { Card } from './Card.js';
import StandardCard  from './StandardCard.js';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';


const BGColor = "#74AB9D"

export default function Main() {
    const navigation  = useNavigation();
    return (
    <SafeAreaProvider style = {styles.safeContainer}>
        <View style={{backgroundColor: BGColor}}>
            <Text style={styles.firstText}>
                Popular Services
            </Text>
            <ScrollView 
            horizontal={true}
            showHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false} style={{marginBottom:-27}}> 
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
                Based on Your Interests
            </Text>
            <ScrollView 
            horizontal={true}> 
            <StandardCard></StandardCard>
            <StandardCard></StandardCard>
            <StandardCard></StandardCard>
            <StandardCard></StandardCard>
            </ScrollView>
            <View
            style={styles.horizontalBar}
            />
            <Text 
                onPress={() => navigation.navigate("BookingSelection")}
                style={styles.text}>
                Recently Viewed Services
            </Text>
            <ScrollView horizontal={true}> 
                {services.map(item => (
                    item.id < 4 ? (
                    <Card key={item.id}
                          title={item.title}
                          url={item.url}
                    />
                    ) : null
                ))}
            </ScrollView>
            <View
            style={styles.horizontalBar}/>
        </View>
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
        fontFamily: "Lexend",
        fontWeight: 600,
        fontSize: 28,
        marginLeft: 20,
        marginTop: 70,
        marginBottom: 15,
    },
    text: {
        color: "#F5F5F5",
        fontFamily: "Lexend",
        fontWeight: 600,
        fontSize: 27,
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 20,
    },
    horizontalBar: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        margin: 10,
    },
 });