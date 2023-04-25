import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Inbox() {

    let cosmetologistImage = require('../assets/Cosmetologist.png');
    let nailTechImage = require('../assets/NailTech.jpg');
    let photographerImage = require('../assets/Photographer.png');
    let videographerImage = require('../assets/Videographer.png');


    return (
        // Header stuff
        <SafeAreaProvider style={ mainStyles.safeContainer }>
            <ScrollView style={ styles.cardContainer }>
                <Text style={styles.firstText}>Inbox</Text>
                <MessageCard
                    image={ cosmetologistImage }
                    name={ "James Barber" }
                    preview={ "Do you have experience with mullets?" }
                >
                </MessageCard>
                <MessageCard
                    image={ nailTechImage }
                    name={ "Jenin Hamuy" }
                    preview={ "How long does it typically take you to do french tips?" }
                ></MessageCard>
                <MessageCard
                    image={ photographerImage }
                    name={ "Eric Lumo" }
                    preview={ "Could you please send me some of your night photography work?" }>
                </MessageCard>
                <MessageCard
                    image={ videographerImage }
                    name={ "Arnold Chamoy" }
                    preview={ "Are you willing to record and edit a 15 minute YouTube video?" }>
                </MessageCard>
            </ScrollView>
        </SafeAreaProvider>
    )
}

function MessageCard(props) {
    // Props:
    // 1. Icon (pfp)
    // 2. Name (card title)
    // 3. Message Preview (card description)

    return (
        <View style={ styles.card }>
            <View style={ styles.imageContainer }>
                <Image source={ props.image } style={ styles.messageIcon }></Image>
            </View>
            <View style={ styles.messageContainer }>
                <Text style={ styles.messageName }>{ props.name }</Text>
                <Text style={styles.messagePreview }>{ props.preview }</Text> 
            </View>
        </View>
    )
}

// Icons to use:
// Cosmetologist.png
// NailTech.png
// Photographer.png
// Videographer.png

const styles = StyleSheet.create({
    firstText: {
        color: "#FFFFFF",
        textAlign: 'left',
        fontWeight: 600,
        paddingLeft: 20,
        fontSize: 30,
        margin: 0,
        marginBottom: 10,
    },
    messageIcon: {
        borderRadius: 50,
        width: 70,
        height: 70,
        display: 'flex'
    },
    messageName: {
        marginTop: 25,
        marginLeft: 20,
        fontWeight: 700,
        color: 'white',
    },
    messagePreview: {
        paddingHorizontal: 20,
        paddingTop: 5,
        color: 'white',

    },
    card: {
        flexDirection: 'row'
    },
    messageContainer: {
        flexDirection: 'column',
        flex: 3,
        paddingBottom: 40,
    },
    imageContainer: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardContainer: {
        display: 'flex',
        width: 370,
        flex: 1,
        marginTop: 100,
    }
})

const mainStyles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: '#74AB9D',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        padding: 20
    },
    firstText: {
        color: "#F5F5F5",
        fontWeight: 600,
        fontSize: 28,
        marginLeft: 20,
        marginTop: 50,
        marginBottom: 5,
    },
    firstTextModified: {
        color: "#F5F5F5",
        fontWeight: 600,
        fontSize: 28,
        marginLeft: 20,
        marginTop: 55,
        marginBottom: 5,
    },
    text: {
        color: "#F5F5F5",
        fontWeight: 600,
        fontSize: 27,
        marginLeft: 20,
        marginTop: -20,
        marginBottom: 10,
    },
    horizontalBar: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        margin: 30,
    },
 });