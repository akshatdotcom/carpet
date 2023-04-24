import React, { useState } from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const NavigateCard = ({id, title, url}) => {
    const navigation = useNavigation();
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={[{backgroundColor: '#BBD8D3'}, styles.cardElement]}
        onPress={() => {
         navigation.navigate("BookingSelection")
        }}>
        <View style={styles.cardInside}>
          <Text id={id} style={styles.cardText}>{title} {'\n'} </Text>
          <View style={styles.horizontalBar}/>
          <Ionicon name={url} style={styles.image} size={48}></Ionicon>
        </View>
      </TouchableOpacity>
    );
  };

const styles = StyleSheet.create({
    cardElement: {
        marginLeft: 20,
        marginBottom: 20,
        marginTop: 13,
        borderRadius: 20,
        height: 130,
        width: 130,
        flex: 0,
        alignItems: 'center',
    },
    cardInside: {
        height: 130,
        width: 130,
        alignItems: 'center',
        marginBottom:5
    },
    cardText: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 600,
        marginTop: 18
    },
    image: {
        marginTop: 13,
    },
    horizontalBar: {
        backgroundColor: 'black',
        height: 1.5,
        width: 100,
        marginTop:-18
  },
 });