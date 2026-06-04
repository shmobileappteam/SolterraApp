import React from 'react';
import Svg, { Ellipse, Path } from 'react-native-svg';
import { G } from '../../screens/_partials/gardenUi';

const HealthStemArt = ({ width = 48, height = 72 }) => (
  <Svg width={width} height={height} viewBox="0 0 48 72" fill="none">
    <Path d="M24 72V28" stroke={G.sage} strokeWidth="2.5" strokeLinecap="round" />
    <Ellipse cx="24" cy="20" rx="10" ry="14" fill={G.sage} opacity="0.85" />
    <Ellipse
      cx="14"
      cy="32"
      rx="8"
      ry="11"
      fill={G.sage}
      opacity="0.7"
      transform="rotate(-25 14 32)"
    />
    <Ellipse
      cx="34"
      cy="36"
      rx="7"
      ry="10"
      fill={G.sage}
      opacity="0.65"
      transform="rotate(20 34 36)"
    />
  </Svg>
);

export default HealthStemArt;
