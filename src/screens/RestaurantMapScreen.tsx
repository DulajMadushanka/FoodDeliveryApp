import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView, FlatList, Dimensions, Animated, Platform} from 'react-native';
import {parameters, colors, titleText} from '../../global/styles'
import {Icon, Button, SocialIcon} from 'react-native-elements';
import Header from "../../components/Header";
import * as Animatable from 'react-native-animatable';
import HomeHeader from "../../components/HomeHeader";
import {goBack} from "../../initializer/services/NavigationService";
import {filterData, restaurantData} from "../../global/data";
import FoodCard from "../../components/FoodCard";
import CountDown from 'react-native-countdown-component';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import {SCREEN_HEIGHT} from "../initializer/helper/ViewHelper";
import mapMarker from '../../assets/images/map-marker.png';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {markers, mapStandardStyle} from '../global/data';
import StarRatingScreen from "../initializer/components/StarRating";

const {width, height} = Dimensions.get('window');
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

export default function RestaurantMapScreenScreen() {
  const [delivery, setDelivery] = useState(true);
  const [indexCheck, setIndexCheck] = useState("0");

  let mapIndex = 0;
  let mapAnimation = new Animated.Value(0);

  useEffect(() => {
    mapAnimation.addListener(({value}) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3);
      if (index >= state.markers.length) {
        index = state.markers.length - 1;
      }
      if (index <= 0) {
        index = 0
      }

      clearTimeout(regionTimeout);

      const regionTimeout = setTimeout(() => {
        if (mapIndex !== index) {
          mapIndex = index;
          const { coordinate } = state.markers[index];
          _map.current.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: state.region.latitudeDelta,
              longitudeDelta: state.region.longitudeDelta
            }, 350
          )
        }
      }, 10)
    })
  });

  const initialMapState = {
    markers,
    categories: [
      {
        name: "Fastfood Center",
        icon: <MaterialCommunityIcons style={styles.chipsIcon} name={"food-fork-drink"} size={18} />
      },
      {
        name: "Restaurant",
        icon: <IonIcons style={styles.chipsIcon} name={"ios-restaurant"} size={18} />
      },
      {
        name: "Dineouts",
        icon: <IonIcons style={styles.chipsIcon} name={"md-restaurant"} size={18} />
      },
      {
        name: "Snacks Corner",
        icon: <MaterialCommunityIcons style={styles.chipsIcon} name={"food"} size={18} />
      },
      {
        name: "Hotel",
        icon: <Fontisto style={styles.chipsIcon} name={"hotel"} size={15} />
      }
    ],
    region: {
      latitude: 22.62938671242907,
      longitude: 88.4354486029795,
      latitudeDelta: 0.04864195044303443,
      longitudeDelta: 0.040142817690068
    }
  };

  const [state, setState] = useState(initialMapState);

  const interpolation = state.markers.map((marker, index) => {
    const inputRange = [
      (index - 1) * CARD_WIDTH,
      index * CARD_WIDTH,
      ((index+ 1) * CARD_WIDTH)
    ];

    const scale = mapAnimation.interpolate({
      inputRange,
      outputRange: [1,1.5,1],
      extrapolate: "clamp"
    });

    return {scale};
  });

  const  onMarkerPress = (mapEventData) => {
    const markerId = mapEventData._targetInst.return.key;
    let x = ( markerId * CARD_WIDTH )+ (markerId * 20);
    if (Platform.OS === "ios") {
      x = x - SPACING_FOR_CARD_INSET
    };

    _scrollView.current.scrollTo({x: x, y: 0, animated: true})
  };

  const _map = useRef(null);
  const _scrollView = useRef(null);

  return (
   <View style={styles.container}>
     <MapView
       ref={_map}
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.container}
       initialRegion={state.region}
       customMapStyle={mapStandardStyle}
     >
       {
         state.markers.map((marker, index) => {
           const scaleStyle = {
             transform: [
               {
                 scale: interpolation[index].scale
               }
             ]
           }
           return (
             <Marker
               key={index}
               coordinate={marker.coordinate}
               onPress={(event) => {
                onMarkerPress(event);
               }}
             >
               <Animated.View style={styles.markerWrap}>
                 <Animated.Image
                   source={mapMarker}
                   style={[styles.marker, scaleStyle]}
                   resizeMode={"cover"}
                 />
               </Animated.View>
             </Marker>
           )
         })
       }
     </MapView>
     <View style={styles.searchBox}>
       <TextInput
         placeholder={"Search here"}
         placeholderTextColor={"#000"}
         autoCapitalize={"none"}
         style={{flex: 1, padding: 0}}
       />
       <IonIcons name={"ios-search"} size20/>
     </View>
     <ScrollView
       horizontal
       scrollEventThrottle={1}
       showsHorizontalScrollIndicator={false}
       height={50}
       style={styles.chipsScrollView}
       contentInset={{
         top: 0,
         left: 0,
         bottom: 0,
         right: 20
       }}
       contentContainerStyle={{
         paddingRight: Platform.OS === "ios" ? 0 : 20
       }}
     >
       {
         state.categories.map((category, index) => {
           return (
             <TouchableOpacity key={index} style={styles.chipsItem}>
               {category.icon }
               <Text>
                 {category.name}
               </Text>
             </TouchableOpacity>
           )
         })
       }

     </ScrollView>
     <Animated.ScrollView
       ref={_scrollView}
       horizontal
       pagingEnabled
       scrollEventThrottle={1}
       showsHorizontalScrollIndicator={false}
       style={styles.scrollView}
       snapToInterval={CARD_WIDTH + 20}
       snapToAlignment={"center"}
       contentInset={{top: 0, left: SPACING_FOR_CARD_INSET, bottom: 0, right: SPACING_FOR_CARD_INSET}}
       contentContainerStyle={{paddingHorizontal: Platform.OS === "android" ? SPACING_FOR_CARD_INSET : 0}}
       onScroll={Animated.event(
         [
           {
             nativeEvent: {
               contentOffset: {
                 x: mapAnimation
               }
             }
           }
         ],
         {useNativeDriver: true}
       )}
     >
       {
         state.markers.map((marker, index) => {
           return (
             <View style={styles.card} key={index}>
               <Image
                 source={marker.image}
                 style={styles.cardImage}
                 resizeMode={"cover"}
               />
               <View style={styles.textContent}>
                 <Text numberOfLines={1} style={styles.cardTitle}>
                   {marker.title}
                 </Text>
                 <StarRatingScreen
                   reviews={marker.reviews}
                   ratings={marker.rating}
                 />
                 <Text numberOfLines={1} style={styles.cardDescription}>
                   {marker.description}
                 </Text>
                 <View style={styles.button}>
                   <TouchableOpacity
                     onPress={() => {

                     }}
                     style={[styles.signIn, {borderColor: "#FF6347", borderWidth: 1}]}
                   >
                     <Text style={[styles.textSign, {color: "#FF6347"}]}>
                       Order now
                     </Text>
                   </TouchableOpacity>
                 </View>
               </View>
             </View>
           )
         })
       }
     </Animated.ScrollView>
   </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  searchBox: {
    position: 'absolute',
    marginTop: Platform.OS === "ios" ? 40 : 20,
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#ccc',
    // shadowOffSet: {width: 0, height: 3},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10
  },
  chipsScrollView: {
    position: 'absolute',
    top: Platform.OS === "ios" ? 90 : 80,
    paddingHorizontal: 10
  },
  chipsIcon: {
    marginRight: 5
  },
  chipsItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 8,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    height: 35,
    shadowColor: '#ccc',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10
  },
  scrollView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH
  },
  card: {
    backgroundColor: "#fff",
    elevation: 2,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginHorizontal: 10,
    shadowColor: "#fff",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {width: 2, height: -2},
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: 'hidden'
  },
  cardImage: {
    flex: 3,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  textContent: {
    flex: 2,
    padding: 10
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: "bold"
  },
  cardDescription: {
    fontSize: 12,
    color: "#444"
  },
  markerWrap: {
    alignItems: 'center',
    justifyContent: "center",
    width: 50,
    height: 50
  },
  marker: {
    width: 30,
    height: 30
  },
  button: {
    alignItems: 'center',
    marginTop: 5
  },
  signIn: {
    width: '100%',
    padding: 5,
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: 3
  },
  textSign: {
    fontSize: 14,
    fontWeight: "bold"
  },
  map: {
    height: '100%'
  },
  bubble: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
    width: 150
  },
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5
  },
  name: {
    marginBottom: 5,
    fontSize: 16
  },
  image: {
    width: 120,
    height: 80
  }
});
