import React, {useEffect, useState} from 'react';
import styles from './Styles';
import _ from 'lodash';
import {connect} from 'react-redux';
import Actions from '../../../initializer/modules/Actions';
import TVIcon from '../../../../assets/images/new logo-drawer.svg';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import LOGOUT from '../../../../assets/images/logout.svg';
import DEFAULT_IMAGE from '../../../../assets/images/default-image.jpeg';
import {navigate} from "../../../initializer/repositories/Repository";
import Icon from "react-native-vector-icons/AntDesign";

const Drawer = (props) => {
  const {navigation} = props;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null);

  const setImageUrl = async (image) => {
    if (image) {
      const imageUrl = "";
      setImage(imageUrl);
    }
  };

  const MenuItem = ({onPress, children}) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.AppSettingsContentText}>
          {children}
        </Text>
      </TouchableOpacity>
    )
  };

  const navigateHome = () => {
    navigation.closeDrawer();
    navigate('HomeScreen', {})
  };

  const navigateFeed = () => {
    navigation.closeDrawer();
    navigate('FeedScreen', {})
  };

  //

  return (
    <View style={styles.adminDrawerWrapper}>
      <View style={styles.adminDrawerMainColumn}>
        <View>
          <View style={styles.adminDrawerLogoBackButtonRow}>
            <View style={styles.adminDrawerLogoWrapper}>
              <TVIcon height={80} width={70}/>
              <Text style={styles.adminDrawerLogoText}>{'TVILU'}</Text>
            </View>
            <TouchableOpacity style={styles.adminDrawerButtonView} onPress={() => navigation.closeDrawer()}>
              <Icon name={'close'} style={styles.adminDrawerCloseIcon}/>
            </TouchableOpacity>
          </View>

          <View style={styles.adminDrawerAppSettingsRow}>
            <Text style={styles.adminDrawerAppSettingsText}>{'App Settings'}</Text>
          </View>
          <View style={styles.adminDrawerAppSettingsContent}>
            <MenuItem onPress={() => navigate('EditProfileScreen', {})}>{'Edit Profile'}</MenuItem>
            <MenuItem onPress={() => navigateHome()}>{'Salons'}</MenuItem>
            <MenuItem onPress={() => navigate('NotificationSettingScreen', {})}>{'Notifications'}</MenuItem>
            <MenuItem onPress={() => navigate('FavouritesViewScreen', {})}>{'Favourites'}</MenuItem>
            <MenuItem onPress={() => navigateFeed()}>{'Feed'}</MenuItem>
            {/*<MenuItem onPress={() => {}}>{'Loyalty Points'}</MenuItem>*/}
          </View>

          <View style={styles.adminDrawerAppSettingsRow}>
            <Text style={styles.adminDrawerAppSettingsText}>{'General settings'}</Text>
          </View>
          <View style={styles.adminDrawerAppSettingsContent}>
            <MenuItem onPress={() => navigate('ScanQRScreen', {})}>{'Scan QR code'}</MenuItem>
          </View>

          {/*<View style={styles.adminDrawerAppSettingsRow}>*/}
          {/*  <Text style={styles.adminDrawerAppSettingsText}>{'Become a salon worker'}</Text>*/}
          {/*</View>*/}
          {/*<View style={styles.adminDrawerAppSettingsContent}>*/}
          {/*  <MenuItem onPress={() => {*/}
          {/*  }}>{'List a service'}</MenuItem>*/}
          {/*</View>*/}
{
/*
         <View style={styles.adminDrawerAppSettingsRow}>
            <Text style={styles.adminDrawerAppSettingsText}>{'Help & Support'}</Text>
          </View>
          <View style={styles.adminDrawerAppSettingsContent}>
            <MenuItem onPress={() => {
            }}>{'Help'}</MenuItem>
            <MenuItem onPress={() => navigate('TermsOfServiceScreen', {})}>{'Terms of Service'}</MenuItem>
          </View>
*/
}
        </View>

        <View>
          <View style={styles.adminDrawerLine}/>
          <View style={styles.adminDrawerUserInfoRow}>
            <View style={styles.adminDrawerUserImageInfoRow}>
              <ImageBackground
                source={!_.isNil(image) ? {uri: image} : DEFAULT_IMAGE}
                resizeMode={'cover'}
                imageStyle={{borderRadius: 16}}
                style={styles.adminDrawerEditProfileImage}
              />
              <View style={styles.adminDrawerUserNameInfoColumn}>
                <Text style={styles.adminDrawerName}>{name}</Text>
                <Text style={styles.adminDrawerEmail}>{email}</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => {}}>
              <LOGOUT/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default connect(state =>
    ({

    }),
  ({

  }),
)(Drawer);
