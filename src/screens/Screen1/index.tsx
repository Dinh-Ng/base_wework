import React from 'react';
import {Text, View} from 'react-native';
import Config from 'react-native-config';

import StyledHeader from '@/components/common/StyledHeader';

import styles from './styles';

const Screen1 = () => {
  console.log('env', Config.ENV);
  return (
    <View>
      <StyledHeader isBack={false} title={'sss'} />
      <Text style={styles.text}>Screen1</Text>
    </View>
  );
};

export default Screen1;
