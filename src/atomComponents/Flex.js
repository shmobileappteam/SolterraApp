import React from 'react';
import { View } from 'react-native';
import Sizer from '../helpers/Sizer';

const Flex = ({
  children,
  direction = 'row',
  flex,
  jusContent = 'flex-start',
  algItems = 'flex-start',
  flexWrap = 'nowrap',
  mT,
  mB,
  gap = 0,
  extraStyle,
}) => (
  <View
    style={[
      {
        flex,
        flexDirection: direction,
        justifyContent: jusContent,
        alignItems: algItems,
        flexWrap,
        gap: gap ? Sizer.hSize(gap) : 0,
        marginTop: mT ? Sizer.vSize(mT) : 0,
        marginBottom: mB ? Sizer.vSize(mB) : 0,
      },
      extraStyle,
    ]}>
    {children}
  </View>
);

export default React.memo(Flex);
