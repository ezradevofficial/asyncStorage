import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import NavDrawer from './NavDrawer';

const Stack = createStackNavigator();

export default function NavStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        name="Home#"
        component={NavDrawer}

      />
    </Stack.Navigator>
  );
}
