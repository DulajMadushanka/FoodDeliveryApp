import React from 'react';
import {View, Text, StyleSheet, Dimensions, StatusBar} from 'react-native';
import SignInScreen from './src/screens/authScreens/SignInScreen';
import SignInWelcomeScreen from './src/screens/authScreens/SignInWelcomeScreen';
import {colors, parameters} from './src/global/styles';
import RootNavigator from './src/navigation/RootNavigator';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={colors.statusbar}
      />
      <RootNavigator />
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
