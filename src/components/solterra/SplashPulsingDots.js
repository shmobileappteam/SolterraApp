import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';
import { COLORS } from '../../globalStyle/Theme';

/** Matches web `.sol-dot` pulse (1.2s cycle, staggered delays). */
export default function SplashPulsingDots({ size = 8, gap = 6 }) {
  const dots = [
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
  ];
  const delays = [0, 150, 300];

  useEffect(() => {
    const animations = dots.map((progress, i) => {
      const pulse = Animated.loop(
        Animated.sequence([
          Animated.timing(progress, {
            toValue: 1,
            duration: 480,
            easing: Easing.out(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(progress, {
            toValue: 0,
            duration: 720,
            easing: Easing.in(Easing.ease),
            useNativeDriver: true,
          }),
        ]),
      );
      const delayed = Animated.sequence([Animated.delay(delays[i]), pulse]);
      delayed.start();
      return delayed;
    });
    return () => animations.forEach(a => a.stop());
  }, [dots]);

  return (
    <View style={[styles.row, { gap }]}>
      {dots.map((progress, i) => {
        const scale = progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0.8, 1],
        });
        const opacity = progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0.3, 1],
        });
        return (
          <Animated.View
            key={i}
            style={[
              styles.dot,
              {
                width: size,
                height: size,
                borderRadius: size / 2,
                opacity,
                transform: [{ scale }],
              },
            ]}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center' },
  dot: { backgroundColor: COLORS.accent },
});
