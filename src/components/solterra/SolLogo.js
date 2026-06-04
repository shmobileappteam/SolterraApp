import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Circle, Line } from 'react-native-svg';
import { COLORS, FONTS } from '../../globalStyle/Theme';
import Typography from '../../atomComponents/Typography';
import Sizer from '../../helpers/Sizer';

export function SolMark({ size = 18, color = COLORS.primary, accent = COLORS.accent }) {
  const s = Sizer.hSize(size);
  const rays = Array.from({ length: 12 }, (_, i) => {
    const a = (i * Math.PI) / 6;
    const x1 = 12 + Math.cos(a) * 6.5;
    const y1 = 12 + Math.sin(a) * 6.5;
    const x2 = 12 + Math.cos(a) * 10.5;
    const y2 = 12 + Math.sin(a) * 10.5;
    return (
      <Line
        key={i}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={accent}
        strokeWidth={1.6}
        strokeLinecap="round"
      />
    );
  });
  return (
    <Svg width={s} height={s} viewBox="0 0 24 24">
      <Circle cx={12} cy={12} r={4} fill={color} />
      {rays}
    </Svg>
  );
}

/** Web Tailwind: sm=text-2xl, md=text-4xl, lg=text-5xl + mark/sub from Logo.tsx */
const LOGO_SIZES = {
  sm: { text: 24, mark: 16, sub: 8, subTracking: 2.8 },
  md: { text: 36, mark: 22, sub: 10, subTracking: 4.2 },
  lg: { text: 48, mark: 28, sub: 11, subTracking: 5 },
};

export function SolterraLogo({ variant = 'color', size = 'md' }) {
  const isWhite = variant === 'white';
  const textColor = isWhite ? COLORS.white : COLORS.primary;
  const markColor = isWhite ? COLORS.white : COLORS.primary;
  const subColor = isWhite ? 'rgba(255,255,255,0.7)' : 'rgba(13,85,48,0.7)';
  const sizes = LOGO_SIZES[size];

  return (
    <View style={styles.logoWrap}>
      <View style={styles.logoRow}>
        <Typography
          size={sizes.text}
          color={textColor}
          style={{ fontWeight: '700', fontFamily: FONTS.display }}>
          s
        </Typography>
        <View style={styles.markWrap}>
          <SolMark size={sizes.mark} color={markColor} accent={COLORS.accent} />
        </View>
        <Typography
          size={sizes.text}
          color={textColor}
          style={{ fontWeight: '700', fontFamily: FONTS.display }}>
          lterra
        </Typography>
      </View>
      <Typography
        variant="label"
        size={sizes.sub}
        color={subColor}
        textAlign="center"
        letterSpacing={sizes.subTracking}
        mT={6}>
        GARDEN SYSTEMS
      </Typography>
    </View>
  );
}

const styles = StyleSheet.create({
  logoWrap: { alignItems: 'center' },
  logoRow: { flexDirection: 'row', alignItems: 'center' },
  markWrap: { marginHorizontal: 2, justifyContent: 'center' },
});
