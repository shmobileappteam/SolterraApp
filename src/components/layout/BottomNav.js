import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { G } from '../../screens/_partials/gardenUi';
import {
  TabIconCart,
  TabIconClipboard,
  TabIconHome,
  TabIconLeaf,
  TabIconUsers,
} from './BottomNavIcons';

const TABS = [
  { id: 'home', label: 'Home', screen: 'HomeScreen', renderIcon: (active) => <TabIconHome active={active} /> },
  {
    id: 'garden',
    label: 'Garden',
    screen: 'GardenScreen',
    renderIcon: (active) =>
      active ? (
        <View style={styles.gardenActive}>
          <TabIconLeaf active inCircle />
        </View>
      ) : (
        <TabIconLeaf active={false} />
      ),
  },
  {
    id: 'tasks',
    label: 'Tasks',
    screen: 'TasksScreen',
    renderIcon: (active) =>
      active ? (
        <View style={styles.tasksActive}>
          <TabIconClipboard active inBox />
        </View>
      ) : (
        <TabIconClipboard active={false} />
      ),
  },
  { id: 'community', label: 'Community', screen: 'CommunityScreen', renderIcon: active => <TabIconUsers active={active} /> },
  { id: 'shop', label: 'Shop', screen: 'ShopScreen', renderIcon: active => <TabIconCart active={active} /> },
];

const SCREEN_TO_TAB = Object.fromEntries(TABS.map(t => [t.screen, t]));

function BottomNav({ state, navigation }) {
  const insets = useSafeAreaInsets();

  if (!state?.routes?.length) {
    return null;
  }

  return (
    <View style={[styles.bar, { paddingBottom: insets.bottom }]}>
      <View style={styles.row}>
        {state.routes.map((route, index) => {
          const tab = SCREEN_TO_TAB[route.name];
          if (!tab) return null;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={route.key}
              style={styles.tab}
              onPress={onPress}
              activeOpacity={0.7}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={tab.label}>
              <View style={styles.iconWrap}>{tab.renderIcon(isFocused)}</View>
              <Text
                style={[
                  styles.tabLabel,
                  { color: isFocused ? G.forest : G.muted, fontWeight: isFocused ? '600' : '500' },
                ]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

export default BottomNav;

const styles = StyleSheet.create({
  bar: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: G.divider,
    paddingTop: 8,
    paddingHorizontal: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    gap: 5,
    paddingTop: 0,
    paddingBottom: 0,
  },
  iconWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    fontSize: 10,
    lineHeight: 12,
    textAlign: 'center',
    includeFontPadding: false,
  },
  gardenActive: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: G.forest,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tasksActive: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: G.forest,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
