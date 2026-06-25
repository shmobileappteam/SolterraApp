import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';
import { G } from '../../../screens/_partials/gardenUi';

export const ChevronRight = ({ size = 16, color = G.muted, strokeWidth = 2 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M9 6l6 6-6 6"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const IconBell = ({ size = 22, color = G.forest }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const IconUser = ({ size = 22, color = G.forest }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const IconSparkles = ({ size = 12, color = '#fff' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3zM5 17l.8 2.4L8 20l-2.2.6L5 23l-.8-2.4L2 20l2.2-.6L5 17z"
      fill={color}
    />
  </Svg>
);

export const TaskDropletIcon = () => (
  <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 2.69l5.66 5.66a8 8 0 11-11.32 0L12 2.69z"
      fill="#4A8FD4"
    />
  </Svg>
);

export const TaskLeafIcon = () => (
  <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
    <Path
      d="M11 20A7 7 0 019.5 6.5C13 3 20 4 20 4s-1 7-4.5 10.5A7 7 0 0111 20z"
      fill={G.sage}
    />
    <Path d="M11 20v-8" stroke="#FFFFFF" strokeWidth={1.5} />
  </Svg>
);

export const WeatherSunSimple = () => (
  <View style={sunStyles.wrap}>
    <Svg width={36} height={36} viewBox="0 0 32 32">
      <Circle cx="16" cy="16" r="8" fill="#E8A838" />
      <Path
        d="M16 4v3M16 25v3M4 16h3M25 16h3M7.5 7.5l2 2M22.5 22.5l-2 2M7.5 24.5l2-2M22.5 9.5l-2-2"
        stroke="#E8A838"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  </View>
);

const sunStyles = StyleSheet.create({
  wrap: { width: 36, height: 36 },
});

export const AiBadge = () => (
  <View style={badgeStyles.wrap}>
    <IconSparkles size={10} color="#fff" />
    <Text style={badgeStyles.text}>AI</Text>
  </View>
);

const badgeStyles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    backgroundColor: G.forest,
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  text: { color: '#fff', fontSize: 9, fontWeight: '600' },
});
