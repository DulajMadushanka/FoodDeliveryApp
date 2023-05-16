import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {createStackNavigator} from 'react-navigation-stack';
import SplashView from '../../modules/login/views/SplashView';
import SignInWelcomeScreen from '../../screens/authScreens/SignInWelcomeScreen';
import SignInScreen from '../../screens/authScreens/SignInScreen';

export default createStackNavigator(
  {
    SplashScreen: {
      screen: SplashView,
      navigationOptions: ({navigation}) => ({
        title: '',
        headerStyle: styles.headerStyle,
      }),
    },
    SignInWelcomeScreen: {
      screen: SignInWelcomeScreen,
      navigationOptions: ({navigation}) => ({
        title: '',
        headerStyle: styles.headerStyle,
      }),
    },
    SignInScreen: {
      screen: SignInScreen,
      navigationOptions: ({navigation}) => ({
        title: '',
        headerStyle: styles.headerStyle,
      }),
    },
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

const styles = StyleSheet.create({
  icon2: {
    color: '#1da1f2',
    fontSize: 35,
    marginTop: 17,
    marginLeft: 28,
  },
  headerStyle: {
    backgroundColor: 'rgba(21,31,40,1)',
    borderBottomWidth: 0,
    shadowColor: 'transparent',
  },
});
