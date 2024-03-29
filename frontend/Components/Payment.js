import { useStripe } from "@stripe/stripe-react-native";
import React from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet} from "react-native";
import Constants from "expo-constants";

const { manifest } = Constants;
const uri = `http://${manifest.debuggerHost.split(':').shift()}:8080`;

export default Payment = ({cost}) => {
    const stripe = useStripe();

    const subscribe = async () => {
        try {
          // sending request
          console.log(`${uri}/pay`);
          const response = await fetch("http://localhost:8080/pay", {
            method: "POST",
            body: JSON.stringify({name: "Dinesh Polisetty",
                                  cost: cost}),
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await response.json();
          //if (!response.ok) return Alert.alert(data.message);
          const clientSecret = data.clientSecret;
          const initSheet = await stripe.initPaymentSheet({
            paymentIntentClientSecret: clientSecret,
          });
          //if (initSheet.error) return Alert.alert(initSheet.error.message);
          const { error } = await stripe.presentPaymentSheet({
            clientSecret,
          }); 
          //if (presentSheet.error) return Alert.alert(presentSheet.error.message);
          //Alert.alert("Payment complete, thank you!");
        } catch (err) {
          console.error(err);
          //Alert.alert("Something went wrong, try again later!");
        }
    };

    return (
        <View>
            <TouchableOpacity
                style={styles.appButtonContainer}
                onPress={subscribe}>
                <Text style={styles.appButtonText}>Pay {cost != 0 ? `$${cost}.00` : ""}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#14453D",
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginBottom: 70,
        marginTop: 20,
        width: 250,
        margin: 5,
        marginLeft: 70,
    },
    appButtonText: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
     },
});