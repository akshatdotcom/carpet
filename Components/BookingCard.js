import React from "react";
import { View, Text, StyleSheet, Dimensions, Image} from 'react-native';


const BookingCard = () => {
    return (
        <View style={styles.cardContainer}>
            <Image style={styles.imageStyle} source={require('../assets/Photographer.png')} />
            <Text style={styles.name}>
                John Doe
            </Text>
            {/* <Text style={styles.bodyText}>
                Service: Photography {'\n\n'}
                Job Description: Portrait Headshots {'\n'}
                Date: 4/26/23  {'\n'}
                Time: 11AM - 1PM  {'\n'}
                Price: $85.00+  {'\n'}
                Location: {'\n'}
                        101 25th St, Apt. 202, Austin, TX 78705

            </Text> */}
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
        flexDirection: 'column',
        justifyContent: 'center',
        shadowRadius: 5,
        elevation: 9,
    },
    imageStyle: {
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