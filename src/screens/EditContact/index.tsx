import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Icons} from '@/assets';
import {Themes} from '@/assets/themes';
import {
  StyledIcon,
  StyledImage,
  //   StyledText,
  StyledTouchable,
} from '@/components/base';
import StyledHeader from '@/components/common/StyledHeader';

const EditContact = () => {
  return (
    <View style={styles.container}>
      <StyledHeader isBack rightText="Xong" />
      <View style={styles.infoCard}>
        <View>
          <StyledImage
            customStyle={styles.avatar}
            source={{uri: 'https://i.pravatar.cc/150?img=12'}}
          />
          <StyledTouchable customStyle={styles.editAvatar}>
            <StyledIcon size={15} source={Icons.camera2} />
          </StyledTouchable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.COLORS.white,
    flex: 1,
  },
  infoCard: {
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  editAvatar: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: 7.5,
    backgroundColor: Themes.COLORS.base,
    borderRadius: 20,
  },
});

export default EditContact;
