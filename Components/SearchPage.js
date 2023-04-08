import React from 'react';
import {StyleSheet, View, Text, Image, Button, TouchableOpacity} from 'react-native';
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-ios';

    
  

export default function Booked() {
    
    return (
      <View style={styles.container}>
        <SearchBar
            placeholder="Search for services"
        />
        <Text style={styles.firstText}>
            Categories
        </Text>
        
       
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
        flex: 0.9,
        flexDirection: 'column',
        justifyContent: 'top',
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