import React, { useRef } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';

const { width: SCREEN_W, height: SCREEN_H } = Dimensions.get('window');

const VARIANTS = {
  /** Onboarding: from-black/55 via-black/10 to-black/85 */
  onboarding: [
    { offset: '0', opacity: 0.55 },
    { offset: '0.5', opacity: 0.1 },
    { offset: '1', opacity: 0.85 },
  ],
  /** Profile setup / garden scan: from-black/60 via-black/25 to-black/90 */
  setup: [
    { offset: '0', opacity: 0.6 },
    { offset: '0.42', opacity: 0.25 },
    { offset: '1', opacity: 0.9 },
  ],
};

/**
 * Smooth dark gradient over full-screen photos (matches web Tailwind gradients).
 * @param {{ variant?: 'onboarding' | 'setup' }} props
 */
const ImageReadabilityOverlay = ({ variant = 'onboarding' }) => {
  const gradId = useRef(`img-grad-${Math.random().toString(36).slice(2, 9)}`).current;
  const stops = VARIANTS[variant] ?? VARIANTS.onboarding;

  return (
    <View style={styles.wrap} pointerEvents="none">
      <Svg width={SCREEN_W} height={SCREEN_H} style={styles.svg}>
        <Defs>
          <LinearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            {stops.map(s => (
              <Stop key={s.offset} offset={s.offset} stopColor="#000000" stopOpacity={s.opacity} />
            ))}
          </LinearGradient>
        </Defs>
        <Rect x={0} y={0} width={SCREEN_W} height={SCREEN_H} fill={`url(#${gradId})`} />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
  },
  svg: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

export default ImageReadabilityOverlay;
