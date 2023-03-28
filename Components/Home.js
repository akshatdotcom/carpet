import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text} from 'react-native';
import { Animated, Dimensions, Image, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Post's....
import Post1 from '../assets/post1.jpeg';
import Post2 from '../assets/post2.jpeg';


export default function Home() {

    const edges = useSafeAreaInsets();

    return (
        <View style={styles.container}>
            <Text style  = {styles.baseText}>
                Welcome
            </Text>

            <Text style = {styles.subText}>to
                 the campus marketplace!
            </Text>

            <Text style = {styles.subText2}> Let's get started</Text>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      fontWeight: 'bold',
      alignItems: 'center',
      justifyContent: 'center',
    },
    baseText: {
        width: 365, 
        height: 40,
        left: 115,
        top: -255,
        fontWeight: 'bold' ,
        fontSize: 34,
        
    },
    subText: {
        width: 365, 
        height: 40,
        left: 70,
        top: -255,
        fontWeight: 'bold' ,
        fontSize: 18,
        color: '#4D4A95',
        
    },
    subText2: {
        width: 365, 
        height: 40,
        left: 75,
        top: 275,
        fontWeight: 'bold' ,
        fontSize: 25,
        color: '#4D4A95',
        
    },
  });

