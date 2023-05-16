import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {parameters, colors} from '../global/styles'
import {Icon} from 'react-native-elements';
import {goBack} from "../initializer/services/NavigationService";

export default function Header({title, type}) {
  return(
    <View style={styles.header}>
      <View style={{marginLeft: 20}}>
        <Icon
          type={'material-community'}
          name={type}
          color={colors.headerText}
          size={28}
          onPress={() => {
            goBack();
          }}
        />
      </View>
      <View>
        <Text style={styles.headerText}>
          {title}
        </Text>
      </View>
      </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection:'row',
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
    paddingTop: 45
  },
  headerText: {
    color: colors.headerText,
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 40
  }
});
