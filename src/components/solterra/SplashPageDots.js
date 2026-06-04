import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../../globalStyle/Theme';

/** Three sage pagination dots — middle emphasized per mock */
export default function SplashPageDots() {
  return (
    <View style={styles.row}>
      <View style={[styles.dot, styles.dotOuter]} />
      <View style={[styles.dot, styles.dotActive]} />
      <View style={[styles.dot, styles.dotOuter]} />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  dotOuter: {
    backgroundColor: COLORS.splashDotMuted,
  },
  dotActive: {
    backgroundColor: COLORS.splashDotActive,
    width: 9,
    height: 9,
    borderRadius: 5,
  },
});
