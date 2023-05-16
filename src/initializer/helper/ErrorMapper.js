import { NetworkError } from '../models/'

export class ErrorMapper {

  static DEFAULT_NETWORK_ERROR_MESSAGE = 'Network Error Occurred';
  static DEFAULT_NETWORK_ERROR_MESSAGE_CODE = '2001';

  mapNetworkError(error, code, message) {
    const networkError = new NetworkError(error);
    networkError.code = code || error.code || error.status || this.DEFAULT_NETWORK_ERROR_MESSAGE_CODE;
    networkError.message = message || error.message || this.DEFAULT_NETWORK_ERROR_MESSAGE;

    return networkError;
  }
}

export default new ErrorMapper();

