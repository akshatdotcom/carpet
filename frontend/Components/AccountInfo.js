import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput} from 'react-native';
import { Animated, Dimensions, Image, ScrollView, View, TouchableOpacity, Button } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CreateAccountButton from '../Components/CreateAccountButton';
import GenericButton from './GenericButton';

const BGColor = "#74AB9D"

export default function AccountInfo() {


    return (
        <View style={styles.container}>
            <Text style={styles.baseText}>
                Verify Your Student {'\n'}
                Status
            </Text>

            <Text style={styles.labels}>
                Name:
            </Text>

            <View style={styles.row}>
                <TextInput
                    style={styles.textInput}
                    placeholder='First Name'
                    placeholderTextColor='#000000'
                />

                <TextInput
                    style={styles.textInput}
                    placeholder='Last Name'
                    placeholderTextColor='#000000'

                />
            </View>

            <Text style={styles.labels}>
                Student Email Address:
            </Text>

            <TextInput
                style={styles.emailAddress}
                placeholder='e.g name@utexas.edu'
                placeholderTextColor='#000000'

            />

            <Text style={styles.labels}>
                Expected Graduation:
            </Text>
            <View style={styles.row}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Month'
                    placeholderTextColor='#000000'
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Year'
                    placeholderTextColor='#000000'
                />
            </View>
            <View style={{marginTop: 60}}>
            <CreateAccountButton></CreateAccountButton>
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: BGColor,
      flex: 1,
      fontWeight: 'bold',
      marginTop: 85
    },
    baseText: {
        textAlign: 'center',
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 34,
        color:'#FFFFFF',
        
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
        marginTop: 50,
        marginLeft: 10,
        fontWeight: 'bold' ,
        fontSize: 24,
        color: '#FFFFFF',
    }, 
    textInput: {
        borderWidth: 1,
        borderColor: '#D9D9D9',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 8,
        margin: 10,
        fontWeight: 'bold',
        width: 175,
        flex:1,
        marginTop: 30
    },
    emailAddress: {
        borderWidth: 1,
        borderColor: '#D9D9D9',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 8,
        margin: 10,
        fontWeight: 'bold',
        width: 350,
        marginTop: 30
    },
    buttonText: {
        textAlign: 'center',        
        fontWeight: 'bold' ,
        fontSize: 25,
        color: '#FFFF',
    },
    button: {
        backgroundColor: '#134840',
        borderRadius: 50,
        padding: 10,
        margin: 15,
        marginHorizontal: 70,
        marginTop: 60


    },
    row: {
        flexDirection: 'row',
    }
    

  });

