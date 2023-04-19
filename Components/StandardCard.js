// Coded by Rudy Lea

import React from "react";
import { View, Text, StyleSheet, Dimensions, Image} from 'react-native';


const BookingCard = () => {
    return (
        <View style={styles.cardContainer}>
            <View style={{flex:1, justifyContent: 'center'}}>
                <Image style={styles.image} source={require('../assets/Photographer.png')} />
            </View>
            <View style={{flex:3, flexDirection:'column'}}>
               <View style={{flex:2, flexDirection:'row'}}>
                  <View style={{flex:3, flexDirection:'column'}}>
                    <View style={{flex:1, justifyContent: 'center'}}>
                      <Text style={styles.names}>
                         First Name Last Name 
                      </Text>
                    </View>
                    <View style={{flex:1, flexDirection:'row'}}>
                      <Image style={{marginLeft:5, marginTop:3,marginRight:7}} source={require('../assets/Star.png')} />
                      <Text style={{color:'#FFD700'}}>
                         5.0 
                      </Text>
                      <Text style={{}}>
                       (57 Reviews) 
                      </Text>
                    </View>
                  </View> 
                  <View style={{flex:1, justifyContent:'center'}}>
                     <Image style={styles.image} source={require('../assets/Heart.png')} />
                  </View>
               </View> 
               <View style={{flex:2}}>
                   <Text>
                     Services, Services, Services, Services
                   </Text>
               </View> 
               <View style={{flex:2, flexDirection:'row'}}>
                    <Text>
                        STARTING AT:
                    </Text>
                    <Text>
                        $25
                    </Text>
               </View> 
            </View>
        </View>
    );
};

const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
    cardContainer: { 
        backgroundColor: '#737373',
        height: 180,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.75,
        margin: 10,
        paddingLeft: 10,
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        shadowRadius: 5,
        elevation: 9,
    },
    image: {
        // marginTop: 20,
        marginLeft: 17,
    },
    bodyText: {
        marginLeft: 220,
    },
    names: {

    }
});

export default BookingCard;