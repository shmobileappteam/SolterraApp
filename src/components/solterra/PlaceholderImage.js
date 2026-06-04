import React from 'react';
import { StyleSheet, View } from 'react-native';
import Typography from '../../atomComponents/Typography';
import Sizer from '../../helpers/Sizer';
import { COLORS } from '../../globalStyle/Theme';

export default function PlaceholderImage({
  height,
  width = '100%',
  color = COLORS.primary,
  emoji,
  borderRadius = 12,
  style,
}) {
  return (
    <View
      style={[
        styles.base,
        {
          height: Sizer.vSize(height),
          width,
          backgroundColor: color,
          borderRadius: Sizer.hSize(borderRadius),
        },
        style,
      ]}>
      {emoji ? (
        <Typography size={28} textAlign="center">
          {emoji}
        </Typography>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  base: { alignItems: 'center', justifyContent: 'center', overflow: 'hidden' },
});
