import React from 'react';
import {StyleSheet} from 'react-native';

import {Themes} from '@/assets/themes';
import {StyledIcon, StyledText, StyledTouchable} from '@/components/base';

const ButtonTab = ({route, isFocused, title, navigation, icon}) => {
  const onPress = () => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  };

  const onLongPress = () => {
    navigation.emit({
      type: 'tabLongPress',
      target: route.key,
    });
  };
  return (
    <StyledTouchable
      key={route?.key}
      customStyle={[isFocused ? styles.focusedTabbar : {}, styles.button]}
      onPress={onPress}
      onLongPress={onLongPress}>
      <StyledIcon
        source={icon}
        size={20}
        customStyle={!isFocused ?? styles.focusedIcon}
      />
      <StyledText
        originValue={title}
        customStyle={isFocused ? styles.title : styles.unfocusedTitle}
      />
    </StyledTouchable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
  },
  focusedIcon: {
    backgroundColor: '#FFDAAE',
  },
  title: {
    color: Themes.COLORS.white,
    fontSize: 10,
    marginTop: 8,
  },
  unfocusedTitle: {
    color: '#FFDAAE',
    fontSize: 10,
    marginTop: 8,
  },
});

export default ButtonTab;
