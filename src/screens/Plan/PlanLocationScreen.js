import React, { useState } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { OnboardingFeatureIcon } from '../../components/solterra/OnboardingFeatureIcons';
import Typography from '../../atomComponents/Typography';
import { FONTS } from '../../globalStyle/Theme';
import { G } from '../_partials/gardenUi';
import Sizer from '../../helpers/Sizer';
import { ONBOARDING_UI } from '../OnBoard/onboardingUi';
import PlanFlowLayout from './_partials/PlanFlowLayout';
import {
  PLAN_BOTTOM_IMAGE,
  PlanBottomImage,
} from './_partials/planUi';
import { accountLocation } from '../../assets/images';

const LOCATION_IMAGE_BOX = {
  ...PLAN_BOTTOM_IMAGE,
  minHeight: 150,
  maxHeight: 190,
};

const PlanLocationScreen = ({ navigation }) => {
  const [zip, setZip] = useState('');

  return (
    <PlanFlowLayout
      stepIndex={2}
      stepCount={5}
      title="Where is your garden located?"
      subtitle="This helps us understand your climate and growing conditions."
      onNext={() => navigation.navigate('PlanSpaceTypeScreen')}>
      <View style={styles.locationCard}>
        <View style={styles.topRow}>
          <View style={styles.zipSection}>
            <View style={styles.zipRow}>
              <View style={styles.rowIcon}>
                <OnboardingFeatureIcon name="pin" color={ONBOARDING_UI.green} />
              </View>
              <TextInput
                value={zip}
                onChangeText={setZip}
                placeholder="Enter your ZIP code"
                placeholderTextColor={G.muted}
                keyboardType="number-pad"
                style={styles.zipInput}
              />
            </View>
          </View>

          <View style={styles.countryBlock}>
            <Typography size={11} color={ONBOARDING_UI.text} style={styles.countryLabel}>
              Country
            </Typography>
            <Pressable style={styles.countrySelect}>
              <Typography size={12} color={ONBOARDING_UI.green} style={styles.countryValue} numberOfLines={1}>
                United States
              </Typography>
              <OnboardingFeatureIcon name="chevronDown" color={ONBOARDING_UI.green} />
            </Pressable>
          </View>
        </View>

        <View style={styles.divider} />

        <Pressable style={styles.gpsRow}>
          <View style={styles.rowIcon}>
            <OnboardingFeatureIcon name="gps" color={ONBOARDING_UI.green} />
          </View>
          <Typography size={14} color={ONBOARDING_UI.green} style={styles.gpsLabel}>
            Use my current location
          </Typography>
        </Pressable>
      </View>

      <PlanBottomImage
        imageSource={accountLocation}
        imageScale={1.1}
        imageBox={LOCATION_IMAGE_BOX}
      />
    </PlanFlowLayout>
  );
};

const styles = StyleSheet.create({
  locationCard: {
    borderRadius: ONBOARDING_UI.radiusMd,
    borderWidth: 1,
    borderColor: ONBOARDING_UI.cardBorder,
    backgroundColor: ONBOARDING_UI.cardBg,
    overflow: 'hidden',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: Sizer.hSize(10),
    paddingTop: Sizer.vSize(14),
    paddingHorizontal: Sizer.hSize(14),
  },
  zipSection: {
    flex: 1,
    minWidth: 0,
  },
  zipRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Sizer.hSize(10),
    minHeight: Sizer.hSize(40),
  },
  rowIcon: {
    width: 24,
    alignItems: 'center',
    flexShrink: 0,
  },
  zipInput: {
    flex: 1,
    fontSize: Sizer.fS(14),
    fontFamily: FONTS.body,
    fontWeight: '500',
    color: ONBOARDING_UI.green,
    padding: 0,
  },
  countryBlock: {
    width: Sizer.hSize(112),
    flexShrink: 0,
    gap: Sizer.vSize(4),
  },
  countryLabel: {
    fontFamily: FONTS.body,
    fontWeight: '500',
    paddingLeft: Sizer.hSize(2),
  },
  countrySelect: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Sizer.hSize(4),
    minHeight: Sizer.hSize(40),
    paddingHorizontal: Sizer.hSize(10),
    borderRadius: ONBOARDING_UI.radiusMd,
    borderWidth: 1,
    borderColor: ONBOARDING_UI.cardBorder,
    backgroundColor: ONBOARDING_UI.cream,
  },
  countryValue: {
    flex: 1,
    fontFamily: FONTS.body,
    fontWeight: '500',
    lineHeight: Sizer.fS(16),
  },
  divider: {
    height: 1,
    backgroundColor: G.divider,
    marginHorizontal: Sizer.hSize(14),
    marginTop: Sizer.vSize(12),
  },
  gpsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Sizer.hSize(10),
    paddingHorizontal: Sizer.hSize(14),
    paddingVertical: Sizer.vSize(14),
  },
  gpsLabel: {
    flex: 1,
    fontFamily: FONTS.body,
    fontWeight: '500',
    lineHeight: Sizer.fS(20),
  },
});

export default PlanLocationScreen;
