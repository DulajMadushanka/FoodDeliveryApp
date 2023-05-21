import {Dimensions, StyleSheet} from 'react-native';
import {getScaledValue, relativeHeight, relativeWidth} from '../../../initializer/helper/ViewHelper';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  bottomViewContainer: {
    width: '100%',
    height: relativeHeight(67),
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: relativeWidth(16),
    borderTopLeftRadius: relativeWidth(16),
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOffset: {
      width: 5,
      height: 0,
    },
    elevation: 2,
    shadowRadius: relativeWidth(10),
    shadowOpacity: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  bottomComponentBookNowBtn: {
    width: relativeWidth(109),
    height: relativeWidth(45),
    backgroundColor: '#101935',
    borderRadius: relativeWidth(8),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomComponentBookNowBtnText: {
    fontWeight: '700',
    color: '#FFFFFF',
    lineHeight: getScaledValue(22)
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
  bottomComponentContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    paddingRight: relativeWidth(20),
    paddingLeft: relativeWidth(20)
  },
  bottomComponentView: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%'
  }
});
