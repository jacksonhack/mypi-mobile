import React from 'react';
import { View, Text, Pressable, TextInput, Image, Keyboard, TouchableWithoutFeedback } from 'react-native';
import style from '../../style/style.js';

function HomeScreen({ navigation }) {
  return (
    <TouchableWithoutFeedback
      onPress={() => { Keyboard.dismiss(); }}>
      <View style={style.background}>
        <Text style={style.title}>Welcome to MyPi</Text>
        <Image source={require('../../assets/icon.png')} style={style.icon} />
        <Text style={style.subtitle}>Generate optimal pizza orders for groups of any size in seconds.</Text>
        <TextInput
          style={style.textInput}
          placeholder="Enter Order ID"
          placeholderTextColor="grey"
          keyboardType='numeric'
          maxLength={10}
        >
        </TextInput>
        <Pressable style={style.yellowButton} onPress={() => navigation.navigate('Member Screen')}>
          <Text style={style.buttonText}>Join Order</Text>
        </Pressable>
        <Pressable style={style.redButton} onPress={() => navigation.navigate('Admin Screen')}>
          <Text style={style.buttonText}>Create Order</Text>
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default HomeScreen;