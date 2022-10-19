import React from 'react';
import {ImageSourcePropType, StyleSheet, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {
  DrawerContentScrollView,
  useDrawerProgress,
} from '@react-navigation/drawer';

import {Icons, Images} from '@/assets';
import {Themes} from '@/assets/themes';
import {
  StyledIcon,
  StyledImage,
  StyledText,
  StyledTouchable,
} from '@/components/base';

interface ButtonListProps {
  text: string;
  icon?: ImageSourcePropType;
}

const ButtonList = ({text, icon}: ButtonListProps) => {
  return (
    <StyledTouchable customStyle={styles.buttonList}>
      <StyledIcon source={icon || Icons.assignments} size={15} />
      <StyledText originValue={text} customStyle={styles.buttonListText} />
    </StyledTouchable>
  );
};

const CustomDrawerContent = props => {
  const progress = useDrawerProgress();

  const translateX = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });

  return (
    <DrawerContentScrollView {...props}>
      <Animated.View style={{transform: [{translateX}]}}>
        <View style={styles.header}>
          <StyledImage
            source={Images.adminAvatar}
            customStyle={styles.avatar}
          />
          <View>
            <StyledText originValue="N T Nam" customStyle={styles.name} />
            <StyledText originValue="Admin" customStyle={styles.role} />
          </View>
        </View>
        <ButtonList text="New collection" icon={Icons.addBox} />
        <View style={styles.collectView}>
          <View style={styles.collectChildView}>
            <StyledIcon source={Icons.arrowDown} size={10} />
            <StyledText
              originValue="COLLECTIONS"
              customStyle={styles.collectText}
            />
          </View>
          <StyledTouchable>
            <StyledText originValue="Edit" customStyle={styles.editText} />
          </StyledTouchable>
        </View>
        <ButtonList text="All" />
        <ButtonList text="General" />
        <ButtonList text="Investors" />
        <ButtonList text="Lead" />
        <ButtonList text="VIP" />
      </Animated.View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: 'row',
    backgroundColor: Themes.COLORS.base,
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  name: {
    color: Themes.COLORS.white,
    fontSize: 16,
    fontWeight: '500',
  },
  role: {
    color: Themes.COLORS.white,
    fontSize: 12,
    fontWeight: '400',
  },
  buttonList: {
    flexDirection: 'row',
    paddingHorizontal: 22,
    paddingVertical: 14,
  },
  buttonListText: {
    fontSize: 15,
    marginLeft: 20,
  },
  collectView: {
    backgroundColor: 'rgba(242, 165, 74, 0.1)',
    paddingHorizontal: 20,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  collectChildView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  collectText: {
    textTransform: 'uppercase',
    fontSize: 13,
    fontWeight: '700',
    marginLeft: 16,
  },
  editButton: {},
  editText: {
    color: Themes.COLORS.base,
    fontSize: 13,
    fontWeight: '500',
  },
});

export default CustomDrawerContent;
