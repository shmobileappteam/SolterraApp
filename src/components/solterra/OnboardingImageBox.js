import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

/**
 * Illustration slot — fixed aspect ratio OR flex-fill (shrinks to fit screen).
 * Use flexFill inside onboarding slides (no ScrollView).
 */
export default function OnboardingImageBox({
  source,
  imageKey,
  widthRatio = 0.86,
  aspectRatio = 1.42,
  flexFill = false,
  style,
}) {
  const width = `${Math.round(widthRatio * 100)}%`;

  if (flexFill) {
    return (
      <View
        style={[styles.flexBox, { width }, style]}
        accessibilityLabel={`${imageKey} illustration`}>
        {source ? (
          <Image
            source={source}
            style={styles.flexImage}
            resizeMode="contain"
            accessibilityIgnoresInvertColors
          />
        ) : null}
      </View>
    );
  }

  return (
    <View
      style={[styles.box, { width, aspectRatio }, style]}
      accessibilityLabel={`${imageKey} illustration`}>
      {source ? (
        <Image
          source={source}
          style={styles.image}
          resizeMode="contain"
          accessibilityIgnoresInvertColors
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  flexBox: {
    flex: 1,
    minHeight: 48,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  flexImage: {
    width: '100%',
    height: '100%',
  },
});
