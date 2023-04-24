import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import { Animated, Dimensions, Image, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

//Navigation import


// Post's....
import Post1 from '../assets/post1.jpeg';
import Post2 from '../assets/post2.jpeg';
import { useNavigation } from '@react-navigation/native';


export default function Home() {

    const edges = useSafeAreaInsets();
    const navigation  = useNavigation();
    return (
        <View style={styles.container}>
          
          <View>
            <Text style  = {styles.baseText}>
                Welcome
            </Text>

            <Text style = {styles.subText}>
                 to the campus marketplace!
            </Text>
         </View>

            
            <TouchableOpacity 
                style = {styles.button}
                onPress={() => navigation.navigate("Preferences")}
            >
                <Text style = {styles.buttonText}>
                    Let's get started
                </Text>
            </TouchableOpacity>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      paddingTop: 370,
      paddingBottom: 70,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    baseText: {
        width: 365, 
        height: 40,
        left: 115,
        top: -255,
        marginTop: 10,
        fontWeight: 'bold' ,
        fontSize: 34,          
    },
    subText: {
        textAlign: 'center',
        marginTop: -255,
        fontWeight: 'bold' ,
        fontSize: 22,
        color: '#74AB9D',
        
    },
    subText2: {
        width: 365, 
        height: 40,
        left: 75,
        top: 275,
        fontWeight: 'bold' ,
        fontSize: 25,
        color: '#52796F',
        
    }, 
    buttonText: {
        textAlign: 'center',
       
        //width: 300, 
        fontWeight: 'bold' ,
        fontSize: 25,
        color: '#fff',
    },
    button: {
        backgroundColor: '#74AB9D',
        borderRadius: 20,
        width: 250,
        padding: 10,
        margin: 5,
        marginTop: 110,
        marginHorizontal: 70,
    },
    
  });

