import React from 'react';
import { View, Text, Pressable, TextInput, Image, Keyboard, TouchableWithoutFeedback, Alert, ActivityIndicator } from 'react-native';
import style from '../../style/style.js';
import { API_ROOT } from '../constants/constants.js';
import Dialog from 'react-native-dialog';

function HomeScreen({ navigation }) {
  const [visible, setVisible] = React.useState(false);
  const [orderName, setOrderName] = React.useState('');
  let [orderID, setOrderID] = React.useState('');

  const showDialog = () => {
    setVisible(true);
  }

  const handleCancel = () => {
    setVisible(false);
  }

  const handleSubmit = () => {
    // check if order name is empty, if so, alert user and return
    if (orderName === '') {
      Alert.alert('Please enter an order name.');
      return;
    }

    // if order name is more than 26 characters, alert user and return
    if (orderName.length > 26) {
      Alert.alert('Order name must be less than 26 characters.');
      return;
    }

    // create order and navigate to admin screen
    createOrderAndNavigate();
    setVisible(false);
  }

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
          maxLength={10}
          onChangeText={newText => setOrderID(newText)}
        >
        </TextInput>
        <Pressable style={style.yellowButton} onPress={() => joinOrderAndNavigate()}>
          <Text style={style.buttonText}
          >Join Order</Text>
        </Pressable>
        <Pressable style={style.redButton} onPress={showDialog}>
          <Text style={style.buttonText}>Create Order</Text>
        </Pressable>
        <Dialog.Container visible={visible}>
          <Dialog.Title>Enter A Name For The Order</Dialog.Title>
          <Dialog.Input placeholder="Order Name"
          onChangeText={newText => setOrderName(newText)} />
          <Dialog.Description>
            This name will be used to confirm to your members that they are in the right room.
          </Dialog.Description>
          <Dialog.Button label="Cancel" onPress={handleCancel} />
          <Dialog.Button label="Submit" onPress={handleSubmit} />
        </Dialog.Container>
      </View>
    </TouchableWithoutFeedback>
  );

  // function to join an order and navigate to the member screen
  // hits api to validate orderID (get order from orderID code), if valid, navigate to member screen with order response in params
  // also hits toppings api to get toppings list and pass it to member screen
  async function joinOrderAndNavigate() {

    // log orderID
    console.log(orderID);

    // make sure orderID is not empty
    if (orderID === '') {
      Alert.alert('Please enter an order ID.');
      return;
    }

    // convert orderID to uppercase
    orderID = orderID.toUpperCase();

    const allData = await Promise.all([validateOrderID(), getToppings()]);
    
    // print allData
    console.log(allData);

    // check if error in either response, alert and return if so
    if (allData[0].error || !allData[0].room_id) {
      Alert.alert('Error', 'There was an error joining the order. Please check your order ID and try again.');
      return;
    }

    if (allData[1].error) {
      Alert.alert('Error', 'There was an error getting the toppings list. Please try again.');
      return;
    }


    // navigate to member screen
    navigation.navigate('Member Screen', { order_object: allData[0], toppings_list: allData[1] });
    
  }

  // function to create an order and navigate to the admin screen with orderID in params
  async function createOrderAndNavigate() {

    // create order
    let response = await createOrder();
    console.log(response);

    // check if error, alert and return if so
    if (response.error || !response.room_code) {
      Alert.alert('Error', 'There was an error creating the order. Please try again.');
      return;
    }

    // get orderID
    //let orderID = response.room_code;

    // navigate to admin screen
    navigation.navigate('Admin Screen', { order_object: response });
  }

  // function to get toppings list from api
  async function getToppings() {
    // get toppings
    return fetch(API_ROOT + '/toppings', {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        return json;
      })
      .catch((error) => {
        return { error: error };
      });
  }

  // function to validate orderID (return order from orderID code)
  async function validateOrderID() {
    return fetch(API_ROOT + '/order/code/' + orderID, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        return json;
      })
      .catch((error) => {
        return { error: error };
      });
  }

  // function to create an order
  async function createOrder() {
    // create order
    return fetch(API_ROOT + '/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "room_name": orderName,
        "room_owner": "placeholder",
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        return json;
      })
      .catch((error) => {
        return { error: error };
      });
  }

}

export default HomeScreen;