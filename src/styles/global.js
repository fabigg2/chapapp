import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        paddingHorizontal:10,
    },
    item:{
        position: 'relative',
        flex: 1,
        backgroundColor: '#EEE',
        padding: 5,
        marginVertical: 5,
        borderBottomWidth: 1,
        borderColor: "#00000029",
        flexDirection: 'row',
        shadowColor: '#000000',
        shadowOpacity: 1,
        shadowOffset: {
            width: 5,
            height: 5,
        },
        marginTop: 10
    },
    text:{
        color: '#191919',
        fontSize: 18,
        fontStyle: 'normal',
        fontFamily: 'serif',
        lineHeight: 40,
        marginLeft: 20,
    },
    indicator:{
        position: 'absolute',
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'green',
        right: 5,
        bottom: 20,
    },
    avatar:{
        width: 45,
        height: 45,
        borderRadius: 35,
        overflow: 'hidden',
        marginRight: 10,

    }
})