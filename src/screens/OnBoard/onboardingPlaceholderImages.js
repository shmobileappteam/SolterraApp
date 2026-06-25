import { PixelRatio } from 'react-native';
import { IMAGE_POSITION, ONBOARDING_UI } from './onboardingUi';

/** Toggle remote placeholders — set false to revert to dashed IMAGE boxes */
export const ONBOARDING_USE_REMOTE_PLACEHOLDERS = true;

const CONTENT_WIDTH = Math.round(ONBOARDING_UI.screenW - ONBOARDING_UI.padX * 2);
const PIXEL_SCALE = Math.min(Math.round(PixelRatio.get()), 3);

/**
 * Remote placeholder sized to match each slide's imageBox.
 * Swap later by setting slide.imageSource to a local require() in onboardingSlides.js.
 */
export function getOnboardingPlaceholderSource(imageKey, imageBox = {}) {
  const logicalWidth = Math.round(imageBox.maxWidth ?? CONTENT_WIDTH);
  const logicalHeight = Math.round(
    imageBox.maxHeight ?? imageBox.minHeight ?? 240,
  );
  const width = Math.max(logicalWidth * PIXEL_SCALE, 120);
  const height = Math.max(logicalHeight * PIXEL_SCALE, 120);
  const seed = encodeURIComponent(String(imageKey).replace(/[^a-zA-Z0-9-]/g, '-'));

  return {
    uri: `https://picsum.photos/seed/${seed}/${width}/${height}`,
  };
}

/** Compact placeholder for in-card thumbnails (avatar, project thumb, etc.) */
export function getOnboardingThumbSource(imageKey, size = 44) {
  return getOnboardingPlaceholderSource(imageKey, {
    maxWidth: size,
    maxHeight: size,
    minHeight: size,
  });
}

export function withOnboardingPlaceholderImages(slides) {
  if (!ONBOARDING_USE_REMOTE_PLACEHOLDERS) {
    return slides;
  }

  return slides.map(slide => {
    if (
      slide.imagePosition === IMAGE_POSITION.none ||
      slide.imageSource != null
    ) {
      return slide;
    }

    return {
      ...slide,
      imageSource: getOnboardingPlaceholderSource(slide.imageKey, slide.imageBox),
    };
  });
}
