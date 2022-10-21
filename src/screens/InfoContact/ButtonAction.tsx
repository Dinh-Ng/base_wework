import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Themes} from '@/assets/themes';
import {StyledIcon, StyledText, StyledTouchable} from '@/components/base';

interface ButtonActionProps {
  icon: any;
  title: string;
  disable: boolean;
}
const ButtonAction = ({icon, title, disable}: ButtonActionProps) => {
  return (
    <StyledTouchable customStyle={styles.container} disabled={disable}>
      <View
        style={[styles.containerIcon, disable && styles.containerIconDisabled]}>
        <StyledIcon size={18} source={icon} />
      </View>
      <StyledText
        originValue={title}
        customStyle={[styles.title, disable && styles.disableTitle]}
      />
    </StyledTouchable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  containerIcon: {
    padding: 10,
    backgroundColor: Themes.COLORS.base,
    borderRadius: 100,
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  containerIconDisabled: {
    backgroundColor: Themes.COLORS.white,
    borderWidth: 1,
    borderColor: '#BDBDBD',
  },
  title: {
    color: '#F2A54A',
  },
  disableTitle: {
    color: '#BDBDBD',
  },
});

export default ButtonAction;
