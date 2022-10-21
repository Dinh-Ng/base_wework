import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Icons} from '@/assets';
import {Themes} from '@/assets/themes';
import {
  StyledIcon,
  StyledImage,
  StyledText,
  StyledTouchable,
} from '@/components/base';
import StyledHeader from '@/components/common/StyledHeader';
import {APP_ROUTE} from '@/navigation/config/appRoutes';

import ButtonAction from './ButtonAction';

const InfoContact = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StyledHeader
        isBack
        rightText="Sửa"
        onPressAction={() => navigation.navigate(APP_ROUTE.EDIT_CONTACT)}
      />
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
        <StyledText originValue="Nguyễn Tiến Nam" customStyle={styles.name} />
        <StyledText originValue="UI/UX Design" customStyle={styles.job} />
      </View>

      <View style={styles.containerButtonAction}>
        <ButtonAction icon={Icons.call} title="Gọi điện" />
        <ButtonAction icon={Icons.message} title="Nhắn tin" />
        <ButtonAction icon={Icons.facetime} title="Facetime" />
        <ButtonAction icon={Icons.email_disable} title="Gửi mail" disable />
      </View>

      <View style={styles.containerInfo}>
        <View style={styles.info}>
          <StyledText originValue="Điện thoại" customStyle={styles.infoLabel} />
          <StyledText
            originValue="0977272160"
            customStyle={styles.phoneNumber}
          />
        </View>
        <View style={styles.info}>
          <StyledText originValue="Ghi chú" customStyle={styles.infoLabel} />
          <StyledText originValue="xxx" customStyle={styles.note} />
        </View>
        <StyledTouchable customStyle={styles.bottomButton}>
          <StyledText
            originValue="Gửi tin nhắn"
            customStyle={styles.sendMessageText}
          />
        </StyledTouchable>
        <StyledTouchable customStyle={styles.bottomButton}>
          <StyledText
            originValue="Xóa người gọi"
            customStyle={styles.deleteAccountText}
          />
        </StyledTouchable>
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
  name: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 20,
  },
  job: {
    fontSize: 13,
    color: '#828282',
  },
  editAvatar: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: 7.5,
    backgroundColor: Themes.COLORS.base,
    borderRadius: 20,
  },
  containerButtonAction: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  containerInfo: {
    paddingHorizontal: 16,
    marginTop: 5,
  },
  info: {
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    paddingBottom: 10,
    paddingTop: 20,
  },
  infoLabel: {
    fontSize: 13,
  },
  phoneNumber: {
    color: '#2F80ED',
    fontSize: 17,
    marginTop: 10,
  },
  note: {
    fontSize: 17,
    marginTop: 10,
  },
  bottomButton: {
    paddingTop: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  sendMessageText: {
    fontSize: 15,
  },
  deleteAccountText: {
    fontSize: 15,
    color: '#FF4A4A',
  },
});

export default InfoContact;
