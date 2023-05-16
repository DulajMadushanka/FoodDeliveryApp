import {Dimensions, StyleSheet} from 'react-native';
import {relativeHeight, relativeWidth} from '../../../initializer/helper/ViewHelper';
import BaseColors from '../../../initializer/helper/BaseColors';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
//LoginView============>
  loginWrapper: {
    flex: 1,
    backgroundColor: BaseColors.white,
  },
  loginHeaderWrapper: {
    flex: 1,
    height: height,
    justifyContent: 'space-between',
    backgroundColor: BaseColors.white,
    paddingHorizontal: relativeWidth(20),
  },
  loginHeaderText: {
    color: BaseColors.black,
    fontFamily: 'AmerigoBT-BoldA',
    fontSize: relativeWidth(24),
  },
  loginHeaderPhoneText: {
    color: BaseColors.blueLagoon,
    fontSize: relativeWidth(24),
  },
  loginTitleText: {
    color: BaseColors.black,
    fontSize: relativeWidth(16),
    marginTop: relativeWidth(12),
  },
  loginPhoneText: {
    color: BaseColors.black,
    fontSize: relativeWidth(16),
    marginTop: relativeWidth(20),
  },
  loginNumberText: {
    letterSpacing: 2,
    color: BaseColors.GreyishBrown,
    fontSize: relativeWidth(16),
  },
  loginNumberInputStyle: {
    width: '100%',
    zIndex: 10,
    borderBottomWidth: 1,
    height: relativeWidth(43),
    marginTop: relativeWidth(8),
    borderBottomColor: BaseColors.pinkSwan,
    paddingHorizontal: relativeWidth(10),
  },
  loginButtonWrapper: {
    alignSelf: 'center',
    width: relativeWidth(287),
    paddingTop: relativeWidth(20),
  },
  loginButtonText: {
    color: BaseColors.white,
    fontSize: relativeWidth(14),
  },

  //OTPView==========>
  loginChangeNumberText: {
    color: BaseColors.blueLagoon,
    fontSize: relativeWidth(14),
    marginTop: relativeWidth(12),
  },
  verificationCodeWrapper: {
    marginTop: relativeHeight(30),
  },
  otpCodeInputStyle: {
    borderWidth: 0.7,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: BaseColors.black,
    width: relativeWidth(50),
    height: relativeWidth(50),
    fontSize: relativeWidth(24),
    borderRadius: relativeWidth(6),
  },
  loginResendTextWrapper: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginOtpErrorText: {
    textAlign: 'center',
    color: BaseColors.monaLisa,
    fontSize: relativeWidth(12),
    marginTop: relativeWidth(23),
    width: relativeWidth(276),
    lineHeight: relativeHeight(18),
  },
  loginResendOtpTextWrapper: {
    alignSelf: 'center',
    alignItems: 'center',
    width: relativeWidth(240),
    marginTop: relativeWidth(23),

  },
  loginResendOtpText: {
    textAlign: 'center',
    color: BaseColors.blueLagoon,
    fontSize: relativeWidth(14),
  },
  otpButtonWrapper: {
    alignSelf: 'center',
    width: relativeWidth(287),
    marginTop: relativeWidth(50),
  },
  otpButtonText: {
    color: BaseColors.white,
    fontSize: relativeWidth(14),
  },
  borderStyleBase: {
    width: '100%',
    height: 50,
  },
  underlineStyleBase: {
    borderWidth: 0.7,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: BaseColors.black,
    width: relativeWidth(50),
    height: relativeWidth(50),
    fontSize: relativeWidth(24),
    borderRadius: relativeWidth(6),
    borderColor: BaseColors.blueLagoon,
  },
  underlineStyleHighLighted: {
    borderColor: BaseColors.blueLagoon,
  },


  //LoginUserDetailsView==========>
  userDetailsTextInputWrapper: {
    marginTop: relativeHeight(20),
  },
  userDetailsTextInputWrapperInfo: {
    marginTop: relativeHeight(23),
  },
  userDetailsTextPlaceholder: {
    color: BaseColors.blueLagoon,
    fontSize: relativeWidth(13),
  },
  userDetailsTextInput: {
    width: '100%',
    letterSpacing: 0.6,
    alignSelf: 'center',
    borderBottomWidth: 1,
    color: BaseColors.black,
    fontSize: relativeWidth(14),
    height: relativeWidth(30),
    paddingHorizontal: relativeWidth(10),
  },
  userDetailsLabel: {
    color: BaseColors.blueLagoon,
    fontSize: relativeWidth(13),
   marginBottom: relativeHeight(23),
  },
  userDetailsButtonWrapper: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: BaseColors.white,
    width: relativeWidth(287),
    marginTop: relativeWidth(70),
    marginBottom: relativeWidth(70),
  },
  userDetailsTermsTextWrapper: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: relativeWidth(287),
    marginTop: relativeWidth(10),
  },
  userDetailsTermsText: {
    color: BaseColors.blueLagoon,
    fontSize: relativeWidth(14),
    lineHeight: relativeHeight(21),
  },
  userDetailsTermsText1: {
    textAlign: 'center',
    color: BaseColors.black,
    fontSize: relativeWidth(14),
    lineHeight: relativeHeight(21),
  },

  //SplashView=======>
  splashWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashWrapperInfo: {
    alignSelf: 'center',
  },



  //PrivacyModalView=========>
  privacyWrapper: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
    height: '98%',
    bottom: relativeHeight(-20),
  },
  privacyWrapperInfo: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    alignContent: 'center',
    height: relativeHeight(700),
    bottom: relativeHeight(0),
    borderTopRightRadius: relativeWidth(15),
    borderTopLeftRadius: relativeWidth(15),
    backgroundColor: BaseColors.white,
  },
  privacyDetailsWrapper: {
    flex: 1,
    paddingHorizontal: relativeWidth(15),
  },
  privacyDetailsText: {
    color: BaseColors.nero,
    fontSize: relativeWidth(13),
    lineHeight: relativeHeight(20),
    marginTop: relativeHeight(39),
  },
  privacyDetailsHeaderText: {
    color: BaseColors.black,
    fontSize: relativeWidth(18),
    marginTop: relativeHeight(39),
  },
  privacyDetailsTitleText: {
    textAlign: 'center',
    color: BaseColors.black,
    fontSize: relativeWidth(10),
    marginBottom: relativeHeight(30),
  },
  privacyScroll: {
    flex: 1,
    marginTop: relativeHeight(20),
    marginBottom: relativeHeight(20),
  },

  //UserProfilePictureView=======>
  userProfilePictureWrapper: {
    marginTop: relativeHeight(53),
  },
  userProfilePictureWrapperInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    alignSelf: 'center',
    width: relativeWidth(214),
    height: relativeWidth(214),
    marginTop: relativeHeight(53),
  },
  userProfilePicture: {
    justifyContent: 'center',
    alignItems: 'center',
    width: relativeWidth(214),
    height: relativeWidth(214),
  },
  userProfilePictureCameraIcon: {
    position: 'absolute',
    alignSelf: 'center',
  },
  userProfilePictureTitleText: {
    textAlign: 'center',
    color: BaseColors.black,
    fontSize: relativeWidth(14),
    marginTop: relativeHeight(30),
  },
  userProfilePictureButtonWrapper: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: BaseColors.white,
    width: relativeWidth(287),
    marginTop: relativeWidth(53),
  },
});
