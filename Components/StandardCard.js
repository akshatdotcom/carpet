// Coded by Rudy Lea

import React from "react";
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';

// const [isSelected, setIsSelected] = useState(false);
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
                         John Doe
                      </Text>
                    </View>
                    <View style={{flex:1, flexDirection:'row'}}>
                      <Image style={{marginLeft:2,marginTop:13,height:17,width:17}} source={require('../assets/Star.png')} />
                      <Text style={{color:'#FFD700', fontSize:15, marginTop:13.5, marginLeft:2,fontWeight:600}}>
                         5.0 
                      </Text>
                      <Text style={{color:'white', fontSize:15, marginTop:13.5, marginLeft:2,fontWeight:300}}>
                       (57 Reviews) 
                      </Text>
                    </View>
                  </View> 
                  <View style={{flex:1, justifyContent:'center',marginLeft:75}}>
                     <TouchableOpacity activeOpacity={0.6}>
                        <Image source={require('../assets/LikeIcon.png')} style={{height:27,width:27}}/>
                     </TouchableOpacity>
                  </View>
               </View> 
               <View style={{flex:2}}>
                   <Text style={{color:'white', fontSize:18, marginTop:18, marginLeft:2,fontWeight:550}}>
                     Photography, Photoshop, Adobe
                   </Text>
               </View> 
               <View style={{flex:2, flexDirection:'row',justifyContent:'center',marginLeft:110}}>
                    <Text style={{color:'white',fontWeight:550,font:15,marginTop:20,marginRight:3}}>
                        STARTING AT
                    </Text>
                    <Text style={{color:'white',fontWeight:700,fontSize:22,marginTop:13.5}}>
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
        margin: 13,
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
        fontSize:19,
        fontWeight: 600,
        color:'white',
        marginTop: 10,
    }
});

export default BookingCard;