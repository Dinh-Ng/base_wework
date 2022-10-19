import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import BottomTabBar from '@/navigation/components/BottomTabBar';
import CustomDrawerContent from '@/navigation/components/CustomDrawerContent';
import {APP_ROUTE} from '@/navigation/config/appRoutes';
import {drawerNavigationOption} from '@/navigation/config/options';
import History from '@/screens/History';
import ListContact from '@/screens/ListContact';

export type RootStackParamList = Record<string, any>;

const Tab = createBottomTabNavigator();
const TabStack = () => (
  <Tab.Navigator
    screenOptions={{headerShown: false}}
    tabBar={props => <BottomTabBar {...props} />}>
    <Tab.Screen name={APP_ROUTE.LIST_CONTACT} component={ListContact} />
    <Tab.Screen name={APP_ROUTE.HISTORY} component={History} />
  </Tab.Navigator>
);

const DrawerStack = createDrawerNavigator<RootStackParamList>();
const AppStack = () => (
  <DrawerStack.Navigator
    screenOptions={drawerNavigationOption}
    useLegacyImplementation
    drawerContent={props => <CustomDrawerContent {...props} />}>
    <DrawerStack.Screen name={APP_ROUTE.DRAWER} component={TabStack} />
  </DrawerStack.Navigator>
);

export default AppStack;
