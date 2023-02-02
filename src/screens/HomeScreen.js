import React from 'react';
import {View, Text, Pressable, TextInput, Image } from 'react-native';
import style from '../../style/style.js';

function HomeScreen({ navigation }) {
    return (
      <View style = {style.background}>
        <Text style = {style.title}>Welcome to MyPi</Text>
        <Image source={require('../../assets/icon.png')} style={style.icon}/>
        <Text style = {style.subtitle}>Generate optimal pizza orders for groups of any size in seconds.</Text>
        <TextInput
        style={style.textInput}
        placeholder="Please Enter Order ID"
        placeholderTextColor="grey"
        >
        </TextInput>
        <Pressable style={style.yellowButton} onPress={() => navigation.navigate('Details')}>
            <Text style={style.buttonText}>Join Order</Text>
        </Pressable>
        <Pressable style={style.redButton} onPress={() => navigation.navigate('Details')}>
            <Text style={style.buttonText}>Create Order</Text>
        </Pressable>
      </View>
    );
}

export default HomeScreen;