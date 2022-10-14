import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {AUTH_ROUTE} from '@/navigation/config/appRoutes';

import AuthStack from './AuthNavigator';
import UnAuthStack from './UnAuthNavigator';

const Stack = createStackNavigator();

const RootNavigator = () => {
  // const [isAuth, setIsAuth] = useState(true);
  const isAuth = true;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {isAuth ? (
        <>
          <Stack.Screen name={AUTH_ROUTE.ROUTE} component={AuthStack} />
        </>
      ) : (
        <>
          <Stack.Screen name="unAuth" component={UnAuthStack} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
