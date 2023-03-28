import { StyleSheet, Text, View } from 'react-native'

export function Setup() {
    const titleText = "Welcome to Carpet!"
    const sloganText = "The Campus Marketplace"
    const promptText = "Join as a Client or Service Provider"
    const clientOptionText = "I'm a client, hiring, or looking for services"
    const freelancerOptionText = "I'm a freelancer, providing service"
    
    const finishButtonText = "Create an Account"
    const existingAccountText = "Already have an account?"
    const loginButtonText = "Log In"

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text>{ titleText }</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        flex: 1,
        fontFamily: 'Lexend',
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center'
    }
})