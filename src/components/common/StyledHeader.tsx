import React from 'react';
import isEqual from 'react-fast-compare';
import {View, ViewProps} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import {Icons} from '@/assets';
import Metrics from '@/assets/metrics';
import {Themes} from '@/assets/themes';
import {StyledIcon, StyledText, StyledTouchable} from '@/components/base';
import navigationServices from '@/navigation/navigationServices';

interface HeaderProps extends ViewProps {
  isBack?: boolean;
  title?: string;
  rightText?: any;
  customStyle?: StyleProp<ViewStyle>;
  onPressAction?(): void;
  isShadow?: boolean;
  customHandleBackPress?(): void;
}

const StyledHeader = (props: HeaderProps) => {
  const {
    isBack = true,
    title,
    rightText,
    customStyle,
    onPressAction,
    isShadow,
    customHandleBackPress,
  } = props;

  const onBack = () => {
    if (customHandleBackPress) {
      customHandleBackPress();
      return;
    }
    navigationServices.goBack();
  };

  return (
    <View style={[styles.container, customStyle, isShadow && styles.shadow]}>
      <View style={styles.viewHeader}>
        {isBack ? (
          <StyledTouchable onPress={onBack} customStyle={styles.buttonBack}>
            <StyledIcon source={Icons.back} size={18} />
          </StyledTouchable>
        ) : (
          <View style={styles.buttonBack} />
        )}
        <StyledText
          i18nText={title}
          customStyle={styles.title}
          numberOfLines={1}
        />
        {rightText ? (
          <StyledTouchable
            onPress={onPressAction}
            customStyle={styles.buttonAction}>
            <StyledText
              originValue={rightText}
              customStyle={styles.rightText}
            />
          </StyledTouchable>
        ) : (
          <View style={styles.buttonAction} />
        )}
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    // height: '60@vs',
    backgroundColor: Themes.COLORS.white,
    justifyContent: 'flex-end',
    paddingTop: Metrics.safeTopPadding,
  },
  viewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: '14@vs',
    paddingHorizontal: '20@s',
  },
  buttonBack: {
    width: '25@vs',
    height: '25@vs',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: '20@ms',
    fontWeight: 'bold',
    maxWidth: '80%',
    color: Themes.COLORS.black,
  },
  buttonAction: {
    width: '35@vs',
    height: '25@vs',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightText: {
    color: Themes.COLORS.base,
    fontSize: 18,
  },
  shadow: {
    shadowColor: Themes.COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 5.49,
    elevation: 5,
  },
});

export default React.memo(StyledHeader, isEqual);
