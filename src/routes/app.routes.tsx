import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from '../global/theme';
import { SignUp } from '../screens/SignUp';
import { Welcome } from '../screens/Welcome';
import { SignIn } from '../screens/SignIn';
import { Home } from '../screens/Home';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return(
    <Navigator      
      screenOptions={{
        cardStyle: {
          backgroundColor: 'transparent'
        },     
        headerShown: false,
      }}
    >
      <Screen
        name='Welcome'
        component={Welcome}
      />

      <Screen 
        name='SignUp'
        component={SignUp}
      />

      <Screen 
        name='SignIn'
        component={SignIn}
      />

      <Screen 
        name='Home'
        component={Home}
      />
    </Navigator>
  )
}