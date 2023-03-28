import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

export function Setup() {
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
                <TouchableOpacity style={containerStyles.optionContainer}>
                    <View style={containerStyles.insideContainer}>
                        <Text style={textStyles.option}>{ clientOptionText }</Text>
                    </View>
                    <Image
                        source={searchIconImage}
                        style={textStyles.image}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={containerStyles.optionContainer}>
                    <View style={containerStyles.insideContainer}>
                            <Text style={textStyles.option}>{ freelancerOptionText }</Text>
                    </View>
                    <Image
                        source={giveImage}
                        style={textStyles.image}
                    />
                </TouchableOpacity>
            </View>
            <View style={containerStyles.smallContainer}>
                <Text style={textStyles.title}>Button goes here</Text>
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
        borderWidth: 3,
        flex: 1.25
    },
    optionContainer: {
        position: 'relative',
        marginHorizontal: 40,
        marginVertical: 5,
        flex: 1,
        display: 'flex'
    },
    insideContainer: {
        flex: 1,
        marginVertical: 10,
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-end'
    }
})

const textStyles = StyleSheet.create({
    title: {
        position: 'relative',
        fontSize: 30,
        fontWeight: 'bold',
        backgroundColor: "#fff",
        textAlign: 'center',
        paddingVertical: 15,
    },
    slogan: {
        position: 'relative',
        fontSize: 20,
        fontWeight: 'light',
        backgroundColor: "#fff",
        textAlign: 'center'
    },
    prompt: {
        position: 'relative',
        padding: 15,
        paddingVertical: 20,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    option: {
        position: 'relative',
        paddingTop: 50,
        textAlign: 'right',
        paddingVertical: 15,
        paddingLeft: 40,
        paddingRight: 20,
        fontSize: 17,
        fontWeight: 400
    },
    image: {
        position: 'absolute',
        width: 50,
        height: 50,
        resizeMode: 'cover',
        top: -5,
        left: 8
    }
})