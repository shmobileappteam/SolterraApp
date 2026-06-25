import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../globalStyle/Theme';
import { G } from '../../screens/_partials/gardenUi';
import { ONBOARDING_UI } from '../../screens/OnBoard/onboardingUi';

/** Flex-fill image slot with rounded corners — plan onboarding screen */
export default function OnboardingImagePlaceholder({
  source,
  imageKey,
  minHeight = 200,
  maxHeight = 280,
  height,
  imageWidth,
  imageHeight,
  maxWidth,
  borderRadius = ONBOARDING_UI.radiusMd,
  compact = false,
  resizeMode = 'cover',
  flexFill = true,
  style,
}) {
  const isCircle = borderRadius >= ONBOARDING_UI.radiusPill / 2;
  const sizeStyle = maxWidth
    ? { maxWidth, width: maxWidth, aspectRatio: isCircle ? 1 : undefined }
    : null;
  const resolvedHeight = height ?? maxHeight;
  const sizedImage = imageWidth != null && imageHeight != null;
  const fixedHeight = sizedImage
    ? { width: imageWidth, height: imageHeight }
    : !flexFill
      ? { height: resolvedHeight, minHeight: resolvedHeight }
      : { minHeight, maxHeight };
  const clipStyle = { ...fixedHeight, ...(sizedImage ? null : { borderRadius }) };

  return (
    <View
      style={[
        flexFill ? styles.wrap : styles.fixedWrap,
        compact ? styles.compactWrap : null,
        clipStyle,
        sizeStyle,
        style,
      ]}
      accessibilityLabel={`${imageKey} illustration`}>
      {source ? (
        <Image
          source={source}
          style={styles.image}
          resizeMode={resizeMode}
          accessibilityIgnoresInvertColors
        />
      ) : (
        <View style={[styles.placeholder, { borderRadius }]}>
          <Text style={styles.placeholderLabel}>IMAGE</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    width: '100%',
    minHeight: 0,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  fixedWrap: {
    width: '100%',
    overflow: 'hidden',
    alignSelf: 'center',
  },
  compactWrap: {
    overflow: 'hidden',
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  placeholder: {
    flex: 1,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: COLORS.border,
    backgroundColor: G.sageLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderLabel: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1.2,
    color: G.muted,
  },
});
