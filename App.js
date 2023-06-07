import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNav from './src/navigation/NavDrawer';
import NavStack from './src/navigation/NavStack';

const App = () => {
  return (
    <NavigationContainer>
      <NavStack />
    </NavigationContainer>
  );
};

export default App;
