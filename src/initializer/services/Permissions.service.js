import Permissions from "react-native-permissions";
import {connect} from "react-redux";
import Actions from "./../modules/Actions";
import _ from 'lodash';
import {PermissionsAndroid} from "react-native";

class PermissionsService {
  init(store) {
    this.store = store;
    this.checkLocation();
  }

  checkPeriodicPermissions() {
    _.delay(() => {
      this.checkLocation();
    }, 2000);
  }

  checkLocation() {
    Permissions.check('location').then(response => {
      if (response !== 'authorized') {
        this.checkPeriodicPermissions();
      }
      //this.store.dispatch(Actions.common.locationChanged(response));
    }).catch(e => {
      console.warn(e);
    });
  }
}
export default new PermissionsService();
