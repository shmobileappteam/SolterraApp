import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Sizer from '../../helpers/Sizer';
import { G, gardenUi } from '../../screens/_partials/gardenUi';

/**
 * Tab root layout: sticky header (safe area + screen chrome), scrollable body below.
 */
const TabScreenLayout = ({ header, children, contentContainerStyle, headerStyle }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={gardenUi.page}>
      <View
        style={[
          styles.headerShell,
          { paddingTop: insets.top + Sizer.vSize(12) },
          headerStyle,
        ]}>
        <View style={gardenUi.pageX}>{header}</View>
      </View>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[styles.scrollContent, contentContainerStyle]}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        {children}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerShell: {
    backgroundColor: G.cream,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: G.divider,
    paddingBottom: Sizer.vSize(10),
    zIndex: 2,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    ...gardenUi.scrollPad,
    paddingTop: Sizer.vSize(12),
    paddingBottom: Sizer.vSize(96),
  },
});

export default TabScreenLayout;
