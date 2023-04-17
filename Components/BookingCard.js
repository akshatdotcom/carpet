import React from "react";
import { View, Text, StyleSheet, Dimensions, Image} from 'react-native';


const BookingCard = ({id, service, jobDescription, date, time, location, image}) => {
    return (
        <View style={styles.cardContainer}>
                <Image style={styles.imageStyle} source={require('../assets/Photographer.png')} />
                <Text style={styles.name}>
                    John Doe
                </Text>
                <Text style={styles.bodyText}>
                    {service} {'\n\n'}
                    {jobDescription} {'\n\n'}
                    {date}  {'\n'}
                    {time} {'\n\n'}
                    Location: {'\n'}
                            {location}

                </Text>
        </View>
    );
};

const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
    cardContainer: { 
        width: deviceWidth - 30, 
        backgroundColor: '#52796F',
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
        shadowRadius: 5,
        elevation: 9,
    },
    imageStyle: {
        alignSelf: 'left',
        marginTop: 60,
    
    },
    name: {
        paddingTop: 5,
        fontWeight: '700',
        color: "#fff",
    },
    bodyText: {
        marginTop: -130,
        marginLeft: 80,
        fontWeight: '700',
        color: "#fff",
    },
});

export default BookingCard;