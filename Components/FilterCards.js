import React, { useState } from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export const FilterCards = ({id, title, url}) => {
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
          <Text id={id} style={styles.cardText}> {title} </Text>
        </View>
      </TouchableOpacity>
    );
  };

const styles = StyleSheet.create({
    cardElement: {
        marginLeft: 6,
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 20,
        height: 25,
        width: 80,
        flex: 1,
        alignItems: 'center',
    },
    cardInside: {
        height: 130,
        width: 130,
        alignItems: 'center',
    },
    cardText: {
        marginTop: 3,
        fontSize: 17,
        fontWeight: 400,
    },
 });