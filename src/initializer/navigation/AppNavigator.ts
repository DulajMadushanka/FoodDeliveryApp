import MenuDrawer from './MenuDrawer';
import {StyleSheet, Text, View} from 'react-native';
import LoginStackNavigator from './LoginStackNavigator';
import HomeStackNavigator from './HomeStackNavigator';
import {createStackNavigator} from 'react-navigation-stack';
import {relativeHeight} from '../../initializer/helper/ViewHelper';


export const AppNavigator = createStackNavigator(
  {
    Login: LoginStackNavigator,
    Home: MenuDrawer
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

const styles = StyleSheet.create({
  btnContainer: {
    alignSelf: 'stretch',
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    justifyContent: 'center',
    height: relativeHeight(40),
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Raleway-Bold',
    textAlign: 'center',
    marginTop: 30,
    color: '#fff',

    backgroundColor: 'transparent',
  },
});
