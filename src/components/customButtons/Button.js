import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { COLORS, FONTS } from '../../globalStyle/Theme';
import Sizer from '../../helpers/Sizer';
import Flex from '../../atomComponents/Flex';

function Button({
  label,
  onPress = () => {},
  type = 'primary',
  disabled = false,
  loader = false,
  btnStyle,
  textStyle,
  icon,
  height = 48,
}) {
  let bg = COLORS.primary;
  let color = COLORS.accent;
  let borderWidth = 0;
  let borderColor = COLORS.primary;

  if (type === 'secondary') {
    bg = COLORS.surface;
    color = COLORS.textPrimary;
    borderWidth = 1;
    borderColor = COLORS.border;
  } else if (type === 'outline') {
    bg = 'transparent';
    color = COLORS.primary;
    borderWidth = 2;
    borderColor = COLORS.primary;
  } else if (type === 'accent') {
    bg = COLORS.accent;
    color = COLORS.primary;
  }

  if (disabled) {
    bg = COLORS.border;
    color = COLORS.textMuted;
  }

  return (
    <TouchableOpacity
      disabled={loader || disabled}
      activeOpacity={0.88}
      onPress={onPress}
      style={[
        styles.btn,
        {
          height: Sizer.hSize(height),
          backgroundColor: bg,
          borderWidth,
          borderColor,
        },
        type === 'primary' && !disabled && styles.primaryShadow,
        btnStyle,
      ]}>
      {loader ? (
        <ActivityIndicator color={color} />
      ) : (
        <Flex gap={8} algItems="center" jusContent="center" extraStyle={{ width: '100%' }}>
          {icon}
          <Text
            numberOfLines={1}
            adjustsFontSizeToFit
            minimumFontScale={0.82}
            style={[styles.text, { color }, textStyle]}>
            {label}
          </Text>
        </Flex>
      )}
    </TouchableOpacity>
  );
}

export default Button;

const styles = StyleSheet.create({
  btn: {
    borderRadius: Sizer.hSize(12),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Sizer.hSize(16),
  },
  text: {
    fontFamily: FONTS.bodySemiBold,
    fontSize: Sizer.fS(14),
    fontWeight: '600',
    flexShrink: 1,
    textAlign: 'center',
  },
  primaryShadow: {
    elevation: 4,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
});
