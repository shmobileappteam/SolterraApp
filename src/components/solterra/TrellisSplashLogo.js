import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { COLORS, FONTS } from '../../globalStyle/Theme';

function LeafSprout({ size = 14 }) {
  return (
    <Svg width={size} height={size * 0.9} viewBox="0 0 16 14" style={styles.leafSvg}>
      <Path
        d="M8 2 C4 2 2 6 2 10 C2 12 4 13 6 12 C5 8 6 4 8 2 Z"
        fill={COLORS.splashLeafGreen}
      />
      <Path
        d="M8 2 C12 2 14 6 14 10 C14 12 12 13 10 12 C11 8 10 4 8 2 Z"
        fill={COLORS.splashLeafLight}
      />
    </Svg>
  );
}

/** Trellis by Solterra lockup — splash (card) or auth welcome (no card) */
export default function TrellisSplashLogo({ showCard = true, showRegistered = false }) {
  const content = (
    <>
      <View style={styles.trellisRow}>
        <Text style={styles.trellisText}>trell</Text>
        <View style={styles.iWrap}>
          <View style={styles.leafOnI}>
            <LeafSprout size={13} />
          </View>
          <Text style={styles.trellisText}>i</Text>
        </View>
        <Text style={styles.trellisText}>s</Text>
        {showRegistered ? <Text style={styles.reg}>®</Text> : null}
      </View>

      <View style={styles.byRow}>
        <Text style={[styles.byText, !showCard && styles.byMuted]}>by </Text>
        <Text style={styles.sun}>☀️</Text>
        <Text style={[styles.solterraText, !showCard && styles.solterraMuted]}> solterra</Text>
      </View>
    </>
  );

  if (showCard) {
    return <View style={styles.card}>{content}</View>;
  }
  return <View style={styles.plain}>{content}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.splashLogoCard,
    paddingHorizontal: 28,
    paddingVertical: 22,
    alignItems: 'center',
    minWidth: 260,
  },
  plain: {
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  trellisRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  reg: {
    fontSize: 11,
    color: COLORS.splashForest,
    marginLeft: 2,
    marginBottom: 10,
    opacity: 0.7,
  },
  trellisText: {
    fontFamily: FONTS.display,
    fontSize: 44,
    fontWeight: '700',
    color: COLORS.splashForest,
    letterSpacing: -0.5,
    lineHeight: 48,
  },
  iWrap: {
    alignItems: 'center',
    marginHorizontal: 1,
  },
  leafOnI: {
    position: 'absolute',
    top: -14,
    alignSelf: 'center',
  },
  leafSvg: {
    marginBottom: -2,
  },
  byRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  byText: {
    fontFamily: FONTS.body,
    fontSize: 15,
    color: COLORS.splashForest,
  },
  byMuted: {
    color: COLORS.textMuted,
  },
  sun: {
    fontSize: 14,
    marginRight: 2,
  },
  solterraText: {
    fontFamily: FONTS.body,
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.splashForest,
    letterSpacing: -0.2,
  },
  solterraMuted: {
    color: COLORS.textMuted,
    fontWeight: '400',
  },
});
