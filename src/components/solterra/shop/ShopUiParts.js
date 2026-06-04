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

export const IconShoppingCart = ({ size = 20, color = G.forest }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M6 6h15l-1.5 9H7.5L6 6zM6 6l-1-2H2" {...stroke(color)} />
    <Circle cx="9" cy="20" r="1.25" fill={color} />
    <Circle cx="18" cy="20" r="1.25" fill={color} />
  </Svg>
);

export const IconStar = ({ size = 12, color = G.forest }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path
      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      fill={color}
    />
  </Svg>
);

export const IconPlus = ({ size = 16, color = '#fff' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M12 5v14M5 12h14" stroke={color} strokeWidth={2} strokeLinecap="round" />
  </Svg>
);

export const IconTruck = ({ size = 20, color = G.forest }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M1 3h15v11H1zM16 8h4l3 4v2h-7V8zM5.5 21a2 2 0 100-4 2 2 0 000 4zM18.5 21a2 2 0 100-4 2 2 0 000 4z" {...stroke(color)} />
  </Svg>
);

export const IconSun = ({ size = 20, color = G.sage }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="4" fill={color} fillOpacity={0.25} />
    <Path
      d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);

export const IconThermometer = ({ size = 20, color = G.sage }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M14 14.76V5a2 2 0 00-4 0v9.76a4 4 0 104 0z"
      {...stroke(color)}
    />
  </Svg>
);

export const IconDroplet = ({ size = 20, color = G.forest }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M12 2.69l5.66 5.66a8 8 0 11-11.32 0L12 2.69z" {...stroke(color)} />
  </Svg>
);

export const IconPackage = ({ size = 20, color = G.forest }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M12 2l8 4.5v11L12 22 4 17.5v-11L12 2zM12 22V12M4 6.5l8 4.5 8-4.5" {...stroke(color)} />
  </Svg>
);

export const IconLeaf = ({ size = 20, color = G.forest }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M11 20A7 7 0 019.5 6.5C13 3 20 4 20 4s-1 7-4.5 10.5A7 7 0 0111 20z"
      {...stroke(color)}
    />
    <Path d="M11 20v-8" stroke={color} strokeWidth={1.5} />
  </Svg>
);

export const IconShovel = ({ size = 20, color = G.forest }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M14 3l7 7-3 3-4-4-3 3 4 4-3 3-7-7 9-9zM3 21l6-6" {...stroke(color)} />
  </Svg>
);

export const IconPlusCategory = ({ size = 20, color = G.forest }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M12 5v14M5 12h14" {...stroke(color)} />
  </Svg>
);
