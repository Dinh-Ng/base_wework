import React from 'react';
import {View} from 'react-native';

import {Icons, Images} from '@/assets';
import {
  StyledIcon,
  StyledImage,
  StyledText,
  StyledTouchable,
} from '@/components/base';

import styles from './styles';

const Login: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <StyledImage
          source={Images.backgroundLogin}
          style={styles.backgroundImage}
        />
        <StyledText originValue="Base wework" customStyle={styles.title} />
        <StyledText
          originValue={`Giải pháp quản lý công việc \n& dự án toàn diện cho doanh nghiệp 4.0`}
          customStyle={styles.description}
        />
      </View>
      <StyledIcon source={Icons.indicatorLogin} size={32} />
      <View style={styles.bottomButtons}>
        <StyledText
          originValue="Bạn chưa đăng nhập"
          customStyle={styles.noLoginText}
        />
        <StyledTouchable
          customStyle={[styles.loginButton, styles.loginBaseButton]}>
          <StyledText
            customStyle={[styles.loginText, styles.loginBaseText]}
            originValue="Đăng nhập bằng base account"
          />
        </StyledTouchable>
        <StyledTouchable
          customStyle={[styles.loginButton, styles.loginManualButton]}>
          <StyledText
            customStyle={[styles.loginText, styles.loginManualText]}
            originValue="Đăng nhập thủ công"
          />
        </StyledTouchable>
      </View>
    </View>
  );
};

export default Login;
