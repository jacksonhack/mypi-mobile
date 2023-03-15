import React, { useState } from 'react';
import { View, Text, ScrollView, Pressable, TextInput, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import style from '../../style/style.js';
import { API_ROOT } from '../constants/constants.js';
import ToppingRow from './components/ToppingRow.js';

// screen that members see after joining an order
// lists all toppings with checkboxes
// text input for name
// submit button


function MemberScreen({ route, navigation }) {
    let { order_object, toppings_list } = route.params;
    let userName = '';

    // dictionary of toppings and whether they are checked, default is false
    let topping_prefs = new Map(toppings_list.map((topping) => [topping.topping_id, false]));

    return (
        <View style={style.background}>
            <Text style={style.title}>Order: {order_object.room_name}</Text>
            <Text style={style.subtitle}>Please enter your name and select the toppings that you like.</Text>
            <TextInput style={style.textInput}
                placeholder='Enter Your Name'
                placeholderTextColor='grey'
                onChangeText={newText =>
                    {
                        userName = newText;
                    }}
            >
            </TextInput>
            <View style={style.userListContainer}>
                <ScrollView style={style.toppingList}>
                    {toppings_list.map((topping) => (
                        // set text to the topping name with first letter of each word capitalized
                        <ToppingRow key = {topping.topping_name} text={topping.topping_name.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} checked={false} onValueChange = {
                            value => {
                                // set topping_pref at topping_id to opposite of current value
                                topping_prefs.set(topping.topping_id, !topping_prefs.get(topping.topping_id));
                            }
                        } />
                    ))}
                </ScrollView>
            </View>
            <Pressable style={style.redButton} onPress={() => {
                checkFieldsCreateUserPatch(userName, topping_prefs, navigation);
            }
                
            }>
                <Text style={style.buttonText}>Submit Preferences</Text>
            </Pressable>
        </View>
    );


    // make sure name is not empty, toppings are not empty, create user in database, and add user to order in database
    async function checkFieldsCreateUserPatch(usr, topp, navigation) {

        if (usr === '') {
            Alert.alert('Please enter your name.');
            return;
        }

        // check if all toppings are false (no toppings selected)
        let allFalse = true;
        for (let [key, value] of topp) {
            if (value) {
                allFalse = false;
                break;
            }
        }

        // if all toppings are false, alert and return
        if (allFalse) {
            Alert.alert('Please select at least one topping.');
            return;
        }

        Alert.alert('Are you sure you want to submit your preferences?', 'You may not be able to change them later.', [
            { text: 'Cancel', style: 'cancel' },
            {
                text: 'Submit', onPress: async () => {
                    let response = await createUser(usr, topp);
                    console.log(response);

                    navigation.navigate('Member Confirmation Screen')
                }
            },
        ])
    }

    // hit api to create user in database, return response
    async function createUser(user, toppings) {
        let topping_ids = [];
        for (let [key, value] of toppings) {
            if (value) {
                topping_ids.push(key);
            }
        }

        let body = {
            "username": user,
            "toppings": topping_ids
        }

        return response = await fetch(API_ROOT + '/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then((response) => response.json())
        .then((json) => {
            return json;
        }
        )
        .catch((error) => 
        {
            return { error: error };
        }
        );
    }
}


export default MemberScreen;