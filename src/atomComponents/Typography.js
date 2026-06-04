import React from 'react';
import { Text } from 'react-native';
import { COLORS, FONTS, TYPE } from '../globalStyle/Theme';
import Sizer from '../helpers/Sizer';

const Typography = ({
  variant,
  color = COLORS.textPrimary,
  size,
  lineHeight,
  fontFamily,
  fontWeight,
  textAlign = 'left',
  letterSpacing,
  mT = 0,
  mB = 0,
  style,
  children,
  ...props
}) => {
  const preset = variant ? TYPE[variant] : null;
  const resolvedLetterSpacing =
    letterSpacing ?? (variant === 'label' ? TYPE.label.letterSpacing : undefined);

  const textStyle = {
    color,
    fontSize: Sizer.fS(size ?? preset?.size ?? 14),
    lineHeight: Sizer.fS(lineHeight ?? preset?.lineHeight ?? 20),
    fontFamily: fontFamily ?? preset?.fontFamily ?? FONTS.body,
    fontWeight: fontWeight ?? preset?.fontWeight ?? '400',
    textAlign,
    marginTop: Sizer.vSize(mT),
    marginBottom: Sizer.vSize(mB),
  };
  if (resolvedLetterSpacing != null) {
    textStyle.letterSpacing = resolvedLetterSpacing;
  }

  return (
    <Text style={[textStyle, style]} {...props}>
      {children}
    </Text>
  );
};

export default React.memo(Typography);
