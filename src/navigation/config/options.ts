import {StackNavigationOptions} from '@react-navigation/stack';

import transition from './transitions';

const unAuthNavigationOption: StackNavigationOptions = {
  headerShown: false,
  transitionSpec: {
    open: transition,
    close: transition,
  },
};

const authNavigationOption: StackNavigationOptions = {
  headerShown: false,
  gestureEnabled: true,
  transitionSpec: {
    open: transition,
    close: transition,
  },
};

export {authNavigationOption, unAuthNavigationOption};
