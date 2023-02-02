// Style Sheet
'use strict';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    background: {
        // black background
        backgroundColor: '#000000',
        // fill the entire screen
        flex: 1,
        // center the content
        alignItems: 'center',
    },
    yellowButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 26,
        paddingHorizontal: 60,
        borderRadius: 50,
        elevation: 3,
        backgroundColor: '#E1A52F',
        width: 250,
        height: 70,
        marginTop: 10,
        marginBottom: 10,
    },
    redButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 26,
        paddingHorizontal: 60,
        borderRadius: 50,
        elevation: 3,
        backgroundColor: '#9E3737',
        width: 250,
        height: 70,
        marginTop: 10,
        marginBottom: 10,
    },
    buttonText: {
        fontSize: 20,
        lineHeight: 20,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        fontFamily: 'Arial',
    },
    textInput: {
        height: 70,
        width: 250,
        margin: 12,
        borderWidth: 1,
        color: 'white',
        borderColor: 'white',
        borderRadius: 10,
        padding: 10,
        fontFamily: 'Arial',
        fontSize: 20,
    },
    title: {
        fontSize: 40,
        color: '#E1A52F',
        fontFamily: 'Arial',
        // center the text
        textAlign: 'center',
        // limit the width of the text
        width: 400,
        marginTop: 20,
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 20,
        color: '#E1A52F',
        fontFamily: 'Arial',
        // center the text
        textAlign: 'center',
        // limit the width of the text
        width: 300,
        marginBottom: 20,
    },
    icon: {
        width: 160,
        height: 160,
        marginBottom: 20,
    }
});