import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Main from './Main'
import SearchPage from './SearchPage'
import AccountInfo from './AccountInfo'
import ChoosingService from './ChoosingService'
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

const Tabs = () =>  {
    return (
        <Tab.Navigator style={styles.navigator}
            screenOptions={ {headerShown: false}}
             >
            <Tab.Screen name = "Home" component={Main} />
            <Tab.Screen name = "Search" component={SearchPage} />
            <Tab.Screen name = "ChoosingService" component={ChoosingService} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    navigator: {
        backgroundColor: '#74AB9D',
    },
});
export default Tabs;