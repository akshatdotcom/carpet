import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Main from './Main';
import SearchPage from './SearchPage';
import AccountInfo from './AccountInfo';
import BookingsOrders from './BookingsOrders';
import ChoosingService from './ChoosingService'
import { StyleSheet } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

const Tabs = () =>  {

    const screenOptions = {
        
      };

    return (
        <SafeAreaProvider style = {styles.safeContainer}>
        <Tab.Navigator style={styles.navigator}
            screenOptions={ {headerShown: false, tabBarStyle:{ backgroundColor:'#bbd8d3', height: 80, }, tabBarActiveTintColor: '#74AB9D'} }
             >
            <Tab.Screen 
                name = "Home" component={Main}
                options = {{
                    tabBarLabel: 'Home',
                    tabBarLabelStyle: {fontWeight: 800},
                    tabBarIcon: ({ color, size }) => (
                        <Ionicon name = {"home-outline"} size = {25} />
                    ),
                }}
                
             />
            
            <Tab.Screen 
                name = "Search" component={SearchPage}
                options = {{
                    tabBarLabel: 'Search',
                    tabBarLabelStyle: {fontWeight: 800},
                    tabBarIcon: ({ color, size }) => (
                        <Ionicon name = {"search-outline"} size = {25} />
                    ),
                }}
                
             />


            <Tab.Screen 
                name = "Chat" component={ChoosingService}
                options = {{
                    tabBarLabel: 'Chat',
                    tabBarLabelStyle: {fontWeight: 800},
                    tabBarIcon: ({ color, size }) => (
                        <Ionicon name = {"chatbubbles-outline"} size = {25} />
                    ),
                }}
                
             />

            <Tab.Screen 
                name = "BookingsOrders" component={BookingsOrders}
                options = {{
                    tabBarLabel: 'My Bookings',
                    tabBarLabelStyle: {fontWeight: 800},
                    tabBarIcon: ({ color, size }) => (
                        <Ionicon name = {"wallet-outline"} size = {25} />
                    ),
                }}
                
             />
        </Tab.Navigator>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    safeContainer: {
        backgroundColor: '#74AB9D',
    },
    navigator: {
        backgroundColor: '#74AB9D',
    },
});
export default Tabs;