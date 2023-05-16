import React from 'react';
import {relativeWidth} from '../../initializer/helper/ViewHelper';
import BottomStackNavigator from './BottomStackNavigator';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Drawer from "../components/drawer/Drawer";

export default createDrawerNavigator(
  {
    UserStackNavigator: {
      screen: BottomStackNavigator,
    },
  },
  {
    drawerPosition: 'left',
    navigationOptions: {
      header: null,
      gesturesEnabled: false
    },
    drawerWidth: relativeWidth(320),
    contentComponent: ({ navigation }) =>(
      <Drawer navigation={navigation}/>
    ),
  },
);
