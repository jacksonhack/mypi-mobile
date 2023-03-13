import React from 'react';
import { View, Text, Pressable, TextInput, Image, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import style from '../../style/style.js';
import { API_ROOT } from '../constants/constants.js';
import Dialog from 'react-native-dialog';

function HomeScreen({ navigation }) {
  const [visible, setVisible] = React.useState(false);
  const [orderName, setOrderName] = React.useState('');

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

    // create order and navigate to admin screen
    createOrderAndNavigate(navigation);
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
          keyboardType='numeric'
          maxLength={10}
        >
        </TextInput>
        <Pressable style={style.yellowButton} onPress={() => navigation.navigate('Member Screen')}>
          <Text style={style.buttonText}>Join Order</Text>
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

  // function to create an order and navigate to the admin screen with orderID in params
  async function createOrderAndNavigate(navigation) {

    // create order
    let response = await createOrder();
    console.log(response);

    // check if error, alert and return if so
    if (response.error || !response.room_code) {
      Alert.alert('Error', 'There was an error creating the order. Please try again.');
      return;
    }

    // get orderID
    let orderID = response.room_code;

    // navigate to admin screen
    navigation.navigate('Admin Screen', { orderID: orderID });
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