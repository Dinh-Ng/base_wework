import {DrawerNavigationOptions} from '@react-navigation/drawer';
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

const drawerNavigationOption: DrawerNavigationOptions = {
  headerShown: false,
  drawerType: 'front',
};

export {authNavigationOption, drawerNavigationOption, unAuthNavigationOption};
