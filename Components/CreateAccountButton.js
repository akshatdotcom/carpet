import { StyleSheet, Text, TouchableOpacity } from 'react-native'

function CreateAccountButton() {
    return (
        <TouchableOpacity style = {styles.button}>
            <Text style = {styles.buttonText}>
                Create my Account
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonText: {
        textAlign: 'center',        
        fontWeight: 'bold' ,
        fontSize: 25,
        color: '#FFFF',
    },
    button: {
        backgroundColor: '#134840',
        borderRadius: 50,
        padding: 10,
        margin: 15,
        marginHorizontal: 70,


    }
})

export default CreateAccountButton;