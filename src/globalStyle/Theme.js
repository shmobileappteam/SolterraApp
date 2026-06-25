import { Dimensions, Platform, StyleSheet } from 'react-native';
import Sizer from '../helpers/Sizer';

const COLORS = {
  mainBg: '#F5F0E8',
  cream: '#F5F0E8',
  surface: '#FFFFFF',
  surfaceMuted: '#F0EBE3',
  border: '#E0DDD5',
  borderMuted: '#E0DDD5',
  foreground: '#1A3328',
  textPrimary: '#1A3328',
  textSecondary: '#5A7A5A',
  textMuted: '#5A7A5A',
  primary: '#0D5530',
  primaryForeground: '#FAFFF5',
  accent: '#D0EC7E',
  accentForeground: '#0D5530',
  destructive: '#C45A2A',
  success: '#2D7A52',
  splashGreen: '#1F7A44',
  splashDark: '#062B18',
  overlay: 'rgba(0,0,0,0.45)',
  white: '#FFFFFF',
  black: '#000000',
  green50: '#F0FDF4',
  green100: '#DCFCE7',
  green600: '#16A34A',
  green700: '#15803D',
  yellow300: '#FDE047',
  /** Cream splash mock */
  splashBg: '#F9F8F3',
  splashForest: '#1B3022',
  splashDotMuted: '#D0DDD0',
};

const FONTS = {
  display: Platform.select({ ios: 'Georgia', android: 'serif', default: 'serif' }),
  body: Platform.select({ ios: 'System', android: 'sans-serif', default: 'sans-serif' }),
  label: Platform.select({ ios: 'System', android: 'sans-serif', default: 'sans-serif' }),
  bodySemiBold: Platform.select({
    ios: 'System',
    android: 'sans-serif-medium',
    default: 'sans-serif',
  }),
  bodyBold: Platform.select({
    ios: 'System',
    android: 'sans-serif-medium',
    default: 'sans-serif',
  }),
};

const WINDOW = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
};

const SPACING = {
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  screenPx: 20,
  section: 20,
  cardP: 12,
  bottomNav: 88,
};

const RADIUS = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  sheet: 28,
  pill: 999,
};

const TYPE = {
  h1: { size: 20, lineHeight: 26, fontFamily: FONTS.display, fontWeight: '700' },
  h2: { size: 18, lineHeight: 24, fontFamily: FONTS.display, fontWeight: '700' },
  h3: { size: 16, lineHeight: 22, fontFamily: FONTS.display, fontWeight: '600' },
  body: { size: 14, lineHeight: 20, fontFamily: FONTS.body, fontWeight: '400' },
  bodySm: { size: 13, lineHeight: 18, fontFamily: FONTS.body, fontWeight: '400' },
  caption: { size: 12, lineHeight: 16, fontFamily: FONTS.body, fontWeight: '400' },
  micro: { size: 10, lineHeight: 14, fontFamily: FONTS.label, fontWeight: '500' },
  label: {
    size: 10,
    lineHeight: 14,
    fontFamily: FONTS.label,
    fontWeight: '600',
    letterSpacing: 1.8,
  },
};

const SHADOWS = {
  soft: {
    elevation: 2,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  card: {
    elevation: 4,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 14,
  },
};

const GLOBALSTYLE = {
  paddingHor: {
    paddingHorizontal: Sizer.hSize(SPACING.screenPx),
  },
  screenCard: {
    backgroundColor: COLORS.surface,
    borderRadius: Sizer.hSize(RADIUS.lg),
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: COLORS.border,
    ...SHADOWS.soft,
  },
};

export {
  COLORS,
  WINDOW,
  FONTS,
  GLOBALSTYLE,
  SPACING,
  RADIUS,
  TYPE,
  SHADOWS,
};
