import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {BottomTabDescriptorMap} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {NavigationHelpers, TabNavigationState} from '@react-navigation/native';

import {Icons, Images} from '@/assets';
import Metrics from '@/assets/metrics';
import {StyledIcon, StyledTouchable} from '@/components/base';

import ButtonTab from './BottomTabBarButton';

interface TabBarProps extends BottomTabBarProps {
  navigation?: NavigationHelpers;
  state?: TabNavigationState;
  descriptors?: BottomTabDescriptorMap;
}

const BottomTabBar = ({state, descriptors, navigation}: TabBarProps) => {
  //   console.log('descriptors', descriptors);
  const tabBarInfoList = [
    {
      title: 'Danh bạ',
      icon: Icons.phoneBook,
    },
    {
      title: 'Gần đây',
      icon: Icons.history,
    },
  ];
  return (
    <View style={styles.main}>
      <ImageBackground
        source={Images.backgroundTabBar}
        resizeMode="cover"
        style={styles.imageBackground}>
        <View style={styles.constainer}>
          {state.routes.map((route, index) => {
            const {options} = descriptors[route.key];
            const isFocused = state.index === index;
            console.log('options', options);
            return (
              <ButtonTab
                route={route}
                isFocused={isFocused}
                key={route?.key}
                title={tabBarInfoList[index].title}
                navigation={navigation}
                icon={tabBarInfoList[index].icon}
              />
            );
          })}
        </View>
        <StyledTouchable customStyle={styles.floatButton}>
          <StyledIcon source={Icons.addContact} size={60} />
        </StyledTouchable>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '100%',
    alignItems: 'center',
    paddingHorizontal: 50,
  },
  main: {
    paddingBottom: Metrics.safeBottomPadding,
  },
  imageBackground: {
    height: 60,
  },
  floatButton: {
    position: 'absolute',
    alignSelf: 'center',
    top: '-50%',
  },
});

export default BottomTabBar;
