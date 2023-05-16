import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {parameters, colors} from '../global/styles'
import {Icon, withBadge} from 'react-native-elements';
import {goBack} from "../initializer/services/NavigationService";

export default function HomeHeader({title, type}) {
  const BadgeIcon = withBadge(0)(Icon)
  return (
    <View style={styles.header}>
      <View style={{marginLeft: 15, justifyContent: 'center', alignItems: 'center'}}>
        <Icon
          type={'material-community'}
          name={'menu'}
          color={colors.cardBackground}
          size={32}
          onPress={() => {
            goBack();
          }}
        />
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.headerText}>
          XpressFood
        </Text>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center', marginRight: 15}}>
        <BadgeIcon
          type={'material-community'}
          name={'cart'}
          color={colors.cardBackground}
          size={35}
          onPress={() => {
            goBack();
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
    paddingTop: 45,
    justifyContent: 'space-between'
  },
  headerText: {
    color: colors.cardBackground,
    fontSize: 25,
    fontWeight: 'bold',
  }
});
