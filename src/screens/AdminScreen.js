import React from 'react';
import { View, Text, Pressable, ScrollView, Alert } from 'react-native';
import style from '../../style/style.js';
import { API_ROOT, MOCK_API_ROOT } from '../constants/constants.js';

// screen that admin sees after creating an order
// shows all users in the order and allows admin to generate the order
// Displays room code at the top of the screen

function AdminScreen({ route, navigation }) {
    let { order_object } = route.params;
    // update members list array to have a placeholder list of users
    //order_object.members = ["Jackson", "Baru", "Badri", "FirstName LongLastName", "These are placeholders"];

    const [userNames, setUserNames] = React.useState(order_object.members);

    // print order_object to console
    //console.log(order_object.room_id);

    // use useEffect to update members list array every 10 seconds
    React.useEffect(() => {

        async function getMembers() {
            fetch(API_ROOT + '/order/' + order_object.room_id, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => response.json())
                .then(async (json) => {
                    // if not error, update members list array
                    // and if members list is not empty, update members list array
                    if(json.members && json.members.length > 0) {
                        let memberIDs = json.members;
                        // members will be an array of user IDs, need to get names using users endpoint
                        users = await getUserNames(memberIDs);

                        console.log(JSON.stringify(users));
                        
                        // if list is not empty, update userNames list array
                        if (users.length > 0) {
                            // make a list of pairs of user IDs and user names
                            let userNames = [];
                            for (let i = 0; i < users.length; i++) {
                                userNames.push([users[i].user_id, users[i].username]);
                            }

                            setUserNames(userNames);
                        }
                        // otherwise, just let it ride as is until the next update
                    }
                });
        }

        // function to get user names from user IDs
        async function getUserNames(memberIDs) {

            return response = await fetch(API_ROOT + '/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(memberIDs)
            })
            .then((response) => response.json())
            .then((json) => {
                return json;
            })
            .catch((error) =>
            {
                return { error: error };
            });
        }

        getMembers();
        const interval = setInterval(() => getMembers(), 10000)
        return () => {
            clearInterval(interval)
        }
    }, []);

    return (
        <View style={style.background}>
            <Text style={style.title}>Order ID: {order_object.room_code}</Text>
            <Text style={style.alt_title}>Order Name: {order_object.room_name}</Text>
            <Text style={style.subtitle}>Share this code with everyone!</Text>
            <View style={style.userListContainer}>
                <Text style={style.usersHeader}>{userNames.length} users with preferences:</Text>
                <ScrollView style={style.userList}>
                    {userNames.map((user) => (
                        <Text key={user[0]} style={style.userName}>{user[1]}</Text>
                    ))}
                </ScrollView>
            </View>
            <Pressable style={style.yellowButton} onPress={() =>
                Alert.alert('Are you sure you want to generate the order?', 'No more users will be able to join.', [
                    { text: 'Cancel', style: 'cancel' },
                    {
                        text: 'Generate', onPress: async () => {
                            // if members list is empty, show an error message
                            if (userNames.length == 0) {
                                Alert.alert('Error', 'There are no users in the order. Please try again once members join.');
                                return;
                            }

                            // on press, hit the confirm order endpoint to generate the order
                            let response = await generateOrder(order_object.room_id);

                            console.log(response);

                            // if the response is an error or the pizza_order field is empty, show an error message
                            if (response.error || response.pizza_order.length == 0) {
                                Alert.alert('Error', 'There was an error generating the order. Please try again.');
                                return;
                            }

                            // then, navigate to the order overview screen, passing in the order object
                            navigation.navigate('Order Overview Screen', { order_object: response });
                        }
                    },
                ])
            }>
                <Text style={style.buttonText}>Generate Order</Text>
            </Pressable>
            <Pressable style={style.redButton} onPress={() =>
                Alert.alert('Are you sure you want to cancel the order?', 'All users will be removed from the order.', [
                    { text: 'No', style: 'cancel' },
                    {
                        text: 'Cancel Order', onPress: () => {
                            navigation.navigate('Home');
                        }
                    },
                ])
            }>
                <Text style={style.buttonText}>Cancel Order</Text>
            </Pressable>
        </View>
    );

    async function generateOrder(order_id) {
        // hit the /order/confirm endpoint to generate the order
        return fetch(API_ROOT + '/order/confirm/' + order_id, {
            method: 'POST',
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

    // // function to get user names from user IDs
    // async function getUserNames(memberIDs) {

    //     // print the member IDs
    //     console.log(memberIDs);

    //     return response = await fetch(API_ROOT + '/users', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(memberIDs)
    //     })
    //     .then((response) => response.json())
    //     .then((json) => {
    //         return json;
    //     })
    //     .catch((error) =>
    //     {
    //         return { error: error };
    //     });
    // }

    // // function to get toppings list from api
    // async function getToppings() {
    //     // get toppings
    //     return fetch(API_ROOT + '/toppings', {
    //     method: 'GET',
    //     headers: { 
    //         'Content-Type': 'application/json',
    //     },
    //     })
    //     .then((response) => response.json())
    //     .then((json) => {
    //         return json;
    //     })
    //     .catch((error) => {
    //         return { error: error };
    //     });
    // }

}

export default AdminScreen;