import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import BaseColors from '../helper/BaseColors';
import HomeSelect from '../../../assets/images/icons/home-selected-icon.svg';
import Home from '../../../assets/images/icons/home-icon.svg';
import FeedSelect from '../../../assets/images/icons/feed-selected-icon.svg';
import Feed from '../../../assets/images/icons/feed-icon.svg';
import {relativeHeight, relativeWidth} from "../helper/ViewHelper";
import styles from './styles';
import BottomComponent from '../components/navigation/BottomComponent';
import {navigate} from "../repositories/Repository";
import HomeView from '../../screens/homeScreen/HomeScreen';
import SearchScreen from '../../screens/SearchScreen';
import MyOrderScreen from '../../screens/order/MyOrderScreen';
import ProfileScreen from '../../screens/profile/ProfileScreen';
import {Icon} from "react-native-elements";
import {colors} from "../../global/styles";
import HomeStackNavigator from '../navigation/HomeStackNavigator';

const TabBarComponent = (props) => (<BottomTabBar {...props} />);

export default createBottomTabNavigator(
  {
    HomeScreen: {
      screen: HomeStackNavigator,
      navigationOptions: () => ({
        title: '',
        tabBarIcon: ({tintColor, color, size}) => {
          console.log("+++++++++++++++++++, tintColor", tintColor)
          return (
            <Icon
              name={"home"}
              type={"material"}
              color={tintColor}
              size={size}
            />
          )
        },
      }),
    },
    SearchScreen: {
      screen: SearchScreen,
      navigationOptions: () => ({
        title: '',
        tabBarIcon: ({tintColor, color, size}) => (
          <Icon
            name={"search"}
            type={"material"}
            color={tintColor}
            size={size}
          />
        ),
      }),
    },
    MyOrderScreen: {
      screen: MyOrderScreen,
      navigationOptions: () => ({
        title: '',
        tabBarIcon: ({tintColor, color, size}) => (
          <Icon
            name={"view-list"}
            type={"material"}
            color={tintColor}
            size={size}
          />
        ),
      }),
    },
    ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions: () => ({
        title: '',
        tabBarIcon: ({tintColor, color, size}) => (
          <Icon
            name={"person"}
            type={"material"}
            color={tintColor}
            size={size}
          />
        ),
      }),
    }
  },
  {
    tabBarOptions: {
      activeTintColor: colors.buttons,
      inactiveTintColor: colors.grey1,
      tabStyle: {
        backgroundColor: 'transparent',
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16,
      },
      style: {
        shadowColor: 'rgba(91, 101, 184, 0.08)',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderTopWidth: 0,
        paddingTop: relativeHeight(20),
        height: 55,
        elevation: 50,
        //borderRadius: 8,
        shadowOffset: {
          width: 0,
          height: -6,
        },
        shadowRadius: 10,
        shadowOpacity: 1,
        zIndex: -10,
      },
    },

  },
);
