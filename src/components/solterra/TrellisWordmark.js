import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { FONTS } from '../../globalStyle/Theme';
import Sizer from '../../helpers/Sizer';
import { G } from '../../screens/_partials/gardenUi';

function LeafMark({ size = 14 }) {
  return (
    <Svg width={size} height={size * 0.9} viewBox="0 0 16 14" style={styles.leaf}>
      <Path
        d="M8 2 C4 2 2 6 2 10 C2 12 4 13 6 12 C5 8 6 4 8 2 Z"
        fill={G.sage}
      />
      <Path
        d="M8 2 C12 2 14 6 14 10 C14 12 12 13 10 12 C11 8 10 4 8 2 Z"
        fill={G.sage}
      />
    </Svg>
  );
}

/** Lowercase trellis wordmark — welcome onboarding screen */
export default function TrellisWordmark({ color = G.primary }) {
  return (
    <View style={styles.row} accessibilityRole="header" accessibilityLabel="trellis">
      <Text style={[styles.word, { color }]}>trell</Text>
      <View style={styles.iWrap}>
        <View style={styles.leafOnI}>
          <LeafMark size={13} />
        </View>
        <Text style={[styles.word, { color }]}>i</Text>
      </View>
      <Text style={[styles.word, { color }]}>s</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: Sizer.vSize(2),
  },
  word: {
    fontFamily: FONTS.display,
    fontSize: Sizer.fS(44),
    lineHeight: Sizer.fS(48),
    fontWeight: '700',
    letterSpacing: -0.8,
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
  leaf: {
    marginBottom: -2,
  },
});
