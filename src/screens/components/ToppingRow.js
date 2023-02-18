import React from 'react';
import {View, Text} from 'react-native';
import style from '../../../style/style.js';
import MyCheckbox from './MyCheckbox.js';

// row with checkbox and text

function ToppingRow(props) {
    return (
        <View style = {style.toppingRow}>
            <MyCheckbox checked = {props.checked} onValueChange = {props.onValueChange}/>
            <Text style = {style.toppingText}>{props.text}</Text>
        </View>
    );
}

export default ToppingRow;