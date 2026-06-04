import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Typography from '../../../atomComponents/Typography';
import Flex from '../../../atomComponents/Flex';
import Sizer from '../../../helpers/Sizer';
import { G } from '../../_partials/gardenUi';
import { profileStyles as styles } from './profileStyles';

function SettingsGroup({ title, items, onPress }) {
  return (
    <View style={styles.settingsGroup}>
      <Typography size={10} color={G.muted} mB={8} style={{ fontWeight: '600', letterSpacing: 1.2 }}>
        {title.toUpperCase()}
      </Typography>
      <View style={styles.settingsCard}>
        {items.map((it, i) => (
          <TouchableOpacity
            key={it.l}
            style={[styles.settingsRow, i < items.length - 1 && styles.settingsBorder]}
            onPress={() => onPress(it)}>
            <Typography size={13} color={G.forest}>
              {it.l}
            </Typography>
            <Typography color={G.muted}>›</Typography>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const ProfileScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const headerPadTop = insets.top + Sizer.vSize(48);

  const openItem = it => {
    if (it.tab) {
      navigation.navigate('MainTabs', { screen: it.tab });
    } else {
      navigation.navigate(it.screen);
    }
  };

  return (
    <View style={styles.page}>
      <View style={[styles.profileHeader, { paddingTop: headerPadTop }]}>
        <View style={[styles.headerBar, { top: insets.top + Sizer.vSize(12) }]}>
          <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={12} style={{ minWidth: 48, minHeight: 48, justifyContent: 'center' }}>
            <Typography size={18} color="rgba(255,255,255,0.9)">
              ←
            </Typography>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ProfileMenuScreen')} hitSlop={12} style={{ minHeight: 48, justifyContent: 'center' }}>
            <Typography size={12} color="rgba(255,255,255,0.8)" style={{ fontWeight: '500' }}>
              Options
            </Typography>
          </TouchableOpacity>
        </View>
        <View style={styles.headerGlow} />
        <View style={styles.avatar}>
          <Typography size={28}>🌿</Typography>
        </View>
        <Typography style={styles.nameTitle}>Emma Richardson</Typography>
        <View style={styles.premiumBadge}>
          <Typography style={styles.premiumLabel}>Premium Member</Typography>
        </View>
        <Flex direction="row" gap={6} mT={8} flexWrap="wrap" jusContent="center">
          {['Vegetables', 'Backyard', 'Zone 9b'].map(c => (
            <View key={c} style={styles.interestChip}>
              <Typography size={10} color="rgba(255,255,255,0.9)">
                {c}
              </Typography>
            </View>
          ))}
        </Flex>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingBottom: Sizer.vSize(110) }}
        showsVerticalScrollIndicator={false}>
        <View style={styles.statsGrid}>
          {[
            { n: '18', l: 'Plants' },
            { n: '42', l: 'Tasks' },
            { n: '5', l: 'Orders' },
          ].map(s => (
            <View key={s.l} style={styles.statBox}>
              <Typography size={16} color={G.forest} style={{ fontWeight: '700' }}>
                {s.n}
              </Typography>
              <Typography size={10} color={G.muted}>
                {s.l}
              </Typography>
            </View>
          ))}
        </View>

        <View style={styles.subCard}>
          <Flex jusContent="space-between" extraStyle={{ width: '100%' }}>
            <View>
              <Typography size={9} color={G.accent} style={{ fontWeight: '600', letterSpacing: 1 }}>
                SUBSCRIPTION
              </Typography>
              <Typography size={15} color="#FFFFFF" mT={4} style={{ fontWeight: '700' }}>
                SolTerra Premium
              </Typography>
              <Typography size={10} color="rgba(255,255,255,0.7)" mT={2}>
                Next billing: June 26, 2026
              </Typography>
            </View>
            <View style={styles.activeBadge}>
              <Typography size={9} color={G.primary} style={{ fontWeight: '700' }}>
                Active
              </Typography>
            </View>
          </Flex>
          <Flex gap={8} mT={12} extraStyle={{ width: '100%' }}>
            <TouchableOpacity
              style={styles.manageBtn}
              onPress={() => navigation.navigate('EditProfileScreen')}>
              <Typography size={11} color={G.primary} style={{ fontWeight: '600' }}>
                Manage
              </Typography>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.billingBtn}
              onPress={() => navigation.navigate('EditProfileScreen')}>
              <Typography size={11} color="#FFFFFF" style={{ fontWeight: '500' }}>
                Billing
              </Typography>
            </TouchableOpacity>
          </Flex>
        </View>

        <SettingsGroup
          title="My Account"
          onPress={openItem}
          items={[
            { l: 'Edit Profile', screen: 'EditProfileScreen' },
            { l: 'Garden Preferences', screen: 'ProfileSetupScreen' },
            { l: 'Notification Settings', screen: 'NotificationsScreen' },
            { l: 'Privacy & Security', screen: 'EditProfileScreen' },
          ]}
        />
        <SettingsGroup
          title="My Garden"
          onPress={openItem}
          items={[
            { l: 'My Garden', tab: 'GardenScreen' },
            { l: 'Monthly Garden Audit', screen: 'GardenAuditScreen' },
            { l: 'AI Garden Scan', screen: 'GardenScanScreen' },
          ]}
        />
        <SettingsGroup
          title="My Orders"
          onPress={openItem}
          items={[
            { l: 'Order History', screen: 'OrderCompleteScreen' },
            { l: 'Track Orders', screen: 'OrderCompleteScreen' },
            { l: 'Returns & Refunds', screen: 'CartScreen' },
          ]}
        />
        <SettingsGroup
          title="Support"
          onPress={openItem}
          items={[
            { l: 'Ask Solterra AI', screen: 'AskSolScreen' },
            { l: 'Help Center', screen: 'AskSolScreen' },
            { l: 'Contact Us', screen: 'AskSolScreen' },
          ]}
        />

        <TouchableOpacity
          style={styles.signOut}
          onPress={() =>
            navigation.reset({ index: 0, routes: [{ name: 'SplashScreen' }] })
          }>
          <Typography size={13} color="#C45C4A" style={{ fontWeight: '600' }}>
            Sign Out
          </Typography>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
