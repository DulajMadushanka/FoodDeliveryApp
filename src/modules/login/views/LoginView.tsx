import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Alert, Keyboard, KeyboardAvoidingView, Platform, Text, TouchableWithoutFeedback, View} from 'react-native';
import Actions from '../../../initializer/modules/Actions';
import styles from './Styles';
import {relativeHeight} from "../../../initializer/helper/ViewHelper";

export class LoginView extends Component {
  phone = null;

  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
      isShowError: false,
      errorToShow: '',
      isValid: false,
      countryCode: 'US',
      visiblePicker: false,
      country: {},
      initialCountry: '',

    };
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.loginWrapper} accessible={true}>
        <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
          <View style={styles.loginHeaderWrapper}>
            <View style={{marginBottom: 20}}>
              <Text style={styles.loginHeaderText}>Continue with<Text
                style={styles.loginHeaderPhoneText}>{' phone'}</Text></Text>
              <Text style={styles.loginTitleText}>{'You will receive six digit code to verify next.'}</Text>
            </View>
            <View style={{height: relativeHeight(100)}}/>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
  }
}

export default connect(state =>
    ({
      countries: state.common.get('countries'),
      loadingAction: state.common.get('loadingAction'),
    }),
  ({

  }),
)(LoginView);
