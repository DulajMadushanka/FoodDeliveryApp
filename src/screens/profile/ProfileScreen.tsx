import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, Pressable, Image, TouchableOpacity, ScrollView, FlatList, Dimensions} from 'react-native';
import {parameters, colors, titleText} from '../../global/styles'
import {Icon, Button, SocialIcon} from 'react-native-elements';
import Header from "../../components/Header";
import * as Animatable from 'react-native-animatable';
import HomeHeader from "../../components/HomeHeader";
import {goBack} from "../../initializer/services/NavigationService";
import {filterData, restaurantData} from "../../global/data";
import FoodCard from "../../components/FoodCard";
import CountDown from 'react-native-countdown-component';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function HomeScreen() {
  const [delivery, setDelivery] = useState(true);
  const [indexCheck, setIndexCheck] = useState("0");

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>
        My Account
      </Text>
    </View>
  )
}
