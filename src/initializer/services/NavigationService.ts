import { NavigationActions } from 'react-navigation';

let _navigator;

const setTopLevelNavigator = (navigatorRef) => {
  _navigator = navigatorRef;
}

const navigate = (routeName, params) => {
  _navigator.dispatch(
    NavigationActions.navigate({
      type: NavigationActions.NAVIGATE,
      routeName,
      params,
    })
  );
  return { routeName, params };
}

const goBack = () => {
  _navigator.dispatch(NavigationActions.back());
};

export {
  navigate,
  setTopLevelNavigator,
  goBack
};
