import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen.js';
import AdminScreen from './src/screens/AdminScreen.js';
import style from './style/style.js';
import MemberScreen from './src/screens/MemberScreen.js';
import MemberConfirmationScreen from './src/screens/MemberConfirmationScreen.js';
import OrderOverviewScreen from './src/screens/OrderOverviewScreen.js';

function DetailsScreen({ navigation }) {
  return (
    <View style={style.background}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Home"
      >
        <Stack.Screen 
        name="Home"
        component={HomeScreen} 
        options={{ 
          title: '' ,
          headerStyle: {
            backgroundColor: '#000000',
          },
        }}/>
        <Stack.Screen
        name="Details" 
        component={DetailsScreen}
        options={{ 
          title: '' ,
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerBackTitle : 'Back',
          headerBackTitleStyle: {
            fontfaimly: 'Arial',
            fontSize: 20,
          }
        }}/>
        <Stack.Screen
        name="Admin Screen"
        component={AdminScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#000000',
          },
          gestureEnabled: false,
          headerBackVisible: false,
        }}/>
        <Stack.Screen
        name="Member Screen"
        component={MemberScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerBackTitle : 'Back',
          headerBackTitleStyle: {
            fontfaimly: 'Arial',
            fontSize: 20,
          }
        }}/>
        <Stack.Screen
        name="Member Confirmation Screen"
        component={MemberConfirmationScreen}
        options={{
          title: '',
          gestureEnabled: false,
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerBackVisible: false,
        }}/>
        <Stack.Screen
        name="Order Overview Screen"
        component={OrderOverviewScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#000000',
            headerBackVisible: false,
          },
          headerBackTitle : 'Back',
          headerBackTitleStyle: {
            fontfaimly: 'Arial',
            fontSize: 20,
          }
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
