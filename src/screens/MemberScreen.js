import React from 'react';
import { View, Text, ScrollView, Pressable, TextInput, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import style from '../../style/style.js';
import ToppingRow from './components/ToppingRow.js';

// screen that members see after joining an order
// lists all toppings with checkboxes
// text input for name
// submit button

function MemberScreen({ navigation }) {
    return (
        <View style={style.background}>
            <Text style={style.title}>Room Code: 123456</Text>
            <Text style={style.subtitle}>Please enter your name and select the toppings that you like.</Text>
            <TextInput style={style.textInput}
                placeholder='Enter Your Name'
                placeholderTextColor='grey'
            >
            </TextInput>
            <View style={style.userListContainer}>
                <ScrollView style={style.toppingList}>
                    <ToppingRow text='Pepperoni' checked={false} onValueChange={() => { }} />
                    <ToppingRow text='Sausage' checked={false} onValueChange={() => { }} />
                    <ToppingRow text='Mushrooms' checked={false} onValueChange={() => { }} />
                    <ToppingRow text='Onions' checked={false} onValueChange={() => { }} />
                    <ToppingRow text='Bacon' checked={false} onValueChange={() => { }} />
                    <ToppingRow text='Black Olives' checked={false} onValueChange={() => { }} />
                    <ToppingRow text='Green Peppers' checked={false} onValueChange={() => { }} />
                    <ToppingRow text='Pineapple' checked={false} onValueChange={() => { }} />
                    <ToppingRow text='Spinach' checked={false} onValueChange={() => { }} />
                    <ToppingRow text='Tomatoes' checked={false} onValueChange={() => { }} />
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