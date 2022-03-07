import React from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import { styles } from '../styles/global'
import { useSoketIO } from '../hooks/useSocketiIO'

export const Contact = ({navigation, friend}) => {
    
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Chat', {friend})}
        >
            <View style={styles.item}>
                <Image
                    style={styles.avatar}
                    source={{ uri: 'https://i.pravatar.cc/50' }}
                />
                <Text style={styles.text}>{friend.name} {friend.lastname}</Text>

                <View
                    style={{...styles.indicator, backgroundColor: friend.isConnected ? 'green': 'grey'}}
                ></View>

            </View>
        </TouchableOpacity>


    )
}
