import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

import SetupOptionButton from './SetupOptionButton'
import CreateAccountButton from './CreateAccountButton'

export default function Setup() {
    const titleText = "Welcome to Carpet!"
    const sloganText = "The Campus Marketplace"
    const promptText = "Join as a Client or Service Provider"
    const clientOptionText = "I'm a client, hiring, or looking for services"
    const freelancerOptionText = "I'm a freelancer, providing service"
    
    const finishButtonText = "Create an Account"
    const existingAccountText = "Already have an account?"
    const SPACE = " "
    const loginButtonText = "Log In"

    const searchIconImage = require('../assets/search-client.png')
    const giveImage = require('../assets/give.png')

    return (
        <View style={containerStyles.parentContainer}>
            <View style={containerStyles.smallContainer}>
                <Text style={textStyles.title}>{ titleText }</Text>
                <Text style={textStyles.slogan}>{ sloganText }</Text>
            </View>
            <View style={containerStyles.bigContainer}>
                <Text style={textStyles.prompt}>{ promptText }</Text>
                <SetupOptionButton text={ clientOptionText } icon={ giveImage }></SetupOptionButton>
                <SetupOptionButton text={ freelancerOptionText } icon={ searchIconImage }></SetupOptionButton>
            </View>
            <View style={containerStyles.smallContainer}>
                <CreateAccountButton></CreateAccountButton>
                <Text style={textStyles.slogan}>{ existingAccountText + SPACE + loginButtonText }</Text>
            </View>
        </View>
    )
}

const containerStyles = StyleSheet.create({
    parentContainer: {
        position: 'relative',
        paddingBottom: 10,
        paddingTop: 45,
        flex: 1
    },
    bigContainer: {
        position: 'relative',
        backgroundColor: '#D9D9D952',
        flex: 4,
        borderWidth: 1.5,
        marginHorizontal: 40,
        borderRadius: 10,
        marginVertical: 60,
        paddingBottom: 20
    },
    smallContainer: {
        position: 'relative',
        flex: 1.25
    }
})

const textStyles = StyleSheet.create({
    title: {
        position: 'relative',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 15,
    },
    slogan: {
        position: 'relative',
        fontSize: 20,
        fontWeight: 'light',
        textAlign: 'center'
    },
    prompt: {
        position: 'relative',
        padding: 15,
        paddingVertical: 20,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})