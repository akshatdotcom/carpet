import React from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View, Text } from 'react-native';

export const SearchCard = ({title, url, desc}) => {
    return (
        <>
        <View style={styles.horizontalBar}/>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicon name={url} style={styles.icon} size={60}></Ionicon>
            <View style={{flex: 2.4}}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.desc} numberOfLines={2}>{desc}</Text>
            </View>
        </View>
        </>
    );
  };

  const styles = StyleSheet.create({
    horizontalBar: {
        backgroundColor: 'white',
        height: 1.5,
        width: 350,
        marginTop:20,
        marginBottom: 10,
        marginLeft: 10,
    },
    icon: {
        marginRight: 20,
        flex: 0.4,
    },
    infoContainer: {
        justifyContent: 'center', 
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontSize: 25,
    },
    desc: {
        color: 'white',
        textAlign: 'center',
    },
  });