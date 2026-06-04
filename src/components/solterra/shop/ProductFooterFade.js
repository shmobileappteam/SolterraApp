import React, { useRef } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';
import { G } from '../../../screens/_partials/gardenUi';

const { width: SCREEN_W } = Dimensions.get('window');
const FADE_H = 28;

/** Soft scrim above sticky footer so scroll content tucks under cleanly */
const ProductFooterFade = () => {
  const gradId = useRef(`pdp-footer-${Math.random().toString(36).slice(2, 9)}`).current;

  return (
    <View style={styles.wrap} pointerEvents="none">
      <Svg width={SCREEN_W} height={FADE_H}>
        <Defs>
          <LinearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor={G.cream} stopOpacity={0} />
            <Stop offset="0.45" stopColor="#FFFFFF" stopOpacity={0.65} />
            <Stop offset="1" stopColor="#FFFFFF" stopOpacity={1} />
          </LinearGradient>
        </Defs>
        <Rect x={0} y={0} width={SCREEN_W} height={FADE_H} fill={`url(#${gradId})`} />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    height: FADE_H,
    marginTop: -FADE_H,
  },
});

export default ProductFooterFade;
