import React from 'react';
import { StyleSheet, ScrollView, Text, View, Dimensions, FlatList } from 'react-native';

import BookingCard from './BookingCard';
import { bookings } from './utils';

const BGColor = "#74AB9D"

export default function Booked() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scroll}>
        
          <Text style={styles.firstText}>
              Booking Details
          </Text>
          <Text style={styles.secondText}>
             Details For Your Upcoming Booking
          </Text>
          <View>
            {bookings.map(item => (
              item.service === 'Nails (Cosmetics)' ? <BookingCard 
                    id={item.id}
                    name={item.name}
                    jobDescription={item.jobDescription}
                    date={item.date}
                    time={item.time}
                    location={item.location}
                    image={item.image}
              />  
              : null            
            ))}
          </View>

          <Text style={styles.thirdText}>
             Service Breakdown
          </Text>


          <Text style={{paddingLeft: 20, color:'white', fontWeight:600, fontSize:18, marginTop:-50, marginRight:3}}>
                Deposit (one-time)      
          </Text>

          <Text style={{paddingRight: 20, textAlign: 'right', color:'white',fontWeight:600,fontSize:18,marginTop:-18.5}}>
                    $25.00
          </Text>

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
          </Text>


        </ScrollView>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
        fontWeight: 'bold',
        marginTop: 85,
        margin: 10,
    },
    scroll: {
        width: Math.round(Dimensions.get('window').width) - 10,

    },

    firstText: {
        color: "#FFFFFF",
        fontFamily: "Lexend",
        textAlign: 'left',
        fontWeight: 600,
        paddingLeft: 20,
        fontSize: 30,
        margin: 0,
        marginBottom: 10,
    },
    secondText: {
        color: "#52796F",
        fontFamily: "Lexend",
        fontWeight: 700,
        fontSize: 21,
        paddingLeft: 20,
        textAlign: 'left',
        marginTop: 15,
        marginBottom: 10,
    },
    thirdText: {
        color: "#52796F",
        fontFamily: "Lexend",
        fontWeight: 700,
        fontSize: 24,
        paddingLeft: 20,
        textAlign: 'left',
        marginTop: 10,
        marginBottom: 60,
    },
    serviceDescriptions: {

    },
    row: {
      

    },
    column: {

    },
  });