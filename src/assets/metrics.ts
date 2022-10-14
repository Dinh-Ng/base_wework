import {Dimensions} from 'react-native';
import StaticSafeAreaInsets from 'react-native-static-safe-area-insets';

import {isAndroid} from '@/utilities/helper';

const {width, height} = Dimensions.get('window');

const safeTopPaddingPlatform = isAndroid
  ? verticalScale(15)
  : StaticSafeAreaInsets.safeAreaInsetsTop;
const safeTopPadding =
  safeTopPaddingPlatform === 0 ? verticalScale(30) : safeTopPaddingPlatform;
const safeBottomPadding = isAndroid
  ? 0
  : StaticSafeAreaInsets.safeAreaInsetsBottom === 0
  ? 20
  : StaticSafeAreaInsets.safeAreaInsetsBottom;

const Metrics = {
  screenHeight: width < height ? height : width,
  screenWidth: width < height ? width : height,
  safeBottomPadding,
  safeTopPadding,
};

export default Metrics;
