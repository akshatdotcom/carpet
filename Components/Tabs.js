import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Tabs = () =>  {
    return (
        <Tab.Navigator>
            <Tab.Screen name = "Home" component={HomeScreen} />
            <Tab.Screen name = "Find" componnent={FindScreen} />
            <Tab.Screen name = "Find" componnent={PostScreen} />
            <Tab.Screen name = "Chat" componnent={SettingScreen} />
        </Tab.Navigator>
    );
}