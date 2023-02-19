import { Pressable } from "react-native";
import React from "react";
import {View, Text, ScrollView, Alert} from 'react-native';
import style from '../../style/style.js';

// Shows a list of the izzas to be ordered and quantity of each

function OrderOverviewScreen({ navigation }) {
    return(
        <View style = {style.background}>
            <Text style = {style.title}>Order Overview</Text>
            <Text style = {style.subtitle}>You should order the following Pizzas:</Text>
            <View style = {style.userListContainer}>
                <ScrollView style = {style.userList}>
                    <Text style = {style.userName}>1 Pepperoni</Text>
                    <Text style = {style.userName}>2 Mushroom and Onion</Text>
                    <Text style = {style.userName}>1 Ham and Pineapple</Text>
                    <Text style = {style.userName}>3 Sausage</Text>
                    <Text style = {style.userName}>1 Cheese</Text>
                    <Text style = {style.userName}>1 Bacon</Text>
                    <Text style = {style.userName}>1 Chicken</Text>
                    <Text style = {style.userName}>4 Pineapple</Text>
                    <Text style = {style.userName}>1 Ham</Text>
                </ScrollView>
            </View>
            <Pressable style={style.yellowButton} onPress={() => 
                // alert that this is not implemented yet
                Alert.alert('This feature is not implemented yet.', 'Please use this information to place your order through alternative means.', [
                    {text: 'OK', style: 'cancel'},
                ])
            }>
                <Text style={style.buttonText}>Place Order</Text>
            </Pressable>
            <Pressable style={style.redButton} onPress={() => navigation.navigate('Home')}>
                <Text style={style.buttonText}>Exit</Text>
            </Pressable>
        </View>
    );
}

export default OrderOverviewScreen;