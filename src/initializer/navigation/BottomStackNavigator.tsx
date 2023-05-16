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

const TabBarComponent = (props) => (<BottomTabBar {...props} />);

export default createBottomTabNavigator(
  {
    HomeScreen: {
      screen: HomeView,
      navigationOptions: () => ({
        title: '',
        tabBarIcon: ({tintColor}) => (
          <View style={styles.bottomScreenContainer}>
            {tintColor === BaseColors.blueText ? (
              <View style={styles.selectedIconContainer}>
                <HomeSelect/>
              </View>
            ) : (
              <Home />
            )}
          </View>
        ),
      }),
    },
    FeedsScreen: {
      screen: HomeView,
      navigationOptions: () => ({
        title: '',
        tabBarIcon: ({tintColor}) => (
          <View style={styles.bottomScreenContainer}>
            {tintColor === BaseColors.blueText ? (
              <View style={styles.selectedIconContainer}>
                <FeedSelect/>
              </View>
            ) : (
              <Feed />
            )}
          </View>
        ),
      }),
    }
  },
  {
    tabBarComponent: props => (
      <BottomComponent {...props} />
    ),
    tabBarOptions: {
      activeTintColor: BaseColors.blueText,
      inactiveTintColor: BaseColors.defaultText,
      style: {
        backgroundColor: '#FFFFFF',
        borderTopWidth: 0,
        borderTopLeftRadius: relativeWidth(16),
        borderTopRightRadius: relativeWidth(16),
        shadowColor: 'rgba(0, 0, 0, 0.08)',
        shadowOffset: {
          width: 5,
          height: 0,
        },
        elevation: 2,
        shadowRadius: relativeWidth(10),
        shadowOpacity: 1,
        height: relativeHeight(40)
      },
    },

  },
);
