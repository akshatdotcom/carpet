import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

function GenericButton(props) {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style = {styles.button}>
                <Text style = {styles.buttonText}>{ props.text }</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#134840',
        borderRadius: 20,
        padding: 10,
        margin: 15,
        minWidth: 50
    },
    buttonText: {
        textAlign: 'center',        
        fontWeight: 'bold' ,
        fontSize: 25,
        color: '#FFFF',
    }
})

export default GenericButton;