import React, {Component} from 'react';
import store from '../src/initializer/modules/Store';
import {Actions} from '../src/initializer/modules/Actions';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import Toast, {BaseToast} from 'react-native-toast-message';
import {createAppContainer} from 'react-navigation';
import {AppNavigator} from './initializer/navigation/AppNavigator';
import { setTopLevelNavigator } from "./initializer/services/NavigationService";
import PositionService from '../src/initializer/services/Position.service';
import PermissionService from '../src/initializer/services/Permissions.service';
import {relativeWidth} from "../src/initializer/helper/ViewHelper";

const AppContainer = createAppContainer(AppNavigator);
PermissionService.init(store);
PositionService.init(store, null);

export class App extends Component {
  componentDidMount() {
    //SplashScreen.hide()
  }

  toastConfig = {
    warning: ({ text1, text2, ...rest }) => (
      <BaseToast
        {...rest}
        leadingIcon={require('../assets/images/icons/alert.png')}
        style={{ borderLeftColor: 'red' }}
        contentContainerStyle={{ paddingHorizontal: relativeWidth(15)}}
        text1Style={{
          fontSize: relativeWidth(15),
          fontWeight: 'bold'
        }}
        leadingIconStyle={{}}
        text1={text1}
        text2={text2}
      />
    ),
  };

  render() {
    console.disableYellowBox = true;
    return (
      <Provider store={store}>
        <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
          <AppContainer
            ref={navigatorRef => {
              setTopLevelNavigator(navigatorRef);
            }}
          />
          <Toast config={this.toastConfig} ref={(ref) => Toast.setRef(ref)} />
        </View>
      </Provider>
    );
  }
}
export default App;

