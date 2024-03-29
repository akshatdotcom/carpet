import React from 'react';
import { StyleSheet, ScrollView, Text, View, Dimensions, FlatList } from 'react-native';

import BookingCard from './BookingCard';
import { bookings } from './utils';

import { SafeAreaProvider } from 'react-native-safe-area-context';


const BGColor = "#74AB9D"

export default function Booked() {
    return (
      <SafeAreaProvider style = {styles.safeContainer}>
      <View style={styles.container}>
        <ScrollView style={styles.scroll}>
        
          <Text style={styles.firstText}>
              Upcoming Bookings
          </Text>
          <Text style={styles.secondText}>
             Photography
          </Text>
          <View>
            {bookings.map(item => (
              item.service === 'Photography' ? <BookingCard 
                    id={item.id}
                    name={item.name}
                    // service={item.service}
                    jobDescription={item.jobDescription}
                    date={item.date}
                    time={item.time}
                    location={item.location}
                    image={item.image}
              />  
              : null            
            ))}
          </View>

          <Text style={styles.secondText}>
             Cosmetics
          </Text>
          <View>
            {bookings.map(item => (
              item.service === 'Cosmetics' ? <BookingCard 
                    id={item.id}
                    name={item.name}
                    // service={item.service}
                    jobDescription={item.jobDescription}
                    date={item.date}
                    time={item.time}
                    location={item.location}
                    image={item.image}
              />  
              : null            
            ))}
          </View>


          <Text style={styles.secondText}>
             Videography
          </Text>
          <View>
            {bookings.map(item => (
              item.service === 'Videography' ? <BookingCard 
                    id={item.id}
                    name={item.name}
                    // service={item.service}
                    jobDescription={item.jobDescription}
                    date={item.date}
                    time={item.time}
                    location={item.location}
                    image={item.image}
              />  
              : null            
            ))}
          </View>

        </ScrollView>
      </View>
      </SafeAreaProvider>
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
    safeContainer: {
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
        margin: 0,
        marginBottom: 10,
    },
    secondText: {
        color: "#52796F",
        fontWeight: 700,
        fontSize: 24,
        paddingLeft: 20,
        textAlign: 'left',
        marginTop: 10,
        marginBottom: 10,
    },
    thirdText: {
        color: "black",
        fontWeight: 200,
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 60,
    },
    row: {
      

    },
    column: {

    },
  });