import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import style from '../../style/style.js';

// Ensures user that their preferences have been submitted
// Allows user to go back to the home screen

function MemberConfirmationScreen({ navigation }) {
    return (
      <View style = {style.background}>
        <Text style = {style.title}>Your preferences have been submitted.</Text>
        <Image source={require('../../assets/icon.png')} style={style.icon}/>
        <Text style = {style.subtitle}>You may now exit the order.</Text>
        <Text style = {style.subtitle}>Enjoy your pizza!</Text>
        <Pressable style={style.redButton} onPress={() => navigation.navigate('Home')}>
            <Text style={style.buttonText}>Exit Order</Text>
        </Pressable>
      </View>
    );
}

export default MemberConfirmationScreen;