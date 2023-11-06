/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-prototype-builtins */
export default class HttpErrorHandler {
  static getErrorResponseData(e: any) {
    if (e !== undefined && e !== null) {
      if (e.hasOwnProperty('response')) {
        const response = e.response;
        if (response !== undefined && response !== null) {
          if (response.hasOwnProperty('data')) {
            const responseData = response['data'];
            if (responseData && responseData.hasOwnProperty('message')) {
              return responseData['message'];
            }
          }
        }
      }
    }
  }
}
