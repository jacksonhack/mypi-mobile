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
        // add some padding
        paddingBottom: 50,
    },
    userListContainter: {
        // clear background
        backgroundColor: 'transparent',
        // fill 60% of the screen
        flex: 0.1,
        // left align the content
        alignItems: 'flex-start',
        height: 100,
    },
    userList: {
        // dark grey background
        backgroundColor: '#1c1c1c',
        // add some padding
        padding: 20,
        // add some margin
        margin: 10,
        flexGrow: 0,
        maxHeight: 300,
        minHeight: 300,
        minWidth: 300,
        maxWidth: 300
    },
    toppingList: {
        // very dark grey background
        backgroundColor: '#1c1c1c',
        // add some padding
        padding: 10,
        // add some margin
        margin: 10,
        flexGrow: 0,
        maxHeight: 300,
        minHeight: 300,
        minWidth: 300,
        maxWidth: 300,
    },
    toppingRow: {
        // clear background
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        // add some padding
        paddingBottom: 15,
    },
    toppingText: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'Arial',
        // add some padding
        paddingLeft: 10,
    },
    userName: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'Arial',
        // align the text to the left
        textAlign: 'left',
    },
    yellowButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 26,
        paddingHorizontal: 10,
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
        paddingHorizontal: 10,
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
        // add some padding
        paddingLeft: 10,
        paddingRight: 10,
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
    usersHeader: {
        fontSize: 22,
        color: '#E1A52F',
        fontFamily: 'Arial',
        // align the text to the left
        textAlign: 'left',
        // add some padding
        paddingLeft: 10,
    },
    icon: {
        width: 160,
        height: 160,
        marginBottom: 20,
    },
    checkboxBase: {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#9E3737',
        backgroundColor: 'transparent',
      },
      checkboxChecked: {
        backgroundColor: '#9E3737',
      },
});