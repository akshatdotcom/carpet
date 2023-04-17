import React from "react";
import { View, Text, StyleSheet, Dimensions, Image} from 'react-native';


const BookingCard = () => {
    return (
        <View style={styles.cardContainer}>
            <View style={{flex:1, backgroundColor:'red'}}>
                <Image style={styles.image} source={require('../assets/Photographer.png')} />
            </View>
            <View style={{flex:3, backgroundColor:'green', flexDirection:'column'}}>
               <View style={{flex:2, backgroundColor:'black', flexDirection:'row'}}>
                  <View style={{flex:3, backgroundColor:'purple'}}>
                    
                  </View> 
                  <View style={{flex:1, backgroundColor:'green'}}>
                  </View>
               </View> 
               <View style={{flex:2, backgroundColor:'white'}}>
                
               </View> 
               <View style={{flex:2, backgroundColor:'black'}}>
                
               </View> 
            </View>
        </View>
    );
};

const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
    cardContainer: { 
        backgroundColor: '#737373',
        height: 200,
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
        alignSelf: 'right'

    },
    name: {
        paddingTop: 5,
        fontWeight: '700',
        color: "#fff",
    },
    bodyText: {
        marginLeft: 220,
    },
});

export default BookingCard;