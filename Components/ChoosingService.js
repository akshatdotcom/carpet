import React from 'react';
import { useState } from 'react';
import { Image, StyleSheet, ScrollView, Text, View, Dimensions, FlatList } from 'react-native';
import Checkbox from 'expo-checkbox';



const BGColor = "#74AB9D"

export default function Booked() {
    const [isChecked, setChecked] = useState(false);
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

         
         <Text style={{paddingLeft: 50, color:'white', fontWeight:600, fontSize:18, marginTop: -5, marginRight:3}}>
                Full Shave      
         </Text>

         <Text style={{paddingRight: 20, textAlign: 'right', color:'white',fontWeight:600,fontSize:18,marginTop:-18.5}}>
                    $25.00
         </Text>
         <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#52796F' : undefined}
         />

        <Text style={{paddingLeft: 50, color:'white', fontWeight:600, fontSize:18, marginTop: 5, marginRight:3}}>
               Haircut (Above Shoulders)     
         </Text>

         <Text style={{paddingRight: 20, textAlign: 'right', color:'white',fontWeight:600,fontSize:18,marginTop:-18.5}}>
                    $35.99
         </Text>
         <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#52796F' : undefined}
         />

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
        flex: 1,
        position: 'relative',
        fontWeight: 'bold',
        marginTop: 85,
        margin: 10,
    },
    scroll: {
        width: Math.round(Dimensions.get('window').width) - 10,

    },

    firstText: {
        color: "#FFFFFF",
        fontFamily: "Lehend",
        textAlign: 'left',
        fontWeight: 600,
        paddingLeft: 20,
        fontSize: 30,
        margin: 0,
        marginBottom: 10,
    },
    secondText: {
        color: "#52796F",
        fontFamily: "Lehend",
        fontWeight: 700,
        fontSize: 21,
        paddingLeft: 20,
        textAlign: 'left',
        marginTop: 15,
        marginBottom: 10,
    },
    thirdText: {
        color: "white",
        fontFamily: "Lehend",
        fontWeight: 700,
        fontSize: 24,
        paddingLeft: 20,
        textAlign: 'left',
        marginTop: 10,
        marginBottom: 15,
    },
    imageStyle: {
        alignSelf: 'left',
        marginTop: 10,
        marginLeft: 20,
    
    },
    name: {
        paddingTop: 5,
        marginLeft: 20,
        alignSelf: 'top',
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