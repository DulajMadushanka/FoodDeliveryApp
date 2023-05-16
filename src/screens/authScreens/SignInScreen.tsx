import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, Dimensions, TextInput} from 'react-native';
import {parameters, colors, titleText} from '../../global/styles'
import {Icon, Button, SocialIcon} from 'react-native-elements';
import Header from "../../components/Header";
import * as Animatable from 'react-native-animatable';
import {navigate} from "../../initializer/services/NavigationService";

export default function SignInScreen() {
  const [textInput2Fossued, setTextInput2Fossued] = useState(false);
  const textInput1 = useRef(1);
  const textInput2 = useRef(2);

  return (
    <View style={styles.container}>
      <Header
        title={"My account"}
        type={'arrow-left'}
      />
      <View style={{marginLeft: 20, marginTop: 10}}>
        <Text style={titleText}>Sign-In</Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={styles.text1}>
          Please enter the email and password
        </Text>
        <Text style={styles.text1}>
          registered with your account
        </Text>
      </View>
      <View style={{marginTop: 20}}>
        <View>
          <TextInput
            style={styles.textInput1}
            placeholder={"Email"}
            ref={textInput1}
          />
        </View>
        <View style={styles.textInput2}>
          <Animatable.View>
            <Icon
              name={"lock"}
              iconStyle={colors.grey3}
              type={"material"}
            />
          </Animatable.View>
          <TextInput
            placeholder={"Password"}
            style={{width: '80%'}}
            ref={textInput2}
            onFocus={() => {
              setTextInput2Fossued(false);
            }}
            onBlur={() => {
              setTextInput2Fossued(true);
            }}
          />
          <Animatable.View animation={textInput2Fossued ? "" : "fadeInLeft"} duration={400}>
            <Icon
              name={"visibility-off"}
              iconStyle={colors.grey3}
              type={"material"}
            />
          </Animatable.View>
        </View>
      </View>
      <View style={{marginHorizontal: 20, marginTop: 30}}>
        <Button
          title={"Sign In"}
          buttonStyle={parameters.styledButton}
          titleStyle={parameters.buttonTitle}
          onPress={() => navigate('HomeScreen', {})}
        />
      </View>
      <View style={{alignItems: 'center', marginTop: 15}}>
        <Text style={{...styles.text1, textDecorationLine: 'underline'}}>
          Forgot Password
        </Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 20, marginBottom: 20}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          OR
        </Text>
      </View>
      <View style={{marginHorizontal: 10, marginTop: 10}}>
        <SocialIcon
          title={"Sign In With Facebook"}
          button
          type={"facebook"}
          style={styles.socialIcon}
          onPress={() => {

          }}
        />
      </View>
      <View style={{marginHorizontal: 10, marginTop: 10}}>
        <SocialIcon
          title={"Sign In With Google"}
          button
          type={"google"}
          style={styles.socialIcon}
          onPress={() => {

          }}
        />
      </View>
      <View style={{marginTop: 25, marginLeft: 20}}>
        <Text style={{...styles.text1}}>
          New On XpressFood
        </Text>
      </View>
      <View style={{alignItems: 'flex-end', marginHorizontal: 20, marginTop: 20}}>
        <Button
          title={"Create an account"}
          buttonStyle={parameters.createButton}
          titleStyle={parameters.createButtonTitle}
        />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text1: {
    color: colors.grey3,
    fontSize: 16
  },
  textInput1: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15,
    height: 45
  },
  textInput2: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    height: 45
  },
  socialIcon: {
    borderRadius: 12,
    height: 50
  }
});
