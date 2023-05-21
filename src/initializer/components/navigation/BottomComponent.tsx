import React, {useEffect} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './Styles';
import {connect} from 'react-redux';
import HomeSelect from '../../../../assets/images/icons/home-selected-icon.svg';
import Home from '../../../../assets/images/icons/home-icon.svg';
import FeedSelect from '../../../../assets/images/icons/feed-selected-icon.svg';
import Feed from '../../../../assets/images/icons/feed-icon.svg';
import MapSelect from '../../../../assets/images/icons/place-selected-icon.svg';
import Map from '../../../../assets/images/icons/place-icon.svg';
import BookingsSelect from '../../../../assets/images/icons/calendar-selected-icon.svg';
import Bookings from '../../../../assets/images/icons/calendar-icon.svg';
import Actions from '../../../initializer/modules/Actions';
import {navigate} from "../../../initializer/services/NavigationService";

const BottomComponent = (props) => {
  const {selectTabView, selectedBottomTab } = props;

  return (
    <View style={styles.bottomViewContainer}>
     <View style={styles.bottomComponentContainer}>
       <View style={styles.bottomComponentView}>
         <TouchableOpacity onPress={() => {}}>
           {selectedBottomTab === "HOME" ? (
             <View style={styles.selectedIconContainer}>
               <HomeSelect/>
             </View>
           ) : (
             <Home />
           )}
         </TouchableOpacity>
         <TouchableOpacity onPress={() =>  navigate("SearchScreen", {})}>
           {selectedBottomTab === "FEED" ? (
             <View style={styles.selectedIconContainer}>
               <FeedSelect/>
             </View>
           ) : (
             <Feed />
           )}
         </TouchableOpacity>
         <TouchableOpacity onPress={() => {}}>
           {selectedBottomTab === "APPOINTMENT" ? (
             <View style={styles.selectedIconContainer}>
               <BookingsSelect />
             </View>
           ) : (
             <Bookings />
           )}
         </TouchableOpacity>
         <TouchableOpacity onPress={() => {}}>
           {selectedBottomTab === "LOCATION" ? (
             <View style={styles.selectedIconContainer}>
               <MapSelect />
             </View>
           ) : (
             <Map />
           )}
         </TouchableOpacity>
       </View>
     </View>
    </View>
  );
};

export default connect(state =>
    ({
      selectedBottomTab: state.common.get('selectedBottomTab')
    }),
  ({
    selectTabView: Actions.common.selectTabView
  }),
)(BottomComponent);

