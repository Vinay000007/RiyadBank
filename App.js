import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './Screen/SplashScreen';
import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';
import TabNav from './Screen/Components/TabNavigation'
const Stack = createStackNavigator();

export default function App() {
  // alert(global.name )
  // const name = global.name;
  return (
    <NavigationContainer>
  
        <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        screenOptions={{
          headerBackTitleVisible: false
        }}
        options={{headerLeftLabelVisible: false,headerShown: false}}
        
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: 'Register', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="MyTabs"
        component={TabNav}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
