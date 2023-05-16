import Repository from './Repository';
import {Platform} from 'react-native';
import {request, check, PERMISSIONS, RESULTS} from 'react-native-permissions';

class PositionRepository extends Repository {
  async requestLocationPermission() {
    console.log('Requesting permissions for location')
    try {
      if (Platform.OS === 'android') {
        const fineLocation = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        if (fineLocation !== RESULTS.GRANTED) {
          const coarseLocation = await request(PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION);
          return coarseLocation;
        }
        return fineLocation;
      }
    } catch(e) {
      console.log(e);
    }
  }

  async getLocationPermission() {
    try {
      if (Platform.OS === 'ios') {
        const locationAlwaysPermission = await check(PERMISSIONS.IOS.LOCATION_ALWAYS);
        if (locationAlwaysPermission !== RESULTS.GRANTED) {
          const locationWhenUsingPermission = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
          return locationWhenUsingPermission;
        }
        return locationAlwaysPermission;
      } else {
        const fineLocation = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        if (fineLocation !== RESULTS.GRANTED) {
          const coarseLocation = await check(PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION);
          return coarseLocation;
        }
        return fineLocation;

      }

    } catch (e) {
      throw e; // handled by the reducer
    }
  }
}

export default new PositionRepository();

