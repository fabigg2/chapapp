import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import ChatNavigation from './navigation/ChatNavigation';
import io from 'socket.io-client';
import { Login } from './screens/Login';
import { SokectConection } from './hooks/useSocketiIO';
import { _addFrind } from './redux/actions';
import { SignUp } from './screens/SignUp';


export const Settings = () => {
    const dispatch = useDispatch();
    const {logged, data:{data}} = useSelector(state => state.auth);

    const [modal, setModal] = useState('login');

    React.useEffect(() => {
        if (logged) {
            setModal('');
            if (!window.location) {
                window.navigator.userAgent = 'react-native';
            }
            try {
                SokectConection.socketIO = io('https://chatapp-fa.herokuapp.com', {
                    extraHeaders: {
                        'x-token': data.token
                    }
                });

                SokectConection.socketIO.on('frineds-connected', (data) => {
                    dispatch(_addFrind(data)); 
                });

                SokectConection.socketIO.on('exception', console.log)

            } catch (error) {
                console.log('socket coneccton failed') //
            }
        }
    }, [logged])

    return (
        <NavigationContainer>
            <Login active = {modal==='login'} setModal={setModal} />
            <SignUp active ={modal==='signUp'} setModal={setModal}/>
            
            {<ChatNavigation />}
        </NavigationContainer>
    )
}
