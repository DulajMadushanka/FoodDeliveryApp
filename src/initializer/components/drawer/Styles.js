import {Dimensions, StyleSheet} from 'react-native';
import {relativeHeight, relativeWidth} from '../../../initializer/helper/ViewHelper';
import BaseColors from '../../../initializer/helper/BaseColors';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  //AdminDrawer========>
  adminDrawerWrapper: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#242D3A',
    paddingTop: relativeWidth(40),
    paddingBottom: relativeWidth(20),
    paddingHorizontal: relativeWidth(20),
  },
  adminDrawerMainColumn: {
    flex: 1,
    justifyContent: 'space-between',
  },
  adminDrawerLogoBackButtonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  adminDrawerLogoWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  adminDrawerLogoText: {
    color: BaseColors.white,
    fontSize: relativeWidth(16),
    letterSpacing: 3,
    marginLeft: relativeWidth(13)
  },
  adminDrawerLogo: {
    fontSize: relativeWidth(38),
    fontFamily: 'AmerigoBT-BoldA',
    color: BaseColors.white,
  },
  adminDrawerLogoApp: {
    fontSize: relativeWidth(38),
    fontFamily: 'AmerigoBT-BoldA',
    color: BaseColors.sherpaBlue,
  },
  adminDrawerButtonView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: relativeWidth(43),
    height: relativeWidth(43),
    borderRadius: relativeWidth(10),
    backgroundColor: BaseColors.licorice
  },
  adminDrawerCloseIcon: {
    fontSize: relativeWidth(22),
    color: BaseColors.white,
  },
  adminDrawerAppSettingsRow: {
    marginTop: relativeWidth(40),
  },
  adminDrawerAppSettingsText: {
    fontStyle: 'normal',
    color: BaseColors.white,
    fontSize: relativeWidth(14),
  },
  adminDrawerAppSettingsContent: {
    marginLeft: relativeWidth(40),
  },
  adminDrawerAppSettingsContentText: {
    fontStyle: 'normal',
    color: BaseColors.white,
    fontSize: relativeWidth(16),
    marginTop: relativeWidth(18),
  },
  adminDrawerLine: {
    backgroundColor: '#343E4D',
    height: relativeWidth(1),
    width: relativeWidth(280),
    marginBottom: relativeWidth(10),
    marginTop: relativeHeight(10),
  },
  adminDrawerUserInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  adminDrawerUserImageInfoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  adminDrawerEditProfileImage: {
    justifyContent: 'center',
    alignItems: 'center',
    width: relativeWidth(51),
    height: relativeWidth(51),
  },
  adminDrawerUserNameInfoColumn: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: relativeWidth(10),
  },
  adminDrawerName: {
    color: BaseColors.white,
    fontSize: relativeWidth(18),
    marginTop: relativeWidth(4),
    lineHeight: relativeHeight(25)
  },
  adminDrawerEmail: {
    color: BaseColors.white,
    fontSize: relativeWidth(14),
  },

  container: {
    flex: 1,
    marginTop: relativeWidth(60),
    marginLeft: relativeWidth(20),
    marginRight: relativeWidth(20),
  },
  logoBackButtonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    fontSize: relativeWidth(38),
    fontFamily: 'AmerigoBT-BoldA',
    color: BaseColors.white,
  },
  logoApp: {
    fontSize: relativeWidth(38),
    fontFamily: 'AmerigoBT-BoldA',
    color: BaseColors.sherpaBlue,
  },
  buttonView: {
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius: 100,
    // width: relativeWidth(43),
    // height: relativeWidth(43),
    // backgroundColor: "#333B45",
  },
  appSettingsRow: {
    // marginLeft:relativeWidth(20),
    marginTop: relativeWidth(40),
  },

  AppSettingsContent: {
    marginLeft: relativeWidth(40),
  },
  AppSettingsContentText: {
    fontSize: relativeWidth(16),
    fontStyle: 'normal',
    color: '#FFFFFF',
    marginTop: relativeWidth(18),
  },
  line: {
    backgroundColor: '#343E4D',
    height: relativeWidth(1),
    width: relativeWidth(280),
    marginBottom: relativeWidth(10),
    marginTop: relativeHeight(10),
    // marginLeft:relativeWidth(10),
  },
  userAvatar: {
    marginTop: relativeWidth(18),

  },
  userInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginTop: relativeWidth(20),
  },
  userImageInfoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  userNameInfoColumn: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: relativeWidth(10),
  },
  name: {
    color: BaseColors.white,
    fontFamily: 'AmerigoBT-BoldA',
    fontSize: relativeWidth(18),
    marginTop: relativeWidth(4),
    lineHeight: relativeHeight(25)
  },
  email: {
    color: BaseColors.white,
    fontSize: relativeWidth(12),
  },
  logout: {
    // marginTop: relativeWidth(10),
  },
  editProfileImage: {
    justifyContent: 'center',
    alignItems: 'center',
    width: relativeWidth(51),
    height: relativeWidth(51),
  },
});
