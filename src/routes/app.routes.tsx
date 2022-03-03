import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from '../global/theme';
import { SignUp } from '../screens/SignUp';
import { SignIn } from '../screens/SignIn';
import { SignInAnotherEmail } from '../screens/SignInAnotherEmail';
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
        name='SignIn'
        component={SignIn}
      />

      <Screen 
        name='SignUp'
        component={SignUp}
      />

      <Screen 
        name='SignInAnotherEmail'
        component={SignInAnotherEmail}
      />

      <Screen 
        name='Home'
        component={Home}
      />
    </Navigator>
  )
}