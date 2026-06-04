import React, { useRef } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';
import { G } from '../../../screens/_partials/gardenUi';

const { width: SCREEN_W } = Dimensions.get('window');
export const PRODUCT_HERO_H = 340;

/** Web product detail: from-black/30 via-transparent to-cream */
const ProductHeroOverlay = () => {
  const gradId = useRef(`pdp-hero-${Math.random().toString(36).slice(2, 9)}`).current;

  return (
    <View style={styles.wrap} pointerEvents="none">
      <Svg width={SCREEN_W} height={PRODUCT_HERO_H}>
        <Defs>
          <LinearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor="#000000" stopOpacity={0.3} />
            <Stop offset="0.45" stopColor="#000000" stopOpacity={0} />
            <Stop offset="0.68" stopColor={G.cream} stopOpacity={0.2} />
            <Stop offset="0.88" stopColor={G.cream} stopOpacity={0.75} />
            <Stop offset="1" stopColor={G.cream} stopOpacity={1} />
          </LinearGradient>
        </Defs>
        <Rect x={0} y={0} width={SCREEN_W} height={PRODUCT_HERO_H} fill={`url(#${gradId})`} />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
  },
});

export default ProductHeroOverlay;
