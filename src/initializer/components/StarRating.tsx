import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, Pressable, Image, TouchableOpacity, ScrollView, FlatList, Dimensions} from 'react-native';
import {parameters, colors, titleText} from '../../global/styles'
import {Icon, Button, SocialIcon} from 'react-native-elements';
import Header from "../../components/Header";
import * as Animatable from 'react-native-animatable';
import HomeHeader from "../../components/HomeHeader";
import {filterData, restaurantData} from "../../global/data";
import FoodCard from "../../components/FoodCard";
import CountDown from 'react-native-countdown-component';
import IonIcons from 'react-native-vector-icons/Ionicons';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function StarRatingScreen(props) {
 let stars = [];
 for (var i = 1; i <= 5; i++) {
   let name = 'ios-star';
   if (i > props.ratings) {
     name = 'ios-star-outline'
   }

   stars.push((<IonIcons name={name} size={15} key={i} />))
 }

  return (
    <View style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
      {stars}
      <Text>
        {props.reviews}
      </Text>
    </View>
  )
}
