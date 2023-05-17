import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import {parameters, colors, titleText} from '../../global/styles'
import {Icon, Button, SocialIcon} from 'react-native-elements';
import Header from "../../components/Header";
import * as Animatable from 'react-native-animatable';
import HomeHeader from "../../components/HomeHeader";
import {goBack} from "../../initializer/services/NavigationService";

export default function HomeScreen() {
  const [delivery, setDelivery] = useState(true);

  return (
    <View style={styles.container}>
      <HomeHeader />
      <ScrollView
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={true}
      >
        <View>
          <View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <TouchableOpacity onPress={() => setDelivery(true)}>
              <View style={{...styles.deliveryButton, backgroundColor: delivery ? colors.buttons : colors.grey5}}>
                <Text style={styles.deliveryText}>
                  Delivery
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setDelivery(false)}>
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
      </ScrollView>
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
  }
})
