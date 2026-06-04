import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Defs, Ellipse, G, LinearGradient, Path, Stop } from 'react-native-svg';

/** Bottom hills + leaves — matches solterra web SplashScreen SVG (375×400 viewBox). */
export default function SplashHillsArt({ width, height }) {
  const leafPositions = [
    { x: 30, y: 260, rot: 0 },
    { x: 120, y: 290, rot: 25 },
    { x: 250, y: 260, rot: 50 },
    { x: 330, y: 290, rot: 75 },
  ];

  return (
    <View style={[styles.wrap, { width, height }]} pointerEvents="none">
      <Svg width={width} height={height} viewBox="0 0 375 400" preserveAspectRatio="none">
        <Defs>
          <LinearGradient id="splashLeaf" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0%" stopColor="#1f7a44" />
            <Stop offset="100%" stopColor="#062b18" />
          </LinearGradient>
        </Defs>
        <Path d="M0 400 L0 260 Q90 200 180 250 T375 230 L375 400 Z" fill="url(#splashLeaf)" />
        <Path
          d="M0 400 L0 320 Q120 280 200 310 T375 300 L375 400 Z"
          fill="#062b18"
          opacity={0.7}
        />
        {leafPositions.map(({ x, y, rot }, i) => (
          <G key={i} transform={`translate(${x} ${y}) rotate(${rot})`}>
            <Ellipse cx={0} cy={0} rx={34} ry={14} fill="#0d5530" opacity={0.9} />
            <Ellipse cx={0} cy={0} rx={32} ry={6} fill="#d0ec7e" opacity={0.25} />
          </G>
        ))}
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    opacity: 0.7,
  },
});
