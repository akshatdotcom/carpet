import React from 'react';
import {StyleSheet, View, Text, Image, Button, TouchableOpacity} from 'react-native';

export default function Preferences() {
    return (
        <View style={styles.container}>
            <Text style={styles.firstText}>
                What services are you looking at?
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0.2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    firstText: {
        color: "black",
        fontFamily: "Lehend",
        fontWeight: 800,
        fontSize: 30,
        textAlign: 'center',
        margin: 20,
    },
});