import React from 'react';
import {Platform} from 'react-native';
import {createLogger} from '../AppUtils';
import _ from 'lodash';
import Geolocation from '@react-native-community/geolocation';
import {RESULTS} from 'react-native-permissions';
import Actions from './../modules/Actions';
import {getPreciseDistance} from 'geolib';
import PositionRepository from '../../initializer/repositories/PositionRepository';

const logger = createLogger('[Position][service]');
let watchSchedule = null;

export class PositionService {
  geolocation = Geolocation;
  constructor() {
    this.state = {
      lastUpdatedPosition: {},
      callTime: 0,
    };
    //if (Platform.OS === 'android') {
    //Permiss.checkLocation();
    //}
    //this.initWatch();
  }

  async initWatch() {
    if (Platform.OS === 'android') {
      const permissions = await PositionRepository.getLocationPermission();
      if (permissions === RESULTS.GRANTED) {
        this.schedulePositionWatch();
      } else {
        clearTimeout(watchSchedule);
        watchSchedule = _.delay(() => this.initWatch(), 2000);
        console.log('[Position][Service] location permissions are not provided');
      }
    } else {
      this.schedulePositionWatch();
    }
  }

  init(store, client) {
    this.store = store;
    this.client = client;
    // this.initWatch();
  };
  /**
   * only current position on start of the app
   */

  getCurrentPositionOfUser(force = false) {
    this.geolocation.getCurrentPosition(
     position => {
       const coords = position.coords;
       if (coords && coords.latitude) {
         this.store.dispatch(Actions.common.getCurrentPosition({
           latitude: coords.latitude,
           longitude: coords.longitude,
         }));
         if (force) {
         } else {
           this.onPositionUpdated(position);
         }
       }
       this.store.dispatch(Actions.common.setLocationPermissionMessage({
         PERMISSION_DENIED: false,
         message: '',
       }));
     },
     (error) => {
       // console.warn('position error', error);
       if (error.PERMISSION_DENIED === 1) {
         this.store.dispatch(Actions.common.setLocationPermissionMessage({
           PERMISSION_DENIED: true,
           message: error.message,
         }));
       }
       _.delay(() => this.getCurrentPositionOfUser(), 2000);
     },
     {enableHighAccuracy: true, timeout: 5000, maximumAge: 10000},
    );
  };

  /**
   * Watch geolocation updates of the app
   */
  schedulePositionWatch() {
    this.watchId = this.geolocation.watchPosition((position) => {
      this.onPositionUpdated(position);
    }, (error) => {
      this.onLocationUpdateError(error);
    }, {enableHighAccuracy: false, timeout: 5000, maximumAge: 20000, distanceFilter: 0.4});
  };

  onLocationUpdateError = (error) => {
    logger.log('####### error position', error);
  };

  reUpdatePositions = (displacement, limitDistance, {latitude, longitude}) => {
    if (displacement > limitDistance) {
      this.store.dispatch(Actions.common.getCurrentPosition({latitude: latitude, longitude: longitude}));
      this.state = {
        ...this.state,
        ...{
          lastUpdatedPosition: {latitude: latitude, longitude: longitude},
          callTime: 1,
        },
      };
    }
  };

  onPositionUpdated({coords}) {
    const {lastUpdatedPosition, callTime} = this.state;
    let displacement = 0;
    if (lastUpdatedPosition.latitude) {
      displacement = getPreciseDistance(lastUpdatedPosition, coords, 0.01);
    }

    if (coords.speed > 1) {
      //const comparedDisplacement = getComparedDistance(coords);
      //this.reUpdatePositions(displacement, comparedDisplacement, coords);
    }

    if (coords.speed <= 1 && lastUpdatedPosition.latitude) {
      this.reUpdatePositions(displacement, 20, coords);
    }

    if (!lastUpdatedPosition.latitude && callTime === 0) {
      this.store.dispatch(Actions.common.getCurrentPosition({latitude: coords.latitude, longitude: coords.longitude}));
      this.state = {
        ...this.state,
        ...{
          lastUpdatedPosition: {latitude: coords.latitude, longitude: coords.longitude},
          callTime: 1,
        },
      };
    }
  };
}

export default new PositionService();
