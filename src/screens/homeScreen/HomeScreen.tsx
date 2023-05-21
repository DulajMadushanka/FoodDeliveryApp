import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, Pressable, Image, TouchableOpacity, ScrollView, FlatList, Dimensions} from 'react-native';
import {parameters, colors, titleText} from '../../global/styles'
import {Icon, Button, SocialIcon} from 'react-native-elements';
import Header from "../../components/Header";
import * as Animatable from 'react-native-animatable';
import HomeHeader from "../../components/HomeHeader";
import {goBack, navigate} from "../../initializer/services/NavigationService";
import {filterData, restaurantData} from "../../global/data";
import FoodCard from "../../components/FoodCard";
import CountDown from 'react-native-countdown-component';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function HomeScreen() {
  const [delivery, setDelivery] = useState(true);
  const [indexCheck, setIndexCheck] = useState("0");

  return (
    <View style={styles.container}>
      <HomeHeader />
      <ScrollView
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
      >
        <View style={{backgroundColor: colors.cardBackground, paddingBottom: 5}}>
          <View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <TouchableOpacity onPress={() => setDelivery(true)}>
              <View style={{...styles.deliveryButton, backgroundColor: delivery ? colors.buttons : colors.grey5}}>
                <Text style={styles.deliveryText}>
                  Delivery
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              setDelivery(false);
              navigate("RestaurantMapScreen", {})
            }}>
              <View style={{...styles.deliveryButton, backgroundColor: !delivery ? colors.buttons : colors.grey5}}>
                <Text style={styles.deliveryText}>
                  Pick Up
                </Text>
              </View>
            </TouchableOpacity>
          </View>
         <View style={styles.filterView}>
           <View style={styles.addressView}>
             <View style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 10}}>
               <Icon
                 type={'material-community'}
                 name={'map-marker'}
                 color={colors.grey1}
                 size={26}
                 onPress={() => {

                 }}
               />
               <Text style={{marginLeft: 5}}>
                 22 Beessie Street
               </Text>
             </View>
             <View style={styles.clockView}>
               <Icon
                 type={'material-community'}
                 name={'clock-time-four'}
                 color={colors.grey1}
                 size={26}
                 onPress={() => {

                 }}
               />
               <Text style={{marginLeft: 5}}>
                 Now
               </Text>
             </View>
           </View>
           <View>
             <Icon
               type={'material-community'}
               name={'tune'}
               color={colors.grey1}
               size={26}
               onPress={() => {

               }}
             />
           </View>
         </View>
        </View>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>
            Categories
          </Text>
        </View>
        <View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={filterData}
            keyExtractor={(item) => item.id}
            extraData={indexCheck}
            renderItem={({item, index}) => {
              return (
                <Pressable onPress={() => setIndexCheck(item.id)}>
                  <View style={indexCheck === item.id ? {...styles.smallCardSelected} : {...styles.smallCard}}>
                    <Image
                      style={{width: 60, height: 60, borderRadius: 30}}
                      source={item.image}
                    />
                    <View>
                      <Text style={indexCheck === item.id ? {...styles.smallCardTextSelected} : {...styles.smallCardText}}>{item.name}</Text>
                    </View>
                  </View>
                </Pressable>
              )
            }}
          />
        </View>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>
            Free delivery now
          </Text>
        </View>
        <View>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <Text style={{marginLeft: 15, fontSize: 16, marginTop: 10, marginRight: 5}}>Options changing in</Text>
            <CountDown
              until={3600}
              size={14}
              digitStyle={{backgroundColor: colors.lightgreen}}
              digitTxtStyle={{color: colors.cardBackground}}
              timeToShow={['M', 'S']}
              timeLabels={{m: 'Min', s: 'Sec'}}
            />
          </View>
          <FlatList
            style={{marginTop: 10, marginBottom: 10}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={restaurantData}
            keyExtractor={(item) => item.toString()}
            extraData={indexCheck}
            renderItem={({item, index}) => {
              return (
                <View style={{marginRight: 5}}>
                  <FoodCard
                    screenWidth={SCREEN_WIDTH*0.8}
                    images={item?.images}
                    restaurantName={item.restaurantName}
                    farAway={item.farAway}
                    businessAddress={item.businessAddress}
                    averageReview={item.averageReview}
                    numberOfReview={item.numberOfReview}
                  />
                </View>
              )
            }}
          />
        </View>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>
            Promotion available
          </Text>
        </View>
        <View>
          <FlatList
            style={{marginTop: 10, marginBottom: 10}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={restaurantData}
            keyExtractor={(item) => item.toString()}
            extraData={indexCheck}
            renderItem={({item, index}) => {
              return (
                <View style={{marginRight: 5}}>
                  <FoodCard
                    screenWidth={SCREEN_WIDTH*0.8}
                    images={item?.images}
                    restaurantName={item.restaurantName}
                    farAway={item.farAway}
                    businessAddress={item.businessAddress}
                    averageReview={item.averageReview}
                    numberOfReview={item.numberOfReview}
                  />
                </View>
              )
            }}
          />
        </View>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>
            Restaurant in your area
          </Text>
        </View>
        <View style={{width: SCREEN_WIDTH, paddingTop: 10}}>
          {
            restaurantData.map((item) => {
              return (
                <View key={item.id} style={{paddingBottom: 20}}>
                  <FoodCard
                    screenWidth={SCREEN_WIDTH*0.95}
                    images={item?.images}
                    restaurantName={item.restaurantName}
                    farAway={item.farAway}
                    businessAddress={item.businessAddress}
                    averageReview={item.averageReview}
                    numberOfReview={item.numberOfReview}
                  />
                </View>
              )
            })
          }
        </View>
      </ScrollView>
      <View style={styles.floatButton}>
        <TouchableOpacity onPress={() => navigate('RestaurantMapScreen', {})}>
          <Icon
            name={"place"}
            type={"material"}
            size={32}
            color={colors.buttons}
          />
          <Text style={{color: colors.grey2}}>
            Map
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  deliveryButton: {
    paddingHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 5
  },
  deliveryText: {
    marginLeft: 15,
    fontSize: 16
  },
  filterView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal: 10,
    marginVertical: 10
  },
  clockView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    backgroundColor: colors.cardBackground,
    borderRadius: 15,
    paddingHorizontal: 5,
    marginRight: 20
  },
  addressView: {
    flexDirection: 'row',
    backgroundColor: colors.grey5,
    borderRadius: 5,
    paddingVertical: 3,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  headerText: {
    color: colors.grey1,
    fontSize: 22,
    fontWeight: 'bold',
    paddingLeft: 20
  },
  headerTextView: {
    backgroundColor: colors.grey5,
    paddingVertical: 3
  },
  smallCard: {
    borderRadius: 30,
    backgroundColor: colors.grey5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100
  },
  smallCardSelected: {
    borderRadius: 30,
    backgroundColor: colors.buttons,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100
  },
  smallCardTextSelected: {
    fontWeight: 'bold',
    color: colors.cardBackground
  },
  smallCardText: {
    fontWeight: 'bold',
    color: colors.grey2
  },
  floatButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#FFFFFF',
    elevation: 10,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center'
  }
})
