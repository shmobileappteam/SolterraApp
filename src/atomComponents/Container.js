import React from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import { COLORS, GLOBALSTYLE } from '../globalStyle/Theme';

const Container = ({
  children,
  isPadding = true,
  conStyle,
  backgroundImage,
  keyboardAvoiding = false,
  bgColor = COLORS.mainBg,
}) => {
  const containerStyle = [
    styles.container,
    { backgroundColor: bgColor },
    isPadding && GLOBALSTYLE.paddingHor,
    conStyle,
  ];

  const content = backgroundImage ? (
    <ImageBackground source={backgroundImage} style={containerStyle} resizeMode="cover">
      {children}
    </ImageBackground>
  ) : (
    <View style={containerStyle}>{children}</View>
  );

  if (keyboardAvoiding) {
    return (
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}>
        {content}
      </KeyboardAvoidingView>
    );
  }
  return content;
};

export default Container;

const styles = StyleSheet.create({
  container: { flex: 1 },
  keyboard: { flex: 1 },
});
