import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { styles as globalStyles } from '../styles/global';

export const ChatHeader = ({navigation, friend}) => {
    return (
        <View
            style={styles.container}
        >
            <MaterialIcon
                name='arrow-back'
                color='#fff'
                size={30}
                onPress={() =>navigation.goBack()}
            />
            <Image
                style={globalStyles.avatar}
                source={{ uri: 'https://i.pravatar.cc/50' }}
            />
            <Text
                style={{...globalStyles.text, color: "#fff"}}
            >
                {`${friend.name} ${friend.lastname}`}
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: '#202744',
        alignItems: 'center'
    }
})