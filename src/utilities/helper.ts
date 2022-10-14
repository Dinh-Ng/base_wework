/* eslint-disable curly */
import {Platform} from 'react-native';

export const isAndroid = Platform.OS === 'android';

export const isIos = Platform.OS === 'ios';

export function logger(msg: any, isWarning?: boolean, params?: any): void {
  if (__DEV__ && !isWarning) {
    if (params) console.log(msg, params);
    else console.log(msg);
  }
  if (__DEV__ && isWarning) {
    if (params) console.warn(msg, params);
    else console.warn(msg);
  }
}
