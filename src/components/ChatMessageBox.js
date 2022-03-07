import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import { useSoketIO } from '../hooks/useSocketiIO';

// import { styles } from '../styles/global'

export const ChatMessageBox = ({friend}) => {
    const [text, setText] = useState('');
    const { data:{data:{user}} } = useSelector(state => state.auth);
    const {emitEvent} = useSoketIO();

    const sendMessage = (msg)=>{
        emitEvent('new-message', {
            to: friend._id,
            from: user._id,
            msg,
            state: 0
        });
        setText('')
    }

    return (
        <View
            style={styles.container}
        >
            <View
                style={{ position: 'relative' }}
            >
                <TextInput
                    style={styles.input}
                    multiline={true}
                    placeholder='message'
                    value={text}
                    onChangeText={setText}
                />
                {(text.length > 0) && <MaterialIcons
                    name='send'
                    size={30}
                    color='#183fff'
                    style={styles.send}
                    onPress={()=>sendMessage(text)}
                />
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: '#202744',
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 20,
        width: '100%',
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingRight: 50
    },
    send: {
        position: 'absolute',
        top: 10,
        right: 10
    }
});