import React from 'react';
import { useState, useEffect } from 'react';
import { Image, StyleSheet, ScrollView, Text, View, Dimensions, TouchableOpacity, Button } from 'react-native';
import Checkbox from 'expo-checkbox';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StripeProvider } from '@stripe/stripe-react-native';
import { useNavigation } from '@react-navigation/native';


import Payment from './Payment';
import { typesServices } from './utils';


const BGColor = "#74AB9D"

export default function Booked() {
    const navigation  = useNavigation();

    const [isChecked, setChecked] = useState(false);
    const [isChecked2, setChecked2] = useState(false);
    const [isChecked3, setChecked3] = useState(false);
    const [isChecked4, setChecked4] = useState(false);
    const [isChecked5, setChecked5] = useState(false);
    const [cost, setCost] = useState(0);

    useEffect(() => {
        let sum = 0;
        if (isChecked) 
            sum += 20;
        if (isChecked2) 
            sum += 50;
        if (isChecked3) 
            sum += 15;
        if (isChecked4)
            sum += 10;
        if (isChecked5)
            sum += 15;
        setCost(sum);
        //console.log(cost);
    }, [isChecked, isChecked2, isChecked3, isChecked4, isChecked5, cost]);

    return (
    <SafeAreaProvider style = {styles.safeContainer}>
      <View style={styles.container}>
        
          <Text style={styles.firstText}>
              Select Your Services
          </Text>
          <View>
                
                <Image style={styles.imageStyle} source={require('../assets/NailTechModified.png')} />
                <Text style={styles.name}>
                    Jane Doe
                </Text>
                <Image style={{marginLeft:20,marginTop:5,height:17,width:17}} source={require('../assets/Star.png')} />
                      <Text style={{color:'#FFD700', fontSize:15, marginTop:-16, marginLeft:40,fontWeight:600}}>
                         4.8 
                      </Text>
                      <Text style={{color:'white', fontSize:15, marginTop:-18, marginLeft:70,fontWeight:300, marginBottom: 10}}>
                       (24 Reviews) 
                      </Text>

                {/* <Text style={styles.bodyText}>
                    Hi {'\n\n'}
                  

                </Text> */}
        </View>

            <Text style={styles.thirdText}>
                Curate Your Experience
            </Text>

            {/* {typesServices.map((item, index) => (
                <View>
                    <Text style={styles.options}>
                        {item.type}
                    </Text>
                    <Text style={styles.price}>
                        {item.price}
                    </Text>
                    <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#52796F' : undefined}
                    />
                </View>
            ))} */}
            
            <Text style={{paddingLeft: 50, color:'white', fontWeight:600, fontSize:18, marginTop: 5, marginRight:3}}>
                    Gel Polish Removal
            </Text>

            <Text style={{paddingRight: 20, textAlign: 'right', color:'white',fontWeight:600,fontSize:18,marginTop:-18.5}}>
                        $20.00
            </Text>
            <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? '#52796F' : undefined}
            />
            

            <Text style={{paddingLeft: 50, color:'white', fontWeight:600, fontSize:18, marginTop: 5, marginRight:3}}>
                    Acrylic Nails
            </Text>

            <Text style={{paddingRight: 20, textAlign: 'right', color:'white',fontWeight:600,fontSize:18,marginTop:-18.5}}>
                        $50.00
            </Text>
            <Checkbox
                style={styles.checkbox}
                value={isChecked2}
                onValueChange={setChecked2}
                color={isChecked2 ? '#52796F' : undefined}
            />

            <Text style={{paddingLeft: 50, color:'white', fontWeight:600, fontSize:18, marginTop: 5, marginRight:3}}>
                    French Tip
            </Text>

            <Text style={{paddingRight: 20, textAlign: 'right', color:'white',fontWeight:600,fontSize:18,marginTop:-18.5}}>
                        $15.00
            </Text>
            <Checkbox
                style={styles.checkbox}
                value={isChecked3}
                onValueChange={setChecked3}
                color={isChecked3 ? '#52796F' : undefined}
            />

            <Text style={{paddingLeft: 50, color:'white', fontWeight:600, fontSize:18, marginTop: 5, marginRight:3}}>
                    Rhinestones
            </Text>

            <Text style={{paddingRight: 20, textAlign: 'right', color:'white',fontWeight:600,fontSize:18,marginTop:-18.5}}>
                        $10.00
            </Text>
            <Checkbox
                style={styles.checkbox}
                value={isChecked4}
                onValueChange={setChecked4}
                color={isChecked4 ? '#52796F' : undefined}
            />

            <Text style={{paddingLeft: 50, color:'white', fontWeight:600, fontSize:18, marginTop: 5, marginRight:3}}>
                    Custom Add-Ons
            </Text>

            <Text style={{paddingRight: 20, textAlign: 'right', color:'white',fontWeight:600,fontSize:18,marginTop:-18.5}}>
                        $15.00
            </Text>
            <Checkbox
                style={styles.checkbox}
                value={isChecked5}
                onValueChange={setChecked5}
                color={isChecked5 ? '#52796F' : undefined}
            />

            <StripeProvider publishableKey="sk_test_51N0C0vLe6Fu39Z78J6n5N6WPf1F5vdjQ5gQtcXW4GPyj6HTBOITfthap0vRaocRLSifsX9aDOKp2nglu8KQaZUsZ00rJzTiyCO">   
                <Payment cost={cost} />
            </StripeProvider>

            <TouchableOpacity 
                style={styles.appButtonContainer}
                // onPress={() => navigation.navigate("Main")}
                onPress={() => navigation.navigate("BookingDetails")}
            >
              <Text style={styles.appButtonText}>{'View Booking'}</Text>
            </TouchableOpacity>


      </View>
    </SafeAreaProvider>
    );
  };

  const styles = StyleSheet.create({
    safeContainer: {
        backgroundColor: '#74AB9D',
    },
    container: {
        backgroundColor: '#74AB9D',
    },
    scroll: {
        width: Math.round(Dimensions.get('window').width) - 10,
    },
    firstText: {
        color: "#FFFFFF",
        textAlign: 'left',
        fontWeight: 600,
        paddingLeft: 20,
        fontSize: 30,
        marginTop: 60,
        marginBottom: 10,
    },
    secondText: {
        color: "#52796F",
        fontWeight: 700,
        fontSize: 21,
        paddingLeft: 20,
        textAlign: 'left',
        marginTop: 15,
        marginBottom: 10,
    },
    thirdText: {
        color: "white",
        fontWeight: 700,
        fontSize: 24,
        paddingLeft: 20,
        textAlign: 'left',
        marginTop: 10,
        marginBottom: 15,
    },
    options: {paddingLeft: 50, color:'white', fontWeight:600, fontSize:18, marginTop: -5, marginRight:3},
    price: {paddingRight: 20, textAlign: 'right', color:'white',fontWeight:600,fontSize:18,marginTop:-18.5},
    imageStyle: {
        marginTop: 10,
        marginLeft: 20,
    
    },
    name: {
        paddingTop: 5,
        marginLeft: 20,
        fontSize: 20,
        fontWeight: '700',
        color: "#fff",
    },
    bodyText: {
        marginTop: -140,
        marginLeft: 80,
        fontWeight: '700',
        color: "#fff",
    },
    checkbox: {
        marginLeft: 20,
        marginTop: -23,
        borderRadius: 5,
        color: 'white',
        borderColor: '#52796F',
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#52796F",
        borderRadius: 20,
        padding: 10,
        marginBottom: 70,
        marginTop: 160,
        margin: 5,
        width: 270,
        marginLeft: 60,
    },
    appButtonText: {
        fontSize: 25,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
    },
  });