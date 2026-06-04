import React, { useState } from 'react';
import { ScrollView, StyleSheet, Switch, View } from 'react-native';
import { TextField } from '../../../components';
import Typography from '../../../atomComponents/Typography';
import Sizer from '../../../helpers/Sizer';
import { G, gardenUi } from '../../_partials/gardenUi';
import { ProfileEditHeader } from './ProfileFlowHeader';

const EditProfileScreen = ({ navigation }) => {
  const [toggles, setToggles] = useState([true, true, true, false]);

  return (
    <View style={styles.page}>
      <ProfileEditHeader navigation={navigation} />

      <ScrollView
        contentContainerStyle={[gardenUi.pageX, styles.scroll]}
        showsVerticalScrollIndicator={false}>
        <View style={styles.editAvatarWrap}>
          <View style={styles.editAvatar}>
            <Typography size={32}>🌿</Typography>
          </View>
          <View style={styles.editBadge}>
            <Typography size={10} color={G.sageLight}>
              ✎
            </Typography>
          </View>
          <Typography size={11} color={G.muted} mT={8}>
            Tap to change photo
          </Typography>
        </View>

        <View style={styles.fields}>
          <TextField label="Full Name" defaultValue="Emma Richardson" />
          <TextField label="Username" defaultValue="@emmagrows" />
          <TextField label="Email" defaultValue="emma@solterra.app" />
          <TextField label="Phone" defaultValue="+1 (503) 555-0143" />
          <TextField label="Location" defaultValue="Portland, OR" />
        </View>

        <Typography size={10} color={G.muted} mT={24} mB={8} style={styles.sectionLabel}>
          NOTIFICATIONS
        </Typography>
        <View style={styles.settingsCard}>
          {['Watering reminders', 'Task due today', 'Shop deals', 'Sol replies'].map((l, i) => (
            <View key={l} style={[styles.settingsRow, i > 0 && styles.settingsBorder]}>
              <Typography size={13} color={G.forest}>
                {l}
              </Typography>
              <Switch
                value={toggles[i]}
                onValueChange={v => {
                  const next = [...toggles];
                  next[i] = v;
                  setToggles(next);
                }}
                trackColor={{ true: G.sage, false: G.divider }}
                thumbColor="#FFFFFF"
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: G.cream,
  },
  scroll: {
    paddingBottom: Sizer.vSize(32),
    paddingTop: Sizer.vSize(20),
  },
  editAvatarWrap: { alignItems: 'center' },
  editAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: G.sageLight,
    borderWidth: 4,
    borderColor: G.cream,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editBadge: {
    position: 'absolute',
    bottom: 24,
    right: '35%',
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: G.forest,
    borderWidth: 2,
    borderColor: G.cream,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fields: { gap: 12, marginTop: 20 },
  sectionLabel: { fontWeight: '600', letterSpacing: 1.2 },
  settingsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: G.divider,
    overflow: 'hidden',
  },
  settingsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  settingsBorder: { borderTopWidth: 1, borderTopColor: G.divider },
});

export default EditProfileScreen;
