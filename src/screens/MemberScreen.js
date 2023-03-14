import React from 'react';
import { View, Text, ScrollView, Pressable, TextInput, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import style from '../../style/style.js';
import ToppingRow from './components/ToppingRow.js';

// screen that members see after joining an order
// lists all toppings with checkboxes
// text input for name
// submit button

function MemberScreen({ route, navigation }) {
    let { order_object, toppings_list } = route.params;
    return (
        <View style={style.background}>
            <Text style={style.title}>Order: {order_object.room_name}</Text>
            <Text style={style.subtitle}>Please enter your name and select the toppings that you like.</Text>
            <TextInput style={style.textInput}
                placeholder='Enter Your Name'
                placeholderTextColor='grey'
            >
            </TextInput>
            <View style={style.userListContainer}>
                <ScrollView style={style.toppingList}>
                    {toppings_list.map((topping) => (
                        // set text to the topping name with first letter of each word capitalized
                        <ToppingRow key = {topping.topping_name} text={topping.topping_name.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} checked={false} onValueChange={() => { }} />
                    ))}
                </ScrollView>
            </View>
            <Pressable style={style.redButton} onPress={() =>
                Alert.alert('Are you sure you want to submit your preferences?', 'You may not be able to change them later.', [
                    { text: 'Cancel', style: 'cancel' },
                    {
                        text: 'Submit', onPress: () => {
                            navigation.navigate('Member Confirmation Screen');
                        }
                    },
                ])
            }>
                <Text style={style.buttonText}>Submit Preferences</Text>
            </Pressable>
        </View>
    );
}

export default MemberScreen;