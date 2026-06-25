import { ONBOARDING_SLIDES } from './onboardingSlides';

/** Welcome slide — no footer dots */
export const ONBOARDING_WELCOME_INDEX = 0;

/** Premium 5-step progress across 11 content slides (after welcome) */
export const ONBOARDING_DOT_COUNT = 5;

/**
 * Each dot maps to a section of consecutive slides.
 * Indices refer to ONBOARDING_SLIDES positions.
 */
export const ONBOARDING_DOT_SECTIONS = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8, 9],
  [10, ONBOARDING_SLIDES.length - 1],
];

export function shouldShowOnboardingPagination(slideIndex) {
  return slideIndex > ONBOARDING_WELCOME_INDEX;
}

export function getOnboardingPagination(slideIndex) {
  if (!shouldShowOnboardingPagination(slideIndex)) {
    return null;
  }

  const dotIndex = ONBOARDING_DOT_SECTIONS.findIndex(section => section.includes(slideIndex));

  return {
    count: ONBOARDING_DOT_COUNT,
    index: dotIndex >= 0 ? dotIndex : ONBOARDING_DOT_COUNT - 1,
  };
}

export function getOnboardingSlideIndexForDot(dotIndex) {
  const section = ONBOARDING_DOT_SECTIONS[dotIndex];
  if (!section?.length) {
    return 1;
  }
  return section[0];
}
