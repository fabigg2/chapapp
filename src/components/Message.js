import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export const Message = ({ message, user }) => {
    return (
        <>
            {
                // (!message.deletedTo.includes(user._id))&&
                <View
                    style={{ ...styles.container, justifyContent: (message.from === user._id) ? 'flex-end' : 'flex-start', }}
                >
                    <Text
                        style={{ ...styles.message, backgroundColor: (message.from === user._id) ? '#2a9bff' : 'green' }}
                    >
                        {message.msg}
                    </Text>
                    <View
                        style={styles.confirmation}
                    >
                        { user._id === message.from &&
                            <>
                                {message.state > 0 && <MaterialIcons name='check' color={(message.state === 3) ? 'green' : '#eee'} size={16} />}
                                {message.state > 1 && <MaterialIcons name='check' color={(message.state === 3) ? 'green' : '#eee'} size={16} />}
                            </>
                        }
                    </View>
                </View>
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
        padding: 8,
        flexDirection: 'row',


    },
    message: {
        position: 'relative',
        backgroundColor: 'red',
        maxWidth: '70%',
        borderRadius: 8,
        color: '#fff',
        padding: 10,
        paddingBottom: 20

    },
    confirmation: {
        position: 'absolute',
        flexDirection: 'row',
        right: 12,
        bottom: 12,
    }
})