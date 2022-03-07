import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from '../screens/Home';
import About from '../screens/About';

const Tab = createMaterialTopTabNavigator();

export default function HomeNavigator(){
    return (
        <Tab.Navigator
            screenOptions={
                {
                    tabBarLabelStyle: { fontSize: 15, color: "#fff" },
                    tabBarStyle: { backgroundColor: '#202744' },
                }
            }
        >
            <Tab.Screen name='Contact' component={Home} />
            <Tab.Screen name='Chats' component={About} />
        </Tab.Navigator>
    )
}
