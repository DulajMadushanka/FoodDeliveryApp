import {NavigationActions} from 'react-navigation';
import Amplify, {Auth, API, Storage} from 'aws-amplify';
import {NetworkError} from '../models';

let _navigator;

const Config = {
  API_NAME: 'dev-salon-app-api',
  API_SALON_LAMBDA_NAME: 'dev-salon-app-lambda-api',
  API_TVILU_CLIENT: 'dev-tvilu-client-api',
  API_TVILU_CHECKING: 'dev-tvilu-checking-api',
  API_TVILU_PUBLIC_API: 'dev-tvilu-public-api',

};

export default class Repository {

  constructor() {
    this.API_NAME = Config.API_NAME;
    this.API_SALON_LAMBDA_NAME = Config.API_SALON_LAMBDA_NAME;
    this.API_TVILU_CLIENT = Config.API_TVILU_CLIENT;
    this.API_TVILU_CHECKING = Config.API_TVILU_CHECKING;
    this.API_TVILU_PUBLIC_API = Config.API_TVILU_PUBLIC_API;
    this.API = API;
    this.Storage = Storage;
  }

  buildMessage(body) {
    return {
      headers: {},
      body,
      response: true,
    };
  }

  async api(method = 'get', apiName, path, message) {
    const headers = {
      Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`,
    };
    if (message) {
      message.headers = headers;
    } else {
      message = { headers };
    }

    return this.API[method](apiName, path, message).catch((error) => {
      console.warn("error is : ", error);
      // throw error;
      const code = error.code || NetworkError.NETWORK_ERROR_CODE;
      const errorMessage = error.message || NetworkError.NETWORK_ERROR_MESSAGE;
      //throw new NetworkError(code, { errorMessage, apiName, path, message, method }, error);
      return null;
      // return Promise.reject(new NetworkError('code', 'message', error));
    });
  }

  apiPost({apiName = this.API_NAME, path, message}) {
    console.log()
    return this.api('post', apiName, path, message);
  }

  apiGet({apiName = this.API_NAME, path, message = null}) {
    return this.api('get', apiName, path, message);
  }
}

const setTopLevelNavigator = navigatorRef => {
  _navigator = navigatorRef;
};

const goBack = () => {
  _navigator.dispatch(NavigationActions.back());
};

const navigate = (routeName, params) => {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
  return {routeName, params};
};

// add other navigation functions that you need and export them

export {navigate, setTopLevelNavigator, goBack};

