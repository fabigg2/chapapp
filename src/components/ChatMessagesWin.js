import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import { Message } from './Message'

export const ChatMessagesWin = () => {
    const chat = useSelector(state => state.chat);
    const { data: { data: { user } } } = useSelector(state => state.auth);
    const flatList = React.useRef(null);
    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                data={(chat.filter(da => !da.deletedTo.includes(user._id)))}
                keyExtractor={(item) => item._id}
                ref={flatList}
                onContentSizeChange={() => flatList.current.scrollToEnd()}
                renderItem={({ item }) => (
                    <Message message={item} user={user} />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee'

    },
    list: {
        flex: 1,
    }
})