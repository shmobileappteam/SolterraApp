import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { ONBOARDING_UI } from '../../screens/OnBoard/onboardingUi';

export default function OnboardingPagination({ count, index, onSelect }) {
  return (
    <View style={styles.row}>
      {Array.from({ length: count }, (_, i) => (
        <Pressable
          key={i}
          onPress={() => onSelect?.(i)}
          hitSlop={8}
          accessibilityRole="button"
          accessibilityLabel={`Go to slide ${i + 1}`}
          accessibilityState={{ selected: i === index }}>
          <View style={[styles.dot, i === index ? styles.dotActive : styles.dotMuted]} />
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  dotActive: {
    backgroundColor: ONBOARDING_UI.primary,
    width: 9,
    height: 9,
    borderRadius: 5,
  },
  dotMuted: {
    backgroundColor: ONBOARDING_UI.dotMuted,
  },
});
