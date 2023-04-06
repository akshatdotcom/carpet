import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput} from 'react-native';
import { Animated, Dimensions, Image, ScrollView, View, TouchableOpacity, Button } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';



export default function Home() {

    //const edges = useSafeAreaInsets();

    return (
        <View style={styles.container}>
            <Text style  = {styles.baseText}>
                Verify 
            </Text>

            <Text style = {styles.subText}>
                 your student status.
            </Text>

            <Text style = {styles.labels}>
                Name:
            </Text>

            
            <TextInput 
                style = {styles.textInput}
                placeholder = 'First Name'
                placeholderTextColor = '#000000'
            />
        
            <TextInput
                style = {styles.textInput}
                placeholder = 'Last Name'
                placeholderTextColor = '#000000'
                
            />

            <Text style = {styles.labels}>
                Student Email Address:
            </Text>

            <TextInput
                style = {styles.emailAddress}
                placeholder = 'e.g name@utexas.edu'
                placeholderTextColor = '#000000'

            />

            <Text style = {styles.labels}>
                Expected Graduation: 
            </Text>

            <TextInput
                style = {styles.textInput}
                placeholder = 'Month'
                placeholderTextColor = '#000000'
            />
            <TextInput
                style = {styles.textInput}
                placeholder = 'Year'
                placeholderTextColor = '#000000'
            />

            <TouchableOpacity style = {styles.button}>
                <Text style = {styles.buttonText}>
                    Button
                </Text>
            </TouchableOpacity>


            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      fontWeight: 'bold',
    //   alignItems: 'center',
      marginTop: 85,
    //   justifyContent: 'center',
    },
    baseText: {
        textAlign: 'center',
        marginTop: 0,
        fontWeight: 'bold',
        fontSize: 34,
        
    },
    subText: {
        textAlign: 'center',
        marginTop: 5,
        fontWeight: 'bold' ,
        fontSize: 20,
        color: '#4D4A95',
        
    },
    labels: {
        textAlign: 'left',
        marginTop: 25,
        marginLeft: 10,
        fontWeight: 'bold' ,
        fontSize: 24,
        color: '#4D4A95',
    }, 
    textInput: {
        borderWidth: 1,
        borderColor: '#D9D9D9',
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        padding: 8,
        margin: 10,
        fontWeight: 'bold',
        width: 175,
    },
    emailAddress: {
        borderWidth: 1,
        borderColor: '#D9D9D9',
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        padding: 8,
        margin: 10,
        fontWeight: 'bold',
        width: 350,
    },
    buttonText: {
        textAlign: 'center',
       
        //width: 300, 
        
        fontWeight: 'bold' ,
        fontSize: 35,
        color: '#4D4A95',
    },
    button: {
        backgroundColor: '#D9D9D9',
        borderRadius: 20,
        padding: 10,
        margin: 5,
        marginTop: 110,
        marginHorizontal: 70,


    },
    

  });

