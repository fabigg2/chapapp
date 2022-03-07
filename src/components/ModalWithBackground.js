import React from 'react';
import { Image, Modal, StyleSheet, View} from 'react-native';

export const ModalWithBackground = ({children, show=false}) => {
    return (

        <Modal
            visible={show}
            animationType='fade'
        >
            <View
                style={styles.container}
            >
                <Image 
                    style={styles.bg}
                    source={require('../assets/images/bg.png')}
                />
                {children}
            </View>

        </Modal >


    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
    },
    bg:{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
    }
})
