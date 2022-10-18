import React, {memo} from 'react';
import isEqual from 'react-fast-compare';
import {StyleSheet, View, ViewProps} from 'react-native';

import {Icons} from '@/assets';
import Metrics from '@/assets/metrics';
import {StyledIcon, StyledText, StyledTouchable} from '@/components/base';
import navigationServices from '@/navigation/navigationServices';

interface HomeHeaderProps extends ViewProps {
  title: string;
}

const HomeHeader = (props: HomeHeaderProps) => {
  const {title} = props;
  return (
    <View style={[styles.container]}>
      <StyledTouchable onPress={() => navigationServices.openDrawer()}>
        <StyledIcon source={Icons.hamburger} size={24} />
      </StyledTouchable>
      <StyledText customStyle={styles.title} originValue={title} />
      <StyledTouchable>
        <StyledIcon source={Icons.camera} size={24} />
      </StyledTouchable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Metrics.safeTopPadding,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
});

export default memo(HomeHeader, isEqual);
