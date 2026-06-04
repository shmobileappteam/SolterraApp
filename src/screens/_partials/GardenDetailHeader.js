import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Typography from '../../atomComponents/Typography';
import { G, gardenUi } from './gardenUi';
import Sizer from '../../helpers/Sizer';
import Svg, { Circle, Path } from 'react-native-svg';

export const IconMoreHorizontal = ({ size = 20, color = G.forest }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="5" cy="12" r="1.5" fill={color} />
    <Circle cx="12" cy="12" r="1.5" fill={color} />
    <Circle cx="19" cy="12" r="1.5" fill={color} />
  </Svg>
);

export const IconCheckCircle = ({ size = 20 }) => (
  <View style={{ width: size, height: size, borderRadius: size / 2, backgroundColor: G.sage, alignItems: 'center', justifyContent: 'center' }}>
    <Svg width={size * 0.55} height={size * 0.55} viewBox="0 0 24 24" fill="none">
      <Path d="M20 6L9 17l-5-5" stroke="#fff" strokeWidth={3} strokeLinecap="round" />
    </Svg>
  </View>
);

export const IconCircleEmpty = ({ size = 20, color = G.divider }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="9" stroke={color} strokeWidth={1.5} />
  </Svg>
);

const GardenDetailHeader = ({ navigation, title, right }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.wrap, gardenUi.pageX, { paddingTop: insets.top + Sizer.vSize(12) }]}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.side} hitSlop={12}>
        <Typography size={18} color={G.muted}>
          ←
        </Typography>
      </TouchableOpacity>
      <Typography size={16} color={G.forest} style={{ fontWeight: '600' }}>
        {title}
      </Typography>
      <View style={styles.side}>
        {right ?? (
          <TouchableOpacity hitSlop={12} style={styles.sideBtn}>
            <IconMoreHorizontal />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default GardenDetailHeader;

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 12,
  },
  side: { width: 36, alignItems: 'center' },
  sideBtn: { width: 36, height: 36, alignItems: 'center', justifyContent: 'center' },
});
