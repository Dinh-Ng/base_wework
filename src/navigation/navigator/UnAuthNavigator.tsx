import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Screen1 from '../../screens/Screen1/index';
import {SCREEN1} from '../config/appRoutes';
import {unAuthNavigationOption} from '../config/options';

const UnAuthStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={unAuthNavigationOption}>
      <Stack.Screen name={SCREEN1} component={Screen1} />
    </Stack.Navigator>
  );
};

export default UnAuthStack;
