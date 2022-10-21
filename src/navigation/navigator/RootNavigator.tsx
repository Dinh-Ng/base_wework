import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {APP_ROUTE, AUTH_ROUTE} from '@/navigation/config/appRoutes';
import EditContact from '@/screens/EditContact';
import InfoContact from '@/screens/InfoContact';

import AppStack from './AppNavigator';
import AuthStack from './AuthNavigator';

const RootNavigator = () => {
  // const [isAuth, setIsAuth] = useState(true);
  const isAuth = false;

  const Stack = createStackNavigator();
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
          <Stack.Screen name={APP_ROUTE.ROUTE} component={AppStack} />
          <Stack.Screen name={APP_ROUTE.INFO_CONTACT} component={InfoContact} />
          <Stack.Screen name={APP_ROUTE.EDIT_CONTACT} component={EditContact} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
