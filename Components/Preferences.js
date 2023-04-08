import React, { useState } from 'react';
import {StyleSheet, ScrollView, View, Text, Button, TouchableOpacity} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { services } from './utils.js';


const Card = ({id, title, url}) => {
    const [isSelected, setIsSelected] = useState(false);

    return (
       <TouchableOpacity
        activeOpacity={0.6}
        style={
          isSelected
            ? [{backgroundColor: '#65B870'}, styles.cardElement]
            : [{backgroundColor: '#BBD8D3'}, styles.cardElement]
        }
        onPress={() => {
          setIsSelected(!isSelected);
        }}>
        <View style={styles.cardElement}>
          <Ionicon name={url} style={styles.image} size={40}></Ionicon>
          <Text id={id} style={styles.cardText}>{title} {'\n'} </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );

export default function Preferences() {
    return (
        <ScrollView >

            <Text style={styles.firstText}>
                What services are you looking for?
            </Text>


            <View style={styles.cardContainer}>
                {services.map(item => (
                    <Card styles={styles.cardElement}
                          key={item.id}
                          title={item.title}
                          url={item.url}
                    />              
                ))}
            </View>

            <AppButton title="Continue" />

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
        color: "black",
        fontFamily: "Lehend",
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
        marginLeft: 15,
        marginRight: 2,
    },
    cardText: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 400,
    },
    cardElement: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        borderRadius: 20,
        height: 140,
        width: 140,
        flex: 0,
        alignItems: 'center',
    },
    image: {
        marginTop: 20,
        marginBottom: 10,
    },
    horizontalBar: {
        borderBottomColor: '#000000',
        borderBottomWidth: 10,
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#000000",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginBottom: 40,
        marginTop: 20,
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