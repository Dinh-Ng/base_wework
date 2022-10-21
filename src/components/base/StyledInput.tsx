import React, {forwardRef, useRef} from 'react';
import {
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import Metrics from '@/assets/metrics';
import {Themes} from '@/assets/themes';
import {StyledText, StyledTouchable} from '@/components/base';

interface StyledInputProps extends TextInputProps {
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  customStyle?: StyleProp<TextStyle>;
  onPress?: (event: any) => void;
}

const WrapInputComponent = ({onPress, children, customStyle}: any) => {
  return onPress ? (
    <StyledTouchable customStyle={customStyle} onPress={onPress}>
      {children}
    </StyledTouchable>
  ) : (
    <View style={customStyle}>{children}</View>
  );
};

const StyledInput = (props: StyledInputProps, ref?: any) => {
  const {
    label,
    labelStyle,
    containerStyle,
    customStyle,
    onPress,
    ...otherProps
  } = props;
  const input = useRef<TextInput>(null);
  return (
    <View style={[styles.container, containerStyle]}>
      {!!label && (
        <StyledText
          customStyle={[styles.label, labelStyle]}
          originValue={label}
        />
      )}
      <WrapInputComponent onPress={onPress}>
        <TextInput ref={ref || input} {...otherProps} style={customStyle} />
      </WrapInputComponent>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    width: Metrics.screenWidth * 0.8,
    marginTop: '15@s',
  },
  textInput: {
    width: Metrics.screenWidth * 0.8,
    borderRadius: '5@s',
    padding: '10@s',
    backgroundColor: Themes.COLORS.secondary,
  },
  label: {},
});

export default forwardRef(StyledInput);
