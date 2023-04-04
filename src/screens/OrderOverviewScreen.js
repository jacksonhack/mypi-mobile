import { Pressable } from "react-native";
import React from "react";
import {View, Text, ScrollView, Alert} from 'react-native';
import style from '../../style/style.js';

// Shows a list of the izzas to be ordered and quantity of each

function OrderOverviewScreen({ route, navigation }) {
    let { order_object } = route.params;

    let pizza_order = order_object.pizza_order;

    // delete any pizzas with no users
    pizza_order = pizza_order.filter((pizza) => pizza.users.length > 0);

    return(
        <View style = {style.background}>
            <Text style = {style.title}>Order Overview</Text>
            <Text style = {style.subtitle}>You should order the following Pizzas:</Text>
            <View style = {style.userListContainer}>
                <ScrollView style = {style.pizzaList}>
                    {pizza_order.map((pizza) => (
                        // pizza object has the following fields:
                        // toppings: list of topping objects with topping_name and topping_id
                        // users: list of strings of usernames

                        // instead of displaying it all on one line, try a view component with toppings on one line and "for" users on another
                        <View key = {
                            // make the key a string concatenation of topping ids
                            pizza.toppings.map((topping) => topping.topping_id).join('')
                        } style = {style.pizza_scroll_container}>
                            <Text style = {style.pizza_topping_text}> 
                            {
                            // number of this pizza to order is the number of users divided by 2, rounded up
                            Math.ceil(pizza.users.length / 2) + ' '
                            } 
                            {
                            pizza.toppings.map((topping) => topping.topping_name).join(', ').replace(/\b\w/g, l => l.toUpperCase())}
                            {
                            // make the word "Pizza" plural if there are more than one
                            Math.ceil(pizza.users.length / 2) > 1 ? ' Pizzas' : ' Pizza'
                            }
                            </Text>
                            <Text style = {style.pizza_user_text}>For {pizza.users.join(', ')}</Text>
                        </View>
                    ))}
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
            <Pressable style={style.redButton} onPress={() => 
            Alert.alert('Are you sure you want to exit?', 'Your order will be lost.', [
                {text: 'Cancel', style: 'cancel'},
                {text: 'Exit', onPress: () => navigation.navigate('Home')},
            ])
            }>
                <Text style={style.buttonText}>Exit</Text>
            </Pressable>
        </View>
    );
}

export default OrderOverviewScreen;