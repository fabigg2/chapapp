import React, { useState } from 'react'
import { Button, StyleSheet, View, Text, Alert, ActivityIndicator } from 'react-native'
import { useMutation } from 'react-query';
import { ModalWithBackground } from '../components/ModalWithBackground';
import { auth } from '../services/auth';

export const ValidateAccount = ({ navigation, route }) => {
    const { email } = route.params;
    const [active, setAcive] = useState(true);
    const { mutate, isLoading } = useMutation(auth.sendLink);
    const goToLogin = () => {
        navigation.navigate('Home');
    }
    const resendLink = async () => {
        mutate(email, {
            onSuccess:async()=>{
                Alert.alert(
                    'Confirmation',
                    'We sent an email with a validation link, check your inbox en validate your account', 
                    [{text: 'Ok'}]
                )
            },
            onError: async(error)=>{
                Alert.alert(
                    'Confirmation failed',
                    'error sending confrimation link', 
                    [{text: 'Ok'}]
                )
                console.log(error.response.data.errors)

            }
        })
    }
    return (
        <ModalWithBackground
            show={active}
        >
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.text}>We've sent an email to: {email}, check your inbox and validate your account</Text>
                    <View style={styles.btn}>
                        { !isLoading
                            ?<Button
                                onPress={resendLink}
                                title='send email again'
                            />
                            :<ActivityIndicator  size='large' />

                        }
                    </View>
                    <View style={styles.btn}>
                        <Button
                            onPress={goToLogin}
                            title='go to login'
                        />
                    </View>

                </View>
            </View>
        </ModalWithBackground>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10
    },
    card: {
        padding: 30,
        borderColor: '#00000020',
        borderWidth: 2,
        borderRadius: 5,
    },
    btn: {
        marginTop: 20,
    },
    text: {
        fontSize: 18,
        letterSpacing: 1.5,
        fontWeight: '400',
    }
})