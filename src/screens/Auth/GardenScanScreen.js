import React from 'react';
import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Circle, Path } from 'react-native-svg';
import Typography from '../../atomComponents/Typography';
import { heroGarden, onb2 } from '../../assets/images';
import SetupGradientOverlay from '../../components/solterra/SetupGradientOverlay';
import { trellisAuthStyles, T } from '../_partials/trellisAuthUi';
import Sizer from '../../helpers/Sizer';

const stroke = (color, w = 1.5) => ({
  stroke: color,
  strokeWidth: w,
  fill: 'none',
  strokeLinecap: 'round',
});

const IconSun = () => (
  <Svg width={16} height={16} viewBox="0 0 24 24">
    <Circle cx="12" cy="12" r="4" fill={T.accent} />
    <Path d="M12 2v2M12 20v2M2 12h2M20 12h2" {...stroke(T.accent, 2)} />
  </Svg>
);

const IconPin = () => (
  <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
    <Path d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z" {...stroke(T.accent)} />
    <Circle cx="12" cy="10" r="2" {...stroke(T.accent)} />
  </Svg>
);

const IconDroplet = () => (
  <Svg width={16} height={16} viewBox="0 0 24 24">
    <Path d="M12 2.69l5.66 5.66a8 8 0 11-11.32 0L12 2.69z" fill={T.accent} />
  </Svg>
);

const IconLeaf = () => (
  <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
    <Path
      d="M11 20A7 7 0 019.5 6.5C13 3 20 4 20 4s-1 7-4.5 10.5A7 7 0 0111 20z"
      {...stroke(T.accent, 1.75)}
    />
  </Svg>
);

const SCAN_RESULTS = [
  { Icon: IconSun, label: 'Sunlight Analysis', value: 'Full sun' },
  { Icon: IconPin, label: 'Suggested Zones', value: '5' },
  { Icon: IconDroplet, label: 'Irrigation Plan', value: 'Drip system' },
  { Icon: IconLeaf, label: 'Recommended Plants', value: '24' },
];

const GardenScanScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <ImageBackground source={onb2} style={styles.root} resizeMode="cover">
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <SetupGradientOverlay />

      <View style={[styles.topBar, { paddingTop: insets.top + 8 }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={12}>
          <Typography size={22} color="rgba(255,255,255,0.9)">
            ←
          </Typography>
        </TouchableOpacity>
        <Typography size={11} color="rgba(255,255,255,0.7)" style={{ fontWeight: '500' }}>
          Step 2 of 2
        </Typography>
        <View style={{ width: 28 }} />
      </View>

      <View style={styles.heroCard}>
        <Image source={heroGarden} style={styles.heroImg} />
        <View style={styles.heroOverlay} />
        <View style={styles.heroBadge}>
          <Typography size={10} color="#fff" style={{ fontWeight: '500' }}>
            Garden layout preview
          </Typography>
        </View>
      </View>

      <View style={[styles.bottom, { paddingBottom: insets.bottom + 28 }]}>
        <View style={trellisAuthStyles.accentPill}>
          <Typography style={trellisAuthStyles.accentPillText}>AI SCAN</Typography>
        </View>

        <Typography style={[trellisAuthStyles.setupTitle, { marginTop: 12 }]}>
          Scan Complete
        </Typography>
        <Typography size={13} color="rgba(255,255,255,0.9)" mT={8} style={{ lineHeight: Sizer.fS(20) }}>
          We analyzed your space and built a personalized garden profile.
        </Typography>

        <View style={styles.results}>
          {SCAN_RESULTS.map(({ Icon, label, value }) => (
            <View key={label} style={styles.resultRow}>
              <View style={styles.resultIcon}>
                <Icon />
              </View>
              <View style={{ flex: 1 }}>
                <Typography size={11} color="rgba(255,255,255,0.7)">
                  {label}
                </Typography>
                <Typography size={14} color="#fff" style={{ fontWeight: '600' }}>
                  {value}
                </Typography>
              </View>
            </View>
          ))}
        </View>

        <TouchableOpacity
          style={trellisAuthStyles.continueBtn}
          activeOpacity={0.88}
          onPress={() => navigation.replace('MainTabs')}>
          <Typography style={trellisAuthStyles.continueBtnText}>View My Garden →</Typography>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1 },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    zIndex: 20,
  },
  heroCard: {
    position: 'absolute',
    left: 20,
    right: 20,
    top: '22%',
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    zIndex: 10,
  },
  heroImg: { width: '100%', height: 144 },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  heroBadge: {
    position: 'absolute',
    bottom: 8,
    left: 12,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    zIndex: 10,
  },
  results: { marginTop: 16, gap: 8 },
  resultRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  resultIcon: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default GardenScanScreen;
