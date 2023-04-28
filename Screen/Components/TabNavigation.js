// React Native Tab
// https://aboutreact.com/react-native-tab/

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Screens
import HomeScreen from '../DrawerScreens/HomeScreen';
import ChangePlan from '../DrawerScreens/ChangePlan';
import Contactus from '../DrawerScreens/ContactUs';
// icon
import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Navigation Screens
function TabStack() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#fff',
        },
        headerStyle: { backgroundColor: '#107ecc' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        tabBarLabelStyle: {
          textAlign: 'center',
          fontSize: 12
        },
        tabBarIndicatorStyle: {
          borderBottomColor: '#87B56A',
          borderBottomWidth: 2,
        },
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'HomeScreen') {
              iconName = focused
                ? 'home-variant'
                : 'home-variant';
            } else if (route.name === 'ChangePlan') {
              iconName = focused
                ? 'file'
                : 'file';
            } else if (route.name === 'ContactUs') {
                iconName = focused
                  ? 'account-settings'
                  : 'account-settings-outline';
              }
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          }
      })}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          headerTitle:"My Account"
        //   headerShown: false
        }}  />
      <Tab.Screen
        name="ChangePlan"
        component={ChangePlan}
        options={{
          tabBarLabel: 'Change Plan',
          headerTitle:"Change Plan"
        //   headerShown: false
        }} />
         <Tab.Screen
        name="ContactUs"
        component={Contactus}
        options={{
          tabBarLabel: 'ContactUs',
          headerTitle:"Contact Us"
        //   headerShown: false
        }} />
    </Tab.Navigator>
  );
}
// Main Function
function App() {
  return (
    
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#633689' },
          headerTintColor: 'white',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="TabStack"
          component={TabStack}
          options={{  headerShown: false }}
        />
      </Stack.Navigator>
  
  );
}

export default App;