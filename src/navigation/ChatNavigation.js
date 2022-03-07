import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  Chat from '../screens/Chat';
import  HomeNavigator  from './HomeNavigator';
import { ValidateAccount } from '../screens/ValidateAccount';



const Stack = createNativeStackNavigator();

export default function ChatNavigation(){
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={HomeNavigator}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='Chat'
                component={Chat}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='Validate'
                component={ValidateAccount}
                options={{
                    headerShown: false
                }}
            />


        </Stack.Navigator>
    )
}
