import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Typography from '../../../atomComponents/Typography';
import { ChevronRight } from '../../../components/solterra/home/HomeUiParts';
import { ProfileMenuHeader } from './ProfileFlowHeader';
import { CARD_GAP, G, gardenUi } from '../../_partials/gardenUi';
import Sizer from '../../../helpers/Sizer';

const SECTIONS = [
  {
    title: 'Account',
    items: [
      { label: 'Edit Profile', sub: 'Name, photo, bio', screen: 'EditProfileScreen' },
      { label: 'Garden Preferences', sub: 'ZIP, goals, experience', screen: 'ProfileSetupScreen' },
      { label: 'Notifications', sub: 'Reminders & alerts', screen: 'NotificationsScreen' },
    ],
  },
  {
    title: 'Garden',
    items: [
      { label: 'My Garden', screen: 'MainTabs', params: { screen: 'GardenScreen' } },
      { label: 'Monthly Garden Audit', screen: 'GardenAuditScreen' },
      { label: 'AI Garden Scan', screen: 'GardenScanScreen' },
    ],
  },
  {
    title: 'Support',
    items: [
      { label: 'Ask Solterra AI', sub: 'Chat with your garden expert', screen: 'AskSolScreen' },
      { label: 'Help & Settings', screen: 'ProfileScreen' },
    ],
  },
];

const ProfileMenuScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  const open = item => {
    if (item.params) {
      navigation.navigate(item.screen, item.params);
    } else {
      navigation.navigate(item.screen);
    }
  };

  return (
    <View style={gardenUi.page}>
      <ProfileMenuHeader navigation={navigation} title="Profile & Options" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          gardenUi.pageX,
          styles.scroll,
          { paddingBottom: insets.bottom + Sizer.vSize(32) },
        ]}>
        <TouchableOpacity
          style={[gardenUi.card, styles.profileCard]}
          activeOpacity={0.88}
          onPress={() => navigation.navigate('ProfileScreen')}>
          <View style={styles.profileAvatar}>
            <Typography size={26}>🌿</Typography>
          </View>
          <View style={styles.profileCopy}>
            <Typography size={16} color={G.forest} style={{ fontWeight: '600' }}>
              Emma Richardson
            </Typography>
            <Typography size={12} color={G.muted} mT={2}>
              Zone 9b • Backyard • Premium
            </Typography>
          </View>
          <ChevronRight size={16} color={G.muted} />
        </TouchableOpacity>

        {SECTIONS.map(sec => (
          <View key={sec.title} style={styles.section}>
            <Typography size={10} color={G.muted} style={styles.sectionLabel}>
              {sec.title.toUpperCase()}
            </Typography>
            <View style={[gardenUi.card, styles.menuCard]}>
              {sec.items.map((item, i) => (
                <TouchableOpacity
                  key={item.label}
                  style={[styles.menuRow, i > 0 && styles.menuRowBorder]}
                  activeOpacity={0.88}
                  onPress={() => open(item)}>
                  <View style={styles.menuCopy}>
                    <Typography size={14} color={G.forest} style={{ fontWeight: '500' }}>
                      {item.label}
                    </Typography>
                    {item.sub ? (
                      <Typography size={11} color={G.muted} mT={2}>
                        {item.sub}
                      </Typography>
                    ) : null}
                  </View>
                  <ChevronRight size={16} color={G.muted} />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scroll: { gap: CARD_GAP, paddingTop: 4 },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 12,
  },
  profileAvatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: G.sageLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileCopy: { flex: 1, minWidth: 0 },
  section: { gap: 8 },
  sectionLabel: { fontWeight: '600', letterSpacing: 1.2 },
  menuCard: { overflow: 'hidden', padding: 0 },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 12,
    gap: 8,
  },
  menuRowBorder: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: G.divider,
  },
  menuCopy: { flex: 1, minWidth: 0 },
});

export default ProfileMenuScreen;
