import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {createStackNavigator} from 'react-navigation-stack';
import SplashView from '../../modules/login/views/SplashView';
import SignInWelcomeScreen from '../../screens/authScreens/SignInWelcomeScreen';
import SignInScreen from '../../screens/authScreens/SignInScreen';
import HomeView from '../../screens/homeScreen/HomeScreen';
import RestaurantMapView from '../../screens/RestaurantMapScreen';

const HomeStack = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeView,
      navigationOptions: ({navigation}) => ({
        title: '',
        headerStyle: styles.headerStyle,
      }),
    },
    RestaurantMapScreen: {
      screen: RestaurantMapView,
      navigationOptions: ({navigation}) => ({
        title: '',
        headerStyle: styles.headerStyle,
      }),
    },
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

export default HomeStack;

HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible;
  if (navigation.state.routes.length > 1) {
    navigation.state.routes.map(route => {
      if (route.routeName === 'HomeScreen') {
        tabBarVisible = true;
      } else {
        tabBarVisible = false;
      }
    });
  }
  return {tabBarVisible};
};

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
