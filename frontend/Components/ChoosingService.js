import React from 'react';
import { useState, useEffect } from 'react';
import { Image, StyleSheet, ScrollView, Text, View, Dimensions, FlatList, Button } from 'react-native';
import Checkbox from 'expo-checkbox';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StripeProvider } from '@stripe/stripe-react-native';

import Payment from './Payment';
import { typesServices } from './utils';


const BGColor = "#74AB9D"

export default function Booked() {
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
      <View style={styles.container}>
        <ScrollView style={styles.scroll}>
        
          <Text style={styles.firstText}>
              Select Your Services
          </Text>
          <View>
                
                <Image style={styles.imageStyle} source={require('../assets/Cosmetologist.png')} />
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
                color={isChecked2 ? '#52796F' : undefined}
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

         // TODO (Akshat):
            // Add a button to go to the next screen
            // Convert the above code into Components
                // Increase spacing between checkbox lines
                // Add functionality for optional checkbox sections (e.g. nail accessories)
            // Add manicure, pedicure, nail art, nail treatment options

          {/* <Text style={styles.secondText}>
             Details For Your Upcoming Booking
          </Text>
          <View>
            
          </View>

         


     

          <Text style={{paddingLeft: 20, color:'white', fontWeight:400, fontSize:16, marginRight:3}}>
                Paid 4/26/23 - Venmo     
          </Text>



          <Text style={{paddingLeft: 20, color:'white', fontWeight:600, fontSize:16, marginRight:10}}>
              _______________________________________
          </Text>

          <Text style={{paddingLeft: 20, color:'white', fontWeight:400, fontSize:18, marginTop:20, marginRight:3}}>
                Gel Polish Removal
          </Text>

          <Text style={{paddingRight: 20, textAlign: 'right', color:'white',fontWeight:600,fontSize:18,marginTop:-18.5}}>
                    $20.00
          </Text>


          <Text style={{paddingLeft: 20, color:'white', fontWeight:400, fontSize:18, marginTop:5, marginRight:3}}>
                Acrylic Nails
          </Text>

          <Text style={{paddingRight: 20, textAlign: 'right', color:'white',fontWeight:600,fontSize:18,marginTop:-18.5}}>
                    $50.00
          </Text>

          <Text style={{paddingLeft: 20, color:'white', fontWeight:400, fontSize:18, marginTop:5, marginRight:3}}>
                French Tip
          </Text>

          <Text style={{paddingRight: 23, textAlign: 'right', color:'white',fontWeight:600,fontSize:18,marginTop:-18.5}}>
                    $15.00
          </Text>


          <Text style={{paddingLeft: 20, color:'white', fontWeight:400, fontSize:18, marginTop:5, marginRight:3}}>
                Nail Accessories
          </Text>

              <Text style={{paddingLeft: 40, color:'white', fontWeight:400, fontSize:18, marginTop:5, marginRight:3}}>
                    - Rhineseontes ($2 each)
              </Text>

              <Text style={{paddingRight: 20, textAlign: 'right', color:'white',fontWeight:600,fontSize:18,marginTop:-18.5}}>
                        $10.00
              </Text>

              <Text style={{paddingLeft: 40, color:'white', fontWeight:400, fontSize:18, marginTop:5, marginRight:3}}>
                    - Custom Add-Ons ($5 each)
              </Text>

              <Text style={{paddingRight: 20, textAlign: 'right', color:'white',fontWeight:600,fontSize:18,marginTop:-18.5}}>
                        $15.00
              </Text>


          <Text style={{paddingLeft: 20, color:'white', fontWeight:600, fontSize:18, marginTop:25, marginRight:3}}>
              Total Before Tax
          </Text>

          <Text style={{paddingRight: 23, textAlign: 'right', color:'white',fontWeight:600,fontSize:18,marginTop:-18.5}}>
                    $110.00
          </Text>

          <Text style={{paddingLeft: 20, color:'white', fontWeight:600, fontSize:20, marginTop:15, marginRight:3}}>
              Total (8.25% Tax)
          </Text>

          <Text style={{paddingRight: 23, textAlign: 'right', color:'white',fontWeight:600,fontSize:18,marginTop:-18.5}}>
                    $119.07
          </Text> */}


        </ScrollView>
      </View>
    );
  };

  const styles = StyleSheet.create({
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
  });