import React from "react";
import { Text, View, Button, StyleSheet, FlatList } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { Contact } from "../components/Contact";
import { styles } from "../styles/global";
import { useSoketIO, SokectConection } from "../hooks/useSocketiIO";
import { _addFrind, _addOneFriend, _chatAddMessage } from '../redux/actions';
import { _chatEditMessage, _chatMessages } from "../redux/actions/chatAction";

export default function Home({ navigation }) {
    const dispatch = useDispatch();
    // const { logged, data: user } = useSelector(state => state.auth);
    const { friends } = useSelector(state => state.friends);
    const { listenEvent, emitEvent } = useSoketIO();

    React.useEffect(() => {
        if (SokectConection.socketIO) {
            // console.log('f...',friends)
            // listenEvent('frineds-connected', (data) => {
            //     console.log('da...', data)
            //     dispatch(_addFrind(data)); 
            // });

            listenEvent('frined-connected', (data) => {
                // console.log('cc....', data)
                dispatch(_addOneFriend(data));
            });
            listenEvent('new-message', (data) => {
                console.log('new message');
                dispatch(_chatAddMessage(data));
                emitEvent('message-receive', data);
            });
            listenEvent('new-message-me', (data) => {
                dispatch(_chatAddMessage(data));
            });
            listenEvent('message-receive', (data) => {
                dispatch(_chatEditMessage(data));
            });
            listenEvent('find-all-messages', (data) => {
                dispatch(_chatMessages(data));
            });
            listenEvent('deleted-message', (data) => {
                dispatch(_chatEditMessage(data));
            });

            SokectConection.socketIO.on('exception', console.log)
        }

    }, [SokectConection.socketIO]);

    return (
        <View style={styles.container}>
            <FlatList
                data={friends}
                renderItem={({ item }) => (
                    <Contact navigation={navigation} friend={item} />
                )}
            />

        </View>
    )
}

