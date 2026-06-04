import React from 'react';
import Svg, { Circle, Path, Rect } from 'react-native-svg';
import { G } from '../../../screens/_partials/gardenUi';

const stroke = (color, w = 1.5) => ({
  stroke: color,
  strokeWidth: w,
  fill: 'none',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
});

export { IconBellSmall } from '../garden/GardenUiParts';
export { ChevronRight } from '../garden/GardenUiParts';

export const IconSearch = ({ size = 16, color = G.muted }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="11" cy="11" r="7" {...stroke(color)} />
    <Path d="M20 20l-3-3" {...stroke(color)} />
  </Svg>
);

export const IconCamera = ({ size = 16, color = '#fff' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2zM12 17a4 4 0 100-8 4 4 0 000 8z"
      stroke={color}
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const IconMoreHorizontal = ({ size = 16, color = G.muted }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="5" cy="12" r="1.25" fill={color} />
    <Circle cx="12" cy="12" r="1.25" fill={color} />
    <Circle cx="19" cy="12" r="1.25" fill={color} />
  </Svg>
);

export const IconHeart = ({ size = 16, color = G.muted, filled = false }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"
      fill={filled ? color : 'none'}
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const IconMessageCircle = ({ size = 16, color = G.muted }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
      {...stroke(color)}
    />
  </Svg>
);

export const IconBookmark = ({ size = 16, color = G.muted }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" {...stroke(color)} />
  </Svg>
);

export const IconTrophy = ({ size = 20, color = G.sage }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 01-10 0V4zM5 4H3v1a4 4 0 004 4M19 4h2v1a4 4 0 01-4 4" {...stroke(color)} />
    <Rect x="7" y="2" width="10" height="3" rx="1" fill={color} opacity={0.2} />
  </Svg>
);
