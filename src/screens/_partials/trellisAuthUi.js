import { StyleSheet } from 'react-native';
import { G } from './gardenUi';
import { FONTS, RADIUS } from '../../globalStyle/Theme';
import Sizer from '../../helpers/Sizer';

const BTN_RADIUS = RADIUS.md;

/** Auth / onboarding tokens — matches web `garden-tokens` + `form-ui` */
export const T = {
  cream: G.cream,
  forest: G.forest,
  muted: G.muted,
  sage: G.sage,
  accent: '#D0EC7E',
  primary: '#0D5530',
  surface: '#FFFFFF',
  border: G.divider,
};

export const trellisAuthStyles = StyleSheet.create({
  displayTitle: {
    fontFamily: FONTS.display,
    fontWeight: '700',
    fontSize: Sizer.fS(22),
    lineHeight: Sizer.fS(28),
    color: T.forest,
  },
  bodyMuted: {
    fontSize: Sizer.fS(13),
    lineHeight: Sizer.fS(18),
    color: T.muted,
  },
  btnPrimary: {
    borderRadius: BTN_RADIUS,
    backgroundColor: T.primary,
  },
  btnPrimaryText: {
    color: T.accent,
    fontWeight: '600',
    fontSize: Sizer.fS(14),
  },
  btnOutline: {
    borderRadius: BTN_RADIUS,
    borderWidth: 1,
    borderColor: T.primary,
    backgroundColor: 'transparent',
  },
  btnOutlineText: {
    color: T.primary,
    fontWeight: '600',
    fontSize: Sizer.fS(14),
  },
  btnSecondary: {
    borderRadius: BTN_RADIUS,
    borderWidth: 1,
    borderColor: T.border,
    backgroundColor: 'transparent',
  },
  btnSecondaryText: {
    color: T.forest,
    fontWeight: '500',
    fontSize: Sizer.fS(14),
  },
  glassLabel: {
    fontFamily: FONTS.label,
    fontSize: Sizer.fS(10),
    letterSpacing: 1.2,
    color: 'rgba(255,255,255,0.7)',
    textTransform: 'uppercase',
  },
  glassInput: {
    height: Sizer.hSize(40),
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.25)',
    backgroundColor: 'rgba(255,255,255,0.15)',
    paddingHorizontal: 12,
    fontSize: Sizer.fS(14),
    color: '#fff',
  },
  setupTitle: {
    fontFamily: FONTS.display,
    fontWeight: '700',
    fontSize: Sizer.fS(28),
    lineHeight: Sizer.fS(32),
    color: '#fff',
  },
  accentPill: {
    alignSelf: 'flex-start',
    backgroundColor: T.accent,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
  },
  accentPillText: {
    fontFamily: FONTS.label,
    fontSize: Sizer.fS(10),
    letterSpacing: 1.2,
    color: T.primary,
    fontWeight: '600',
  },
  continueBtn: {
    marginTop: 24,
    height: Sizer.hSize(44),
    borderRadius: BTN_RADIUS,
    backgroundColor: T.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueBtnText: {
    fontSize: Sizer.fS(14),
    fontWeight: '600',
    color: T.primary,
  },
});
