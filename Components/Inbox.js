import { StyleSheet, View, Text, Image } from "react-native";

export default function Inbox() {
    return (
        // Header stuff
        <View>
            <MessageCard></MessageCard>
            <MessageCard></MessageCard>
            <MessageCard></MessageCard>
            <MessageCard></MessageCard>
            <MessageCard></MessageCard>
            <MessageCard></MessageCard>
        </View>
    )
}

function MessageCard(props) {
    // Props:
    // 1. Icon (pfp)
    // 2. Name (card title)
    // 3. Message Preview (card description)

    return (
        <View>
            <Image src={ props.image }></Image>
            <Text style={{margin: 50, backgroundColor: 'yellow'}}>asdflkjsdf</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    messageIcon: {

    },
    messageName: {

    },
    messagePreview: {

    }
})