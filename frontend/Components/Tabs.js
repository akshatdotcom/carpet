import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Main from './Main'
import SearchPage from './SearchPage'
import AccountInfo from './AccountInfo'

const Tab = createBottomTabNavigator();

const Tabs = () =>  {
    return (
        <Tab.Navigator
            screenOptions={ {headerShown: false}}
             >
            <Tab.Screen name = "Home" component={Main} />
            <Tab.Screen name = "Search" component={SearchPage} />
            <Tab.Screen name = "AccountInfo" component={AccountInfo} />
        </Tab.Navigator>
    );
}

export default Tabs;