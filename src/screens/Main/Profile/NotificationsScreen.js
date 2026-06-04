import React, { useState } from 'react';
import { ScrollView, StyleSheet, Switch, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Typography from '../../../atomComponents/Typography';
import { ProfileCenteredHeader } from './ProfileFlowHeader';
import { G, gardenUi } from '../../_partials/gardenUi';
import Sizer from '../../../helpers/Sizer';

const ITEMS = [
  'Watering reminders',
  'Task due today',
  'Climate alerts',
  'Community activity',
  'Shop deals',
];

const NotificationsScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [on, setOn] = useState([true, true, true, false, false]);

  const toggle = i => {
    setOn(prev => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  };

  return (
    <View style={gardenUi.page}>
      <ProfileCenteredHeader navigation={navigation} title="Notifications" />
      <ScrollView
        contentContainerStyle={[
          gardenUi.pageX,
          styles.list,
          { paddingBottom: insets.bottom + Sizer.vSize(24) },
        ]}>
        {ITEMS.map((label, i) => (
          <View key={label} style={[gardenUi.card, styles.row]}>
            <Typography size={14} color={G.forest}>
              {label}
            </Typography>
            <Switch
              value={on[i]}
              onValueChange={() => toggle(i)}
              trackColor={{ true: G.sage, false: G.divider }}
              thumbColor="#fff"
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  list: { gap: 8, paddingTop: 4 },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
});

export default NotificationsScreen;
