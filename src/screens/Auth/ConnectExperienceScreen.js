import React, { useState } from 'react';
import { StyleSheet, Switch, TouchableOpacity, View } from 'react-native';
import { Button } from '../../components';
import { OnboardingFeatureIcon } from '../../components/solterra/OnboardingFeatureIcons';
import Typography from '../../atomComponents/Typography';
import { FONTS } from '../../globalStyle/Theme';
import { G } from '../_partials/gardenUi';
import Sizer from '../../helpers/Sizer';
import { ONBOARDING_IMAGE, ONBOARDING_UI } from '../OnBoard/onboardingUi';
import SetupFlowLayout from './_partials/SetupFlowLayout';
import { accountConnect } from '../../assets/images';

const CONNECT_IMAGE_BOX = {
  ...ONBOARDING_IMAGE.middle,
  minHeight: 170,
  maxHeight: 200,
};

const CONNECT_ROWS = [
  { id: 'sync', icon: 'sync', label: 'Sync across devices' },
  { id: 'weather', icon: 'weather', label: 'Weather updates' },
  { id: 'reminders', icon: 'clipboardCheck', label: 'Reminders & tasks' },
  { id: 'tips', icon: 'tips', label: 'Tips & inspiration' },
];

function ToggleRow({ icon, label, value, onValueChange }) {
  return (
    <View style={styles.toggleRow}>
      <View style={styles.toggleLeft}>
        <View style={styles.iconSlot}>
          <OnboardingFeatureIcon name={icon} color={ONBOARDING_UI.green} />
        </View>
        <Typography size={14} color={ONBOARDING_UI.green} style={styles.toggleLabel}>
          {label}
        </Typography>
      </View>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ true: ONBOARDING_UI.primary, false: G.divider }}
        thumbColor={ONBOARDING_UI.white}
        ios_backgroundColor={G.divider}
      />
    </View>
  );
}

const ConnectExperienceScreen = ({ navigation }) => {
  const [toggles, setToggles] = useState({
    sync: true,
    weather: true,
    reminders: true,
    tips: true,
  });

  const finish = () => navigation.navigate('PlanIntroScreen');

  return (
    <SetupFlowLayout
      imageFirst
      centered
      setupRoute="ConnectExperienceScreen"
      navigation={navigation}
      title="Connect for a better\nexperience."
      subtitle="Sync devices, get smarter\nrecommendations, and never\nlose your garden."
      subtitleColor={ONBOARDING_UI.text}
      imageSource={accountConnect}
      imageScale={1.1}
      imageBox={CONNECT_IMAGE_BOX}
      imageResizeMode="contain"
      footer={
        <>
          <Button
            label="Continue"
            onPress={finish}
            height={52}
            btnStyle={styles.primaryBtn}
            textStyle={styles.primaryBtnText}
          />
          <TouchableOpacity onPress={finish} activeOpacity={0.7} accessibilityRole="button">
            <Typography size={13} color={ONBOARDING_UI.primary} textAlign="center" style={styles.footerLink}>
              Maybe later
            </Typography>
          </TouchableOpacity>
        </>
      }>
      <View style={styles.toggleList}>
        {CONNECT_ROWS.map(row => (
          <ToggleRow
            key={row.id}
            icon={row.icon}
            label={row.label}
            value={toggles[row.id]}
            onValueChange={v => setToggles(prev => ({ ...prev, [row.id]: v }))}
          />
        ))}
      </View>
    </SetupFlowLayout>
  );
};

const styles = StyleSheet.create({
  toggleList: {
    gap: Sizer.vSize(16),
    paddingTop: Sizer.vSize(16),
  },
  toggleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Sizer.hSize(12),
    minHeight: Sizer.hSize(32),
  },
  toggleLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Sizer.hSize(12),
    minWidth: 0,
  },
  iconSlot: {
    width: 28,
    alignItems: 'center',
    flexShrink: 0,
  },
  toggleLabel: {
    flex: 1,
    fontFamily: FONTS.body,
    fontWeight: '500',
    lineHeight: Sizer.fS(21),
  },
  primaryBtn: {
    borderRadius: ONBOARDING_UI.radiusMd,
    backgroundColor: ONBOARDING_UI.primary,
  },
  primaryBtnText: {
    color: ONBOARDING_UI.white,
    fontWeight: '600',
    fontSize: Sizer.fS(16),
  },
  footerLink: {
    fontFamily: FONTS.bodySemiBold,
    fontWeight: '600',
    marginTop: Sizer.vSize(16),
  },
});

export default ConnectExperienceScreen;
