import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

function SetupOptionButton(props) {
    return (
            <TouchableOpacity style={styles.optionContainer}>
                <View style={styles.insideContainer}>
                    <Text style={styles.option}>{ props.text }</Text>
                </View>
                <Image source={ props.icon } style={styles.image}/>
            </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
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
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-end'
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

export default SetupOptionButton;