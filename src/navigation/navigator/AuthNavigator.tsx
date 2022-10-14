import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {AUTH_ROUTE} from '@/navigation/config/appRoutes';
import {authNavigationOption} from '@/navigation/config/options';
import Login from '@/screens/Login';

const AuthStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={authNavigationOption}>
      <Stack.Screen name={AUTH_ROUTE.LOGIN} component={Login} />
    </Stack.Navigator>
  );
};

export default AuthStack;
