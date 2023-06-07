import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export default function NavDrawer() {
  return (
    <Drawer.Navigator screenOptions={{swipeEnabled: true,}}>
        <Drawer.Screen name="Home" component={HomeScreen}/>
        <Drawer.Screen name="Settings" component={SettingsScreen}/>
    </Drawer.Navigator>
  )
}