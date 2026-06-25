import { StyleSheet } from 'react-native';
import Sizer from '../../helpers/Sizer';

/** Trellis garden UI — matches web `garden-tokens.ts` */
export const G = {
  cream: '#F9F8F3',
  forest: '#1A3020',
  muted: '#5C6B5E',
  sage: '#4A7C44',
  sageLight: '#E8F0E6',
  sageBanner: '#E1E8D8',
  cardTint: '#F2F1E9',
  divider: '#E8E6E0',
  orange: '#C47A3A',
  orangeLight: '#F5EBE0',
  /** Web `--primary` / `bg-primary` */
  primary: '#0D5530',
  accent: '#D0EC7E',
};

export const CARD_SHADOW = {
  shadowColor: '#1A3020',
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.06,
  shadowRadius: 12,
  elevation: 3,
};

export const CARD_LIFT_SHADOW = {
  shadowColor: '#1A3020',
  shadowOffset: { width: 0, height: 5 },
  shadowOpacity: 0.1,
  shadowRadius: 18,
  elevation: 5,
};

export const gardenUi = StyleSheet.create({
  page: { flex: 1, backgroundColor: G.cream },
  scrollPad: { paddingBottom: Sizer.vSize(24) },
  pageX: { paddingHorizontal: Sizer.hSize(16) },
  card: {
    borderRadius: 12,
    backgroundColor: G.cream,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: G.divider,
    ...CARD_SHADOW,
  },
  cardLift: {
    borderRadius: 14,
    backgroundColor: G.cream,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: G.divider,
    ...CARD_LIFT_SHADOW,
  },
  imgR: { borderRadius: 6 },
});

export const cardPad = { padding: 14 };
export const CARD_GAP = 10;
