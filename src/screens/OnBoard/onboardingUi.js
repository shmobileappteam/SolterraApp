import { Dimensions } from 'react-native';
import { COLORS, RADIUS, SPACING } from '../../globalStyle/Theme';
import Sizer from '../../helpers/Sizer';
import { G } from '../_partials/gardenUi';

const { width: SCREEN_W } = Dimensions.get('window');

/** Onboarding tokens — mapped to app-wide theme */
export const ONBOARDING_UI = {
  cream: G.cream,
  green: G.forest,
  text: G.muted,
  primary: G.primary,
  dotMuted: COLORS.splashDotMuted,
  cardBg: COLORS.surface,
  cardBorder: G.divider,
  padX: Sizer.hSize(SPACING.screenPx),
  screenW: SCREEN_W,
  white: COLORS.white,
  radiusMd: RADIUS.md,
  radiusPill: RADIUS.pill,
};

/** Flex-fill illustration bounds — same rounded placeholder on every slide */
export const ONBOARDING_IMAGE = {
  /** Slide 1 — wide top banner (~content width × 300) */
  top: { minHeight: 180, maxHeight: 300, borderRadius: RADIUS.md },
  /** Slides 3, 5, 8–10, 12 — standard middle slot */
  middle: { minHeight: 200, maxHeight: 280, borderRadius: RADIUS.md },
  /** Slide 6 — bottom illustration */
  bottom: { minHeight: 180, maxHeight: 260, borderRadius: RADIUS.md },
  /** Slides 4, 11 — taller plan/diagnose slot */
  plan: { minHeight: 200, maxHeight: 280, borderRadius: RADIUS.md },
  /** Slide 7 — circular mascot (~200×200) */
  mascot: {
    minHeight: 140,
    maxHeight: 200,
    maxWidth: 200,
    borderRadius: RADIUS.pill,
  },
};

export const FOOTER = {
  welcome: 'welcome',
  standard: 'standard',
};

export const IMAGE_POSITION = {
  none: 'none',
  top: 'top',
  middle: 'middle',
  bottom: 'bottom',
};

export const CONTENT_ALIGN = {
  left: 'left',
  center: 'center',
};

export const LIST_VARIANT = {
  iconList: 'iconList',
  checklist: 'checklist',
};

export const BLOCK_VARIANT = {
  taskCard: 'taskCard',
  communityCard: 'communityCard',
  projectsCard: 'projectsCard',
  diagnoseCard: 'diagnoseCard',
  progressCard: 'progressCard',
};

/** @deprecated All slides use OnboardingImagePlaceholder (plan-style) */
export const IMAGE_STYLE = {
  plan: 'plan',
};
