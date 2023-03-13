import React from 'react';
import {View, Text, Pressable, ScrollView, Alert} from 'react-native';
import style from '../../style/style.js';

// screen that admin sees after creating an order
// shows all users in the order and allows admin to generate the order
// Displays room code at the top of the screen

function AdminScreen({ route, navigation }) {
    const { orderID } = route.params;
    return (
      <View style = {style.background}>
        <Text style = {style.title}>Room Code: {orderID}</Text>
        <Text style = {style.subtitle}>Share this code with everyone!</Text>
        <View style = {style.userListContainer}>
            <Text style = {style.usersHeader}>5 users with preferences:</Text>
            <ScrollView style = {style.userList}>
                <Text style = {style.userName}>Jackson</Text>
                <Text style = {style.userName}>Baru</Text>
                <Text style = {style.userName}>John Doe</Text>
                <Text style = {style.userName}>Badri Vellambi</Text>
                <Text style = {style.userName}>FirstName LongLastName</Text>
            </ScrollView>
        </View>
        <Pressable style={style.yellowButton} onPress={() => 
        Alert.alert('Are you sure you want to generate the order?', 'No more users will be able to join.', [
            {text: 'Cancel', style: 'cancel'},
            {text: 'Generate', onPress: () => {
                navigation.navigate('Order Overview Screen');
            }},
            ])
        }>
            <Text style={style.buttonText}>Generate Order</Text>
        </Pressable>
        <Pressable style={style.redButton} onPress={() => 
        Alert.alert('Are you sure you want to cancel the order?', 'All users will be removed from the order.', [
            {text: 'No', style: 'cancel'},
            {text: 'Cancel Order', onPress: () => {
                navigation.navigate('Home');
            }
            },
            ])
        }>
            <Text style={style.buttonText}>Cancel Order</Text>
        </Pressable>
      </View>
    );
}

export default AdminScreen;