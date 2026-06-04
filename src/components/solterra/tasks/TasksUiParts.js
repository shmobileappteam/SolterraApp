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

export { ChevronRight } from '../garden/GardenUiParts';

export const ChevronLeft = ({ size = 20, color = G.forest }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M15 6l-6 6 6 6" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export const IconCalendar = ({ size = 20, color = G.forest }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Rect x="3" y="4" width="18" height="18" rx="2" stroke={color} strokeWidth={1.5} />
    <Path d="M16 2v4M8 2v4M3 10h18" stroke={color} strokeWidth={1.5} />
  </Svg>
);

export const IconDroplet = ({ size = 16 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path d="M12 2.69l5.66 5.66a8 8 0 11-11.32 0L12 2.69z" fill="#4A8FD4" />
  </Svg>
);

export const IconSprout = ({ size = 16, color = G.sage }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M12 22V12M12 12C12 8 8 4 4 4c0 4 4 8 8 8M12 12c0-4 4-8 8-8 0 4-4 8-8 8" {...stroke(color, 1.75)} />
  </Svg>
);

export const IconLeaf = ({ size = 16, color = G.sage }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M11 20A7 7 0 019.5 6.5C13 3 20 4 20 4s-1 7-4.5 10.5A7 7 0 0111 20z"
      {...stroke(color, 1.75)}
    />
    <Path d="M11 20v-8" stroke={color} strokeWidth={1.75} />
  </Svg>
);

export const IconFlame = ({ size = 20 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path
      d="M12 2c1 4 4 6 4 10a4 4 0 11-8 0c0-4 3-6 4-10z"
      fill="#E8A838"
    />
  </Svg>
);

export const IconCheck = ({ size = 10, color = '#fff' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M20 6L9 17l-5-5" stroke={color} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export const IconCircleEmpty = ({ size = 16, color = G.divider }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="9" stroke={color} strokeWidth={1.5} />
  </Svg>
);

export const IconSun = ({ size = 28 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Circle cx="12" cy="12" r="5" fill="#E8A838" />
    <Path
      d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
      stroke="#E8A838"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
);
