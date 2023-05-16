import {Dimensions, StyleSheet} from 'react-native';
import {getScaledValue, relativeHeight, relativeWidth} from '../../initializer/helper/ViewHelper';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
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
  bottomScreenContainer: {
    marginTop: relativeHeight(40)
  },
  selectedIconContainer: {
    width: relativeWidth(38),
    height: relativeWidth(38),
    borderRadius: relativeWidth(50),
    backgroundColor: '#101935',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  bookNowBtnContainer: {
    width: relativeWidth(60),
    height: relativeWidth(45),
    borderRadius: relativeWidth(8),
    backgroundColor: '#101935',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 40,
    marginLeft: 10
  },
  bookNowBtnText: {
    color: '#FFFFFF',
    fontSize: getScaledValue(16),
    fontWeight: '700',
  },


  logo: {
    fontSize: relativeWidth(38),
    fontFamily: 'AmerigoBT-BoldA',
    fontStyle: 'normal',
    color: '#FFFFFF',
    letterSpacing: 0.6,
    // lineHeight: relativeHeight(26),
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
    marginTop: relativeWidth(60),
  },
  appSettingsText: {
    fontSize: relativeWidth(12),
    fontStyle: 'normal',
    color: '#FFFFFF',
    letterSpacing: 0.6,
  },
  AppSettingsContent: {
    marginLeft: relativeWidth(40),
  },
  AppSettingsContentText: {
    fontSize: relativeWidth(14),
    fontStyle: 'normal',
    color: '#FFFFFF',
    marginTop: relativeWidth(20),
    letterSpacing: 0.6,
  },
  line: {
    backgroundColor: '#343E4D',
    height: relativeWidth(1),
    width: relativeWidth(280),
    marginBottom: 0,
    marginTop: relativeHeight(180),
    // marginLeft:relativeWidth(10),
  },
  userAvatar: {
    marginTop: relativeWidth(18),

  },
  userInforRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: relativeWidth(14),
    fontStyle: 'normal',
    color: '#FFFFFF',
    marginTop: relativeWidth(20),
    marginRight: relativeWidth(30),
    letterSpacing: 0.6,
  },
  logout: {
    marginTop: relativeWidth(10),
  },

});
