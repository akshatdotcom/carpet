import React from 'react';
import {StyleSheet, ScrollView, View, Text, Button, TouchableOpacity} from 'react-native';

import { services } from './utils.js';
import { Card } from './Card.js';
import { useNavigation } from '@react-navigation/native';

const BGColor = "#74AB9D"

export default function Preferences() {
    const navigation  = useNavigation();

    return (
      <View>
        <ScrollView style={{backgroundColor: BGColor}}>

            <Text style={styles.firstText}>
                What services are you looking for?
            </Text>


            <View style={styles.cardContainer}>
                {services.map(item => (
                    <Card key={item.id}
                          title={item.title}
                          url={item.url}
                    />              
                ))}
            </View>

            <TouchableOpacity 
                style={styles.appButtonContainer}
                // onPress={() => navigation.navigate("Main")}
                onPress={() => navigation.navigate("Tabs")}
            >
              <Text style={styles.appButtonText}>{'Done'}</Text>
            </TouchableOpacity>

        </ScrollView>
      </View>
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
        fontWeight: 800,
        fontSize: 30,
        textAlign: 'center',
        marginTop: 80,
        marginBottom: 50,
    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 30,
        // marginRight: 2,
    },
    horizontalBar: {
        borderBottomColor: '#000000',
        borderBottomWidth: 10,
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#14453D",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginBottom: 70,
        marginTop: 40,
        width: 250,
        marginLeft: 70,
      },
      appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
      }
});