import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Dimensions,
  Easing,
  Pressable,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TrellisSplashLogo from '../../components/solterra/TrellisSplashLogo';
import SplashSoftWave from '../../components/solterra/SplashSoftWave';
import Typography from '../../atomComponents/Typography';
import { COLORS, FONTS } from '../../globalStyle/Theme';
import { G } from '../_partials/gardenUi';

const SplashScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const { width: screenW, height: screenH } = Dimensions.get('window');
  const waveHeight = Math.max(100, screenH * 0.14);

  const floatY = useRef(new Animated.Value(16)).current;
  const floatOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const t = setTimeout(() => navigation.replace('OnboardingScreen'), 3000);
    return () => clearTimeout(t);
  }, [navigation]);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(floatY, {
        toValue: 0,
        duration: 700,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(floatOpacity, {
        toValue: 1,
        duration: 700,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
    ]).start();
  }, [floatY, floatOpacity]);

  const goNext = () => navigation.replace('OnboardingScreen');

  return (
    <Pressable style={styles.root} onPress={goNext}>
      <StatusBar barStyle="dark-content" backgroundColor={G.cream} />

      <SplashSoftWave width={screenW} height={waveHeight} />

      <View
        style={[
          styles.body,
          {
            paddingTop: insets.top + 48,
            paddingBottom: insets.bottom + 28,
          },
        ]}>
        <View style={styles.centerBlock}>
          <Animated.View
            style={{
              opacity: floatOpacity,
              transform: [{ translateY: floatY }],
              alignItems: 'center',
            }}>
            <TrellisSplashLogo size="splash" />
            <Typography
              size={17}
              color={COLORS.splashForest}
              textAlign="center"
              style={styles.tagline}>
              Grow something beautiful.
            </Typography>
          </Animated.View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: G.cream,
    overflow: 'hidden',
  },
  body: {
    flex: 1,
    zIndex: 2,
  },
  centerBlock: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  tagline: {
    marginTop: 36,
    fontStyle: 'italic',
    fontFamily: FONTS.display,
    opacity: 0.92,
  },
});

export default SplashScreen;
