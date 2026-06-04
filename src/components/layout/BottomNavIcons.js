import React from 'react';
import Svg, { Circle, Path, Rect } from 'react-native-svg';

const FOREST = '#1A3020';
const MUTED = '#5C6B5E';
const SAGE = '#4A7C44';

const stroke = (color, w = 1.5) => ({
  stroke: color,
  strokeWidth: w,
  fill: 'none',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
});

export const TabIconHome = ({ active }) => {
  const color = active ? SAGE : MUTED;
  const w = active ? 2.25 : 1.5;
  return (
    <Svg width={22} height={22} viewBox="0 0 24 24">
      <Path
        d="M3 10.5L12 3l9 7.5V20a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1v-9.5z"
        fill={active ? SAGE : 'none'}
        stroke={color}
        strokeWidth={w}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const TabIconLeaf = ({ active, inCircle }) => {
  if (inCircle) {
    return (
      <Svg width={18} height={18} viewBox="0 0 24 24">
        <Path
          d="M11 20A7 7 0 019.5 6.5C13 3 20 4 20 4s-1 7-4.5 10.5A7 7 0 0111 20z"
          fill="#FFFFFF"
          strokeWidth={0}
        />
        <Path d="M11 20v-8" stroke="#FFFFFF" strokeWidth={1.5} />
      </Svg>
    );
  }
  const color = active ? SAGE : MUTED;
  return (
    <Svg width={22} height={22} viewBox="0 0 24 24" fill="none">
      <Path
        d="M11 20A7 7 0 019.5 6.5C13 3 20 4 20 4s-1 7-4.5 10.5A7 7 0 0111 20z"
        {...stroke(color, active ? 2.25 : 1.5)}
      />
      <Path d="M11 20v-8" stroke={color} strokeWidth={active ? 2.25 : 1.5} />
    </Svg>
  );
};

export const TabIconClipboard = ({ active, inBox }) => {
  if (inBox) {
    return (
      <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
        <Path
          d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2M9 4h6v4H9V4z"
          stroke="#FFFFFF"
          strokeWidth={2}
          strokeLinecap="round"
        />
        <Path d="M9 12h6M9 16h6" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="round" />
      </Svg>
    );
  }
  const color = active ? SAGE : MUTED;
  return (
    <Svg width={22} height={22} viewBox="0 0 24 24" fill="none">
      <Path
        d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2M9 4h6v4H9V4z"
        {...stroke(color, active ? 2.25 : 1.5)}
      />
    </Svg>
  );
};

export const TabIconUsers = ({ active }) => {
  const color = active ? SAGE : MUTED;
  return (
    <Svg width={22} height={22} viewBox="0 0 24 24" fill="none">
      <Path
        d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
        {...stroke(color, active ? 2.25 : 1.5)}
      />
    </Svg>
  );
};

export const TabIconCart = ({ active }) => {
  if (active) {
    return (
      <Svg width={22} height={22} viewBox="0 0 24 24">
        <Path
          d="M6 6h15l-1.5 9H7.5L6 6zM6 6l-1-2H2"
          stroke={SAGE}
          strokeWidth={2.25}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill={SAGE}
        />
        <Circle cx="9" cy="20" r="1.25" fill={SAGE} />
        <Circle cx="18" cy="20" r="1.25" fill={SAGE} />
      </Svg>
    );
  }
  return (
    <Svg width={22} height={22} viewBox="0 0 24 24" fill="none">
      <Path d="M6 6h15l-1.5 9H7.5L6 6zM6 6l-1-2H2" {...stroke(MUTED, 1.5)} />
      <Circle cx="9" cy="20" r="1.25" fill={MUTED} />
      <Circle cx="18" cy="20" r="1.25" fill={MUTED} />
    </Svg>
  );
};

export const TAB_COLORS = { FOREST, MUTED, SAGE };
