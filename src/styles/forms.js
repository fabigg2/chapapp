import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    form: {
        minHeight: '80%',
        marginHorizontal: 10,
        backgroundColor: '#00000030',
        borderRadius: 15,
        padding: 20,
        justifyContent: 'center',
    },
    inputCover: {
        position: 'relative',
        marginBottom: 40,
    },
    input: {
        borderBottomColor: '#EEEEEE90',
        borderBottomWidth: 1,

        color: '#bbbbbb',
        paddingLeft: 30,
        fontSize: 17,

    },
    icon: {
        position: 'absolute',
        top: 10,

    },
    labelUp: {
        position: 'absolute',
        top: -20,
        fontSize: 15,
        color: '#191919',
        fontWeight: 'bold',
        letterSpacing: 1,
        fontSize: 17,

    },
    labelDown: {
        position: 'absolute',
        top: 10,
        left: 30,
        color: '#19191970',
        fontWeight: 'bold',
        letterSpacing: 1,
        fontSize: 15,

    },
    alert: {
        marginBottom: 40,
        borderWidth: 2,
        borderColor: 'red',
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#00000020'
    },
    alertText: {
        color: 'red',
        fontSize: 15,
        letterSpacing: 1,
        fontWeight: '400',
        textAlign: 'center'

    },
    rgOption:{
        marginTop: 30,
        flexDirection: 'row'

    },
    text: {
        color: "#fff",
        marginRight: 5
    },
    link:{
        fontWeight: 'bold',
        fontSize: 16,
        color: '#191919cc'
    }

})