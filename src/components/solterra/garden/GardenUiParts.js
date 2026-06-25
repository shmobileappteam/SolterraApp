import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Svg, { Circle, Line, Path, Rect } from 'react-native-svg';
import { G } from '../../../screens/_partials/gardenUi';

const stroke = (color, w = 1.5) => ({ stroke: color, strokeWidth: w, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' });

export const IconBellSmall = ({ size = 20, color = G.forest }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"
      {...stroke(color)}
    />
  </Svg>
);

export const ChevronRight = ({ size = 16, color = G.muted }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M9 6l6 6-6 6" {...stroke(color, 2)} />
  </Svg>
);

export const ChevronDown = ({ size = 12, color = G.muted }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M6 9l6 6 6-6" {...stroke(color, 2)} />
  </Svg>
);

export const IconPlus = ({ size = 24, color = G.muted }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M12 5v14M5 12h14" {...stroke(color, 1.5)} />
  </Svg>
);

export const TabLeaf = ({ active, size = 22 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M11 20A7 7 0 019.5 6.5C13 3 20 4 20 4s-1 7-4.5 10.5A7 7 0 0111 20z"
      stroke={active ? G.forest : G.muted}
      strokeWidth={1.5}
      fill="none"
    />
    <Path d="M11 20v-8" stroke={active ? G.forest : G.muted} strokeWidth={1.5} />
  </Svg>
);

export const TabGrid = ({ active, size = 22 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Rect x="3" y="3" width="7" height="7" rx="1" stroke={active ? G.forest : G.muted} strokeWidth={1.5} />
    <Rect x="14" y="3" width="7" height="7" rx="1" stroke={active ? G.forest : G.muted} strokeWidth={1.5} />
    <Rect x="3" y="14" width="7" height="7" rx="1" stroke={active ? G.forest : G.muted} strokeWidth={1.5} />
    <Rect x="14" y="14" width="7" height="7" rx="1" stroke={active ? G.forest : G.muted} strokeWidth={1.5} />
  </Svg>
);

export const TabHammer = ({ active, size = 22 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M15 12l-8.5 8.5a2.12 2.12 0 103 3L18 15M14.5 7.5l2-2a2.12 2.12 0 013 3L16 10M9 11l4 4"
      stroke={active ? G.forest : G.muted}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);

export const TabStethoscope = ({ active, size = 22 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M4.8 10.5a6 6 0 1011.5 3.5M12 4v2M8 6.5l1 1M16 6.5l-1 1"
      stroke={active ? G.forest : G.muted}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Circle cx="18" cy="16" r="2" stroke={active ? G.forest : G.muted} strokeWidth={1.5} />
  </Svg>
);

export const SunExposureIcon = () => (
  <Svg width={28} height={28} viewBox="0 0 24 24">
    <Circle cx="12" cy="12" r="5" fill="#E8A838" />
    <Path
      d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
      stroke="#E8A838"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
);

export const IconCamera = ({ size = 20, color = G.forest }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2zM12 17a4 4 0 100-8 4 4 0 000 8z"
      {...stroke(color)}
    />
  </Svg>
);

export const IconScanPlant = ({ size = 22, color = G.forest }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" {...stroke(color, 1.75)} />
    <Path
      d="M11 20A7 7 0 019.5 6.5C13 3 20 4 20 4s-1 7-4.5 10.5A7 7 0 0111 20z"
      stroke={color}
      strokeWidth={1.5}
      fill="none"
    />
    <Path d="M11 20v-8" stroke={color} strokeWidth={1.5} />
  </Svg>
);

export const IconPrune = ({ size = 14, color = G.sage }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M6 9l6 6M14 7l3-3M6 9l-3 3M14 7l3 3M9 6l3 3" {...stroke(color, 1.75)} />
  </Svg>
);

export const IconBottle = ({ size = 14, color = G.sage }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M10 2h4v4l2 3v11a2 2 0 01-2 2H10a2 2 0 01-2-2V9l2-3V2z" {...stroke(color, 1.5)} />
    <Path d="M10 6h4" stroke={color} strokeWidth={1.5} />
  </Svg>
);

export const IconWind = ({ size = 14, color = G.sage }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M4 8h11a3 3 0 100-6M4 14h13a3 3 0 110 6H8" {...stroke(color, 1.5)} />
  </Svg>
);

export const IconCalendar = ({ size = 12, color = G.muted }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Rect x="3" y="4" width="18" height="18" rx="2" stroke={color} strokeWidth={1.5} />
    <Path d="M16 2v4M8 2v4M3 10h18" stroke={color} strokeWidth={1.5} />
  </Svg>
);

export const IconDroplet = ({ size = 14, color = '#4A8FD4', filled }) =>
  filled ? (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M12 2.69l5.66 5.66a8 8 0 11-11.32 0L12 2.69z" fill={color} />
    </Svg>
  ) : (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M12 2.69l5.66 5.66a8 8 0 11-11.32 0L12 2.69z" {...stroke(color)} />
    </Svg>
  );

export const IconSunSmall = ({ size = 16, color = '#E8A838' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Circle cx="12" cy="12" r="4" fill={color} />
  </Svg>
);

export const IconLayers = ({ size = 14, color = G.forest }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" {...stroke(color)} />
  </Svg>
);

export const IconDollar = ({ size = 16, color = G.sage }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M12 2v20M17 6H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" {...stroke(color)} />
  </Svg>
);

export const IconLightbulb = ({ size = 16, color = G.sage }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7V17h8v-2.3A7 7 0 0012 2z" {...stroke(color)} />
  </Svg>
);

export const IconHammerWhite = () => (
  <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
    <Path
      d="M15 12l-8.5 8.5a2.12 2.12 0 103 3L18 15M14.5 7.5l2-2a2.12 2.12 0 013 3L16 10"
      stroke="#fff"
      strokeWidth={1.75}
      strokeLinecap="round"
    />
  </Svg>
);

export const IconUsers = ({ size = 12, color = G.muted }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" {...stroke(color)} />
  </Svg>
);

export const TaskDropletIcon = () => <IconDroplet size={16} filled color="#4A8FD4" />;

export const TaskLeafIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
    <Path
      d="M11 20A7 7 0 019.5 6.5C13 3 20 4 20 4s-1 7-4.5 10.5A7 7 0 0111 20z"
      stroke={G.sage}
      strokeWidth={1.75}
      fill="none"
    />
    <Path d="M11 20v-8" stroke={G.sage} strokeWidth={1.75} />
  </Svg>
);

export const IconCropRotation = ({ size = 16, color = G.sage }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M4 12a8 8 0 0114.5-5.5M20 12a8 8 0 01-14.5 5.5"
      {...stroke(color)}
    />
    <Path d="M17 4.5L19 7l-2 2.5M7 19.5L5 17l2-2.5" {...stroke(color)} />
  </Svg>
);

export const PlanToolIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="4" fill="#E8A838" />
    <Line x1="12" y1="2" x2="12" y2="5" stroke="#E8A838" strokeWidth={2} />
    <Line x1="12" y1="19" x2="12" y2="22" stroke="#E8A838" strokeWidth={2} />
  </Svg>
);

export const circleBtnStyles = StyleSheet.create({
  fab: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#1A3020',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  fabActive: {
    borderWidth: 1.5,
    borderColor: G.sage,
    backgroundColor: G.sageLight,
  },
  fabPressed: { opacity: 0.85, transform: [{ scale: 0.96 }] },
});

export const PlanOverlayFab = ({ children, size = 28, active, onPress }) => (
  <Pressable
    onPress={onPress}
    hitSlop={4}
    style={({ pressed }) => [
      circleBtnStyles.fab,
      { width: size, height: size, borderRadius: size / 2 },
      active && circleBtnStyles.fabActive,
      pressed && circleBtnStyles.fabPressed,
    ]}>
    {children}
  </Pressable>
);
