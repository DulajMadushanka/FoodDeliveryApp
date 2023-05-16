import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, Dimensions, TextInput} from 'react-native';
import {parameters, colors, titleText} from '../../global/styles'
import {Icon, Button, SocialIcon} from 'react-native-elements';
import Header from "../../components/Header";
import * as Animatable from 'react-native-animatable';
import HomeHeader from "../../components/HomeHeader";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <HomeHeader />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
