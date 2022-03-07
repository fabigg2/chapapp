import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Animated, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import MaaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { styles } from '../styles/forms';


import { ModalWithBackground } from '../components/ModalWithBackground';
import { auth } from '../services/auth';
import { _login } from '../redux/actions/authAction';

export const Login = ({ active, setModal }) => {
    const { navigate } = useNavigation();
    const [msg, setMesg] = useState('');
    const dispatch = useDispatch();
    const { isLoading, isError, mutate } = useMutation(auth.regularSignIn);

    const handleLogin = (values) => {
        setMesg('')
        if (!values.email || !values.password)
            return setMesg('user and password required')
        mutate(values, {
            onSuccess: async ({ data }) => {
                const { user } = data.data;
                if (user.isValidated) {
                    dispatch(_login(data))
                    navigate('Home');
                    setModal('')
                } else {
                    navigate('Validate', { email: user.email });
                }


            },
            onError: async (error) => {
                setMesg('User or password incorrect')
            },
        });

    }
    const goToSingUp = () => {
        setModal('signUp')
    }

    return (
        <ModalWithBackground
            show={active}
        >
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={handleLogin}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View style={styles.form}>
                        {msg.length > 0 && <View style={styles.alert}>
                            <Text style={styles.alertText}>{msg}</Text>
                        </View>}
                        <View style={styles.inputCover}>
                            <Text style={styles.labelUp}>Email</Text>
                            <MaaterialIcons
                                size={25}
                                color='#bbbbbb'
                                style={styles.icon}
                                name='email'
                            />
                            <TextInput
                                textContentType='emailAddress'
                                style={styles.input}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                placeholder='email'
                            />
                        </View>
                        <View style={styles.inputCover}>
                            <Text style={styles.labelUp}>Password</Text>

                            <MaaterialIcons
                                size={25}
                                style={styles.icon}
                                color='#bbbbbb'
                                name='vpn-key'
                            />
                            <TextInput
                                secureTextEntry={true}
                                style={styles.input}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                placeholder='password'
                            />
                        </View>

                        {
                            !isLoading
                                ? <Button
                                    disabled={isLoading}
                                    color='#f72585'
                                    onPress={handleSubmit}
                                    title="Login" />
                                : <ActivityIndicator size="large" />
                        }

                        <View style={styles.rgOption}>
                            <Text style={styles.text}>Don't have an account?</Text>
                            <TouchableOpacity
                                onPress={goToSingUp}>
                                <Text style={styles.link}>Create account</Text>
                            </TouchableOpacity>
                        </View>


                    </View>

                )}
            </Formik>
        </ModalWithBackground>
    )
}


