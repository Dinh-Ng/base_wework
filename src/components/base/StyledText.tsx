import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';

import {logger} from '@/utilities/helper';

interface StyledTextProps extends TextProps {
  customStyle?: StyleProp<TextStyle>;
  originValue: string;
}

interface StyledTextWithOriginValue extends StyledTextProps {
  originValue: string;
  i18nText?: never;
}

interface StyledTextWithI18nValue extends StyledTextProps {
  originValue?: never;
  //   i18nText: I18Type;
}

type StyledTextCombineProps =
  | StyledTextWithOriginValue
  | StyledTextWithI18nValue;

const StyledText = (props: StyledTextCombineProps) => {
  const {style, customStyle, i18nText, originValue} = props;

  let value;
  if (originValue) {
    value = originValue;
  } else {
    value = i18nText || '';
  }

  if (style) {
    logger(
      'StyledText should use customStyle to avoid override default style text',
      true,
    );
  }
  return (
    <Text style={[styles.text, customStyle]} {...props}>
      {value}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {},
});

export default StyledText;
