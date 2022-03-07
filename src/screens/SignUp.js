import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import MaaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { styles } from '../styles/forms';


import { ModalWithBackground } from '../components/ModalWithBackground';
import { userServices } from '../services/services';
import { _login } from '../redux/actions/authAction';

export const SignUp = ({ active, setModal }) => {
    const [msg, setMsg] = useState('');
    const { navigate } = useNavigation();
    const dispatch = useDispatch();
    const { isLoading, isError, mutate } = useMutation(userServices.create);

    const handleLogin = (values) => {
        setMsg('')
        if (values.password !== values.password1)
            return setMsg('passwords must be equal');
        mutate(values, {
            onSuccess: async (data) => {
                setModal('login');
                navigate('Validate', {email: values.email})
            },
            onError: async (error) => {
                if (error.response && error.response.data.errors[0].msg === values.email+" already exist")
                    return setMsg('email alrady in used')
            }
        });

    }

    return (
        <ModalWithBackground
            show={active}
        >
            <Formik
                initialValues={{ name: '', lastname: '', email: '', password: '', password1: '' }}
                onSubmit={handleLogin}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View style={styles.form}>
                        {msg.length > 0 && <View style={styles.alert}>
                            <Text style={styles.alertText}>{msg}</Text>
                        </View>}

                        <View style={styles.inputCover}>
                            <Text style={styles.labelUp}>Name</Text>
                            <MaaterialIcons
                                size={25}
                                color='#bbbbbb'
                                style={styles.icon}
                                name='person'
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                                value={values.name}
                                placeholder='name'
                            />
                        </View>

                        <View style={styles.inputCover}>
                            <Text style={styles.labelUp}>Lastname</Text>
                            <MaaterialIcons
                                size={25}
                                color='#bbbbbb'
                                style={styles.icon}
                                name='group'
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={handleChange('lastname')}
                                onBlur={handleBlur('lastname')}
                                value={values.lastname}
                                placeholder='lastname'
                            />
                        </View>


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
                        <View style={styles.inputCover}>
                            <Text style={styles.labelUp}>Confirm password</Text>

                            <MaaterialIcons
                                size={25}
                                style={styles.icon}
                                color='#bbbbbb'
                                name='vpn-key'
                            />
                            <TextInput
                                secureTextEntry={true}
                                style={styles.input}
                                onChangeText={handleChange('password1')}
                                onBlur={handleBlur('password1')}
                                value={values.password1}
                                placeholder='confirm password'
                            />
                        </View>
                        {
                            !isLoading
                                ? <Button
                                    disabled={isLoading}
                                    color='#f72585'
                                    onPress={handleSubmit}
                                    title="Create" />
                                : <ActivityIndicator size="large" />
                        }
                        <View style={styles.rgOption}>
                            <Text style={styles.text}>I have a account:</Text>
                            <TouchableOpacity
                                onPress={() => setModal('login')}
                            >
                                <Text style={styles.link}>Log in</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                )}
            </Formik>
        </ModalWithBackground>
    )
}

