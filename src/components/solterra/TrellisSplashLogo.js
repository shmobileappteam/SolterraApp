import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
import { solterraGreenLogo, solterraWhiteLogo } from '../../assets/images';
import Sizer from '../../helpers/Sizer';

const LOGO_SOURCES = {
  green: solterraGreenLogo,
  white: solterraWhiteLogo,
};

const LOGO_ASPECT = 1366 / 768;

/** Logical widths before screen cap — keep auth compact, splash slightly larger */
export const LOGO_WIDTH = {
  auth: 156,
  splash: 188,
};

const SCREEN_W = Dimensions.get('window').width;
const MAX_SCREEN_FRACTION = 0.68;

function resolveLogoWidth(size = 'auth') {
  const base = typeof size === 'number' ? size : LOGO_WIDTH[size] ?? LOGO_WIDTH.auth;
  return Math.min(Sizer.hSize(base), SCREEN_W * MAX_SCREEN_FRACTION);
}

export default function TrellisSplashLogo({ variant = 'green', size = 'auth' }) {
  const width = resolveLogoWidth(size);
  const height = width / LOGO_ASPECT;

  return (
    <Image
      source={LOGO_SOURCES[variant] ?? LOGO_SOURCES.green}
      style={[styles.logo, { width, height }]}
      resizeMode="contain"
      accessibilityRole="image"
      accessibilityLabel="Trellis by Solterra Garden Systems"
    />
  );
}

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
  },
});
