import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

const stroke = (color, w = 1.5) => ({
  stroke: color,
  strokeWidth: w,
  fill: 'none',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
});

export const IconCamera = ({ size = 18, color = '#1A3328' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2zM12 17a4 4 0 100-8 4 4 0 000 8z"
      {...stroke(color)}
    />
  </Svg>
);

export const IconSend = ({ size = 18, color = '#D0EC7E' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" {...stroke(color, 2)} />
  </Svg>
);

export const IconInfo = ({ size = 18, color = 'rgba(255,255,255,0.8)' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="9" {...stroke(color)} />
    <Path d="M12 11v6M12 7h.01" {...stroke(color, 2)} />
  </Svg>
);
