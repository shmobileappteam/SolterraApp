import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TrellisSplashLogo from '../../components/solterra/TrellisSplashLogo';
import Typography from '../../atomComponents/Typography';
import { FONTS, RADIUS, SPACING } from '../../globalStyle/Theme';
import { G } from './gardenUi';
import { T } from './trellisAuthUi';
import Sizer from '../../helpers/Sizer';

export default function AuthShell({
  children,
  variant = 'trellis',
  onBack,
  showRegistered = false,
  heroBg = false,
}) {
  const insets = useSafeAreaInsets();
  const isTrellis = variant === 'trellis';

  return (
    <View style={[styles.authRoot, isTrellis && styles.authRootTrellis, heroBg && styles.authRootHero]}>
      <StatusBar
        barStyle={heroBg ? 'light-content' : 'dark-content'}
        translucent
        backgroundColor="transparent"
      />

      {isTrellis && onBack ? (
        <TouchableOpacity
          style={[styles.backBtn, { top: insets.top + 6 }]}
          onPress={onBack}
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
          accessibilityRole="button"
          accessibilityLabel="Go back">
          <Typography size={26} color={T.forest} style={styles.backIcon}>
            ←
          </Typography>
        </TouchableOpacity>
      ) : null}

      <View style={[styles.authTop, heroBg && styles.authTopHero, { paddingTop: insets.top + Sizer.vSize(12) }]}>
        {isTrellis && !heroBg ? <View style={styles.glow} pointerEvents="none" /> : null}
        <TrellisSplashLogo showCard={false} showRegistered={showRegistered} />
        <Typography
          size={14}
          color={heroBg ? 'rgba(255,255,255,0.9)' : T.muted}
          textAlign="center"
          mT={12}
          style={styles.tagline}>
          Grow something beautiful.
        </Typography>
      </View>

      <View style={[styles.authSheet, heroBg && styles.authSheetHero]}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.authScroll}>
          {children}
        </ScrollView>
      </View>
    </View>
  );
}

export const authScreenStyles = StyleSheet.create({
  authActions: { marginTop: 20, gap: 10 },
  formBlock: { marginTop: 20, gap: 14 },
  divider: { flex: 1, height: 1, backgroundColor: T.border },
});

const styles = StyleSheet.create({
  authRoot: { flex: 1, backgroundColor: T.cream },
  authRootTrellis: { backgroundColor: T.cream },
  authRootHero: { backgroundColor: 'transparent' },
  authTopHero: { zIndex: 2 },
  authSheetHero: { zIndex: 2 },
  backBtn: {
    position: 'absolute',
    left: Sizer.hSize(8),
    zIndex: 30,
    padding: 8,
  },
  backIcon: {
    lineHeight: Sizer.fS(28),
    fontWeight: '400',
  },
  authTop: {
    height: '32%',
    minHeight: 200,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    paddingHorizontal: 24,
  },
  glow: {
    position: 'absolute',
    top: -32,
    right: 16,
    width: 144,
    height: 144,
    borderRadius: 72,
    backgroundColor: G.sageLight,
    opacity: 0.85,
  },
  tagline: {
    fontStyle: 'italic',
    fontFamily: FONTS.display,
  },
  authSheet: {
    flex: 1,
    backgroundColor: T.surface,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: Sizer.hSize(SPACING.screenPx),
    paddingTop: Sizer.vSize(24),
    marginTop: -Sizer.vSize(8),
    shadowColor: G.forest,
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 8,
  },
  authScroll: { paddingBottom: 32 },
});
