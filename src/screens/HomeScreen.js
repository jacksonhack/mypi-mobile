import React from 'react';
import { Button, View, Text, Pressable } from 'react-native';
import style from '../../style/style.js';

function HomeScreen({ navigation }) {
    return (
      <View style = {style.background}>
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