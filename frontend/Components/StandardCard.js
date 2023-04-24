// Coded by Rudy Lea

import React from "react";
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Touchable} from 'react-native';
import { useNavigation } from '@react-navigation/native';


// const [isSelected, setIsSelected] = useState(false);
const StandardCard = ({id, name, service, jobDescription, date, time, location, image, stars, reviews, cost}) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={() => { navigation.navigate("ChoosingService")}} 
        >
        <View style={styles.cardContainer}>
            <View style={{flex:1, justifyContent: 'center'}}>
                <Image style={styles.image} source={image} />
            </View>
            <View style={{flex:3, flexDirection:'column'}}>
               <View style={{flex:2, flexDirection:'row'}}>
                  <View style={{flex:3, flexDirection:'column'}}>
                    <View style={{flex:1, justifyContent: 'center'}}>
                      <Text style={styles.names}>
                        {name}
                      </Text>
                    </View>
                    <View style={{flex:1, flexDirection:'row'}}>
                      <Image style={{marginLeft:2,marginTop:13,height:17,width:17}} source={require('../assets/Star.png')} />
                      <Text style={{color:'#FFD700', fontSize:15, marginTop:13.5, marginLeft:2,fontWeight:600}}>
                         {stars}
                      </Text>
                      <Text style={{color:'white', fontSize:15, marginTop:13.5, marginLeft:2,fontWeight:300}}>
                         {reviews}
                      </Text>
                    </View>
                  </View> 
                  <View style={{flex:1, justifyContent:'center',marginLeft:75}}>
                     <TouchableOpacity activeOpacity={0.6}>
                        <Image 
                            source={require('../assets/LikeIcon.png')} 
                            style={
                                {height:27,
                                width:27
                                }}
                          
                        />
                     </TouchableOpacity>
                  </View>
               </View> 
               <View style={{flex:2}}>
                   <Text style={{color:'white', fontSize:16, marginTop:18, marginLeft:8, marginRight: 20, fontWeight:500}}>
                        {jobDescription}
                   </Text>
               </View> 
               <View style={{flex:2, flexDirection:'row',justifyContent:'center',marginLeft:110}}>
                    <Text style={{color:'white',fontWeight:500,font:15,marginTop:20,marginRight:3}}>
                        STARTING AT
                    </Text>
                    <Text style={{color:'white',fontWeight:700,fontSize:22,marginTop:13.5}}>
                        {cost}
                    </Text>
               </View> 
            </View>
        </View>
        </TouchableOpacity>
    );
};

const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
    cardContainer: { 
        backgroundColor: '#52796F',
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
        marginBottom:16,
       
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

export default StandardCard;