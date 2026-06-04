import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, GLOBALSTYLE } from '../globalStyle/Theme';

const SafeAreaWrapper = ({
  children,
  bgColor = COLORS.mainBg,
  isPadding = false,
  keyboardAvoid = false,
  contentStyle,
}) => {
  const inner = keyboardAvoid ? (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      {children}
    </KeyboardAvoidingView>
  ) : (
    children
  );

  return (
    <SafeAreaView
      style={[{ flex: 1, backgroundColor: bgColor }, isPadding && GLOBALSTYLE.paddingHor, contentStyle]}
      edges={['top', 'left', 'right']}>
      {inner}
    </SafeAreaView>
  );
};

export default SafeAreaWrapper;
