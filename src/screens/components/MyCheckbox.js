import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import style from '../../../style/style.js';

function MyCheckbox(props) {
  const [checked, setChecked] = useState(false);
  return (
    <Pressable
      style={[style.checkboxBase, checked && style.checkboxChecked]}
      onPress={() => {
        setChecked(!checked);
        props.onValueChange();
      }}>
    </Pressable>
  );
}

export default MyCheckbox;