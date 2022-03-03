import React from 'react';
import { StatusBar, LogBox } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'

import { Routes } from './src/routes'
import { Background } from './src/components/Background';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Poppins_400Regular, 
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Background>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />

      <Routes />
    </Background>
  );
}