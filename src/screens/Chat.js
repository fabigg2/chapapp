import React from 'react';
import { Text, Button, View } from 'react-native';
import { useSelector } from 'react-redux';
import { ChatHeader } from '../components/ChatHeader';
import { ChatMessageBox } from '../components/ChatMessageBox';
import { ChatMessagesWin } from '../components/ChatMessagesWin';
import { useSoketIO } from '../hooks/useSocketiIO';

export default function Chat({ navigation, route }) {
  const {friend} = route.params;
  const {data:{data}} = useSelector(state => state.auth);
  const {emitEvent} = useSoketIO();

  // console.log(route.user);
  React.useEffect(() => {
    emitEvent('find-all-messages', { to: friend._id, from: data.user._id });
  }, [])
  return (
    <View style={{
      flex: 1,
      justifyContent: 'space-between'
    }}>

      <ChatHeader navigation={navigation} friend={friend} />
      <ChatMessagesWin />
      <ChatMessageBox friend={friend}/>
    </View>
  )
}
