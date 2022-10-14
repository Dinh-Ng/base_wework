import React, {memo, useEffect, useState} from 'react';
import isEqual from 'react-fast-compare';
import {Image, ImageProps} from 'react-native';

import {Images} from '@/assets';

interface StyledImageProps extends ImageProps {
  customStyle?: any;
}

const StyledImage = (props: StyledImageProps) => {
  const {customStyle, source} = props;
  const {defaultImage} = Images;
  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) {
      setError(false);
    }
  }, [source, error]);

  return (
    <Image
      {...props}
      style={customStyle}
      onError={() => setError(true)}
      source={error ? defaultImage : source}
    />
  );
};

export default memo(StyledImage, isEqual);
