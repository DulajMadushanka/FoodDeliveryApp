import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SignInWelcomeScreen from '../screens/authScreens/SignInWelcomeScreen';
import SignInScreen from '../screens/authScreens/SignInScreen';
import AuthStack from "./authNavigation";

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <AuthStack/>
    </NavigationContainer>
  )
}
