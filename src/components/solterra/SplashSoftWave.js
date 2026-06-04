import React from 'react';
import Svg, { Path } from 'react-native-svg';

/** Pale sage wave at bottom of cream splash — matches mock screenshot */
export default function SplashSoftWave({ width, height }) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 375 120"
      preserveAspectRatio="none"
      style={{ position: 'absolute', bottom: 0, left: 0 }}>
      <Path
        d="M0 80 Q94 40 187 65 T375 55 L375 120 L0 120 Z"
        fill="#D4E4D0"
        opacity={0.85}
      />
      <Path
        d="M0 95 Q120 70 200 88 T375 78 L375 120 L0 120 Z"
        fill="#E2EDE0"
        opacity={0.9}
      />
    </Svg>
  );
}
