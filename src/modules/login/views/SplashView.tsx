import React, {useEffect} from 'react';
import styles from './Styles';
import _ from 'lodash';
import Splash from '../../../../assets/images/icons/Svg/SplashScreen Logo.svg';
import LinearGradient from "react-native-linear-gradient";
import BaseColors from "../../../initializer/helper/BaseColors";
import {navigate} from "../../../initializer/services/NavigationService";

const SplashView = (props) => {
  const {navigation} = props;

  const checkAuthentication  = async () => {
    // const data = await AuthRepository.authenticate();
    // const isSignOut = _.get(navigation, 'state.params.isSignOut', false);
    // if(data.error || isSignOut){
    //   setNavigation()
    // } else {
    //   navigate('Home', {});
    // }
    setNavigation()
  };
  useEffect( () => {
    checkAuthentication();
  }, [navigation]);

  const setNavigation = _.debounce(() => {
    navigate('SignInWelcomeScreen', {})
  }, 700, {leading: true, trailing: false});

  return (
    <LinearGradient
      start={{x: 0, y: 1}}
      end={{x: 1, y: 0}}
      colors={BaseColors.splashLinearGradient}
      style={styles.splashWrapper}
    >
      <Splash/>
    </LinearGradient>
  );
};

export default SplashView;
