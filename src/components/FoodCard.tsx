import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, Pressable, Image, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import {parameters, colors, titleText} from '../global/styles'
import {Icon, Button, SocialIcon} from 'react-native-elements';
const DominosImage = require('../../assets/images/dominos.jpeg');

export default function FoodCard(props) {
  const { onPressFoodCard, restaurantName, deliveryAvailable, discountAvailable, discountPercent, numberOfReview, businessAddress, farAway, averageReview, images, screenWidth } = props;
console.log("+++++++++++++++++++++++++, screenWidth", screenWidth)
  return (
    <TouchableOpacity>
      <View style={{...styles.cardView, width: screenWidth}}>
        <Image
          style={{...styles.image, width: screenWidth}}
          source={images}
        />
        <View>
          <View>
            <Text style={styles.restaurantName}>
              {restaurantName}
            </Text>
          </View>
          <View>
            <View style={styles.distance}>
              <Icon
                type={'material'}
                name={'place'}
                color={colors.grey2}
                size={18}
                iconStyle={{marginTop: 3}}
                onPress={() => {

                }}
              />
              <Text style={styles.min}>
                {farAway} Min
              </Text>
            </View>
            <View style={{flex: 9, flexDirection: 'row'}}>
              <Text style={styles.address}>
                {businessAddress}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.review}>
        <Text style={styles.average}>
          {averageReview}
        </Text>
        <Text style={styles.numberOfReview}>
          {numberOfReview} reviews
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardView: {
    marginHorizontal: 9,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderWidth: 1,
    borderColor: colors.grey4,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  image: {
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    height: 150
  },
  restaurantName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.grey1,
    marginTop: 5,
    marginLeft: 10
  },
  distance: {
    flex: 4,
    flexDirection: 'row',
    borderRightColor: colors.grey4,
    paddingHorizontal: 5,
    borderRightWidth: 1
  },
  min: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingTop: 5,
    color: colors.grey3
  },
  address: {
    fontSize: 12,
    paddingHorizontal: 10,
    paddingTop: 5,
    color: colors.grey2
  },
  review: {
    position: 'absolute',
    top: 0,
    right: 10,
    backgroundColor: 'rgba(52,52,52,0.3)',
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 12
  },
  average: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -3
  },
  numberOfReview: {
    color: '#FFFFFF',
    fontSize: 13,
    marginRight: 0,
    marginLeft: 0
  }
})
