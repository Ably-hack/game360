/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import Endpoints from './endpoints';
import HttpSuccessDataHandler from 'src/common/utils/http_success_handler';
import HttpErrorHandler from 'src/common/utils/http_error_handler';

export default class APIService {
  static async login(requestBody: object, cb: any) {
    axios
      .post(`${Endpoints.LOGIN}`, requestBody)
      .then((response) => {
        cb(HttpSuccessDataHandler.getSuccessResponseData(response), null);
      })
      .catch((error) => {
        cb(null, HttpErrorHandler.getErrorResponseData(error));
      });
  }

  static async register(requestBody: object, cb: any) {
    axios
      .post(`${Endpoints.REGISTER}`, requestBody)
      .then((response) => {
        cb(HttpSuccessDataHandler.getSuccessResponseData(response), null);
      })
      .catch((error) => {
        cb(null, HttpErrorHandler.getErrorResponseData(error));
      });
  }
}
