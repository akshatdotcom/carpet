import React, { useState } from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export const Card = ({id, title, url}) => {
    const [isSelected, setIsSelected] = useState(false);
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={
          isSelected
            ? [{backgroundColor: '#D8EDDA'}, styles.cardElement]
            : [{backgroundColor: '#BBD8D3'}, styles.cardElement]
        }
        onPress={() => {
          setIsSelected(!isSelected);
        }}>
        <View style={styles.cardInside}>
          <Ionicon name={url} style={styles.image} size={30}></Ionicon>
          <Text id={id} style={styles.cardText}>{title} {'\n'} </Text>
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
    },
    cardText: {
        padding: 8,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 400,
    },
    image: {
        marginTop: 25,
        marginBottom: 2,
    },
 });